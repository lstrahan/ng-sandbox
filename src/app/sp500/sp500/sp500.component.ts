// tslint:disable:max-line-length

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../stock';
import { tap, map } from 'rxjs/operators';
import moment from 'moment';

@Component({
  selector: 'my-sp500',
  templateUrl: './sp500.component.html',
  styleUrls: ['./sp500.component.scss']
})
export class SP500Component implements OnInit {

  sp500HistoricalData: Stock[];
  balance: number = 100000;
  startingDate: moment.Moment = moment('1/2/2001');
  endingDate: moment.Moment = moment('8/8/2019');
  percentDropThreshold: number = -0.05;
  maxWindow: number = 30;
  sellBumpPercent: number = 0.00;
  startOfDeclineDataPoint: Stock = null;
  buyDataPoint: Stock = null;
  sellDataPoint: Stock = null;
  isHolding: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Stock[]>('assets/SP500.json')
      .pipe(map(res => res.map(item => new Stock(item))))
      .subscribe(res => {
        this.sp500HistoricalData = res;

        this.sp500HistoricalData = this.sp500HistoricalData.filter(item => item.date.isBetween(this.startingDate, this.endingDate, null, '[]') );

        let origBalance: number = this.balance;
        this.sellDataPoint = this.sp500HistoricalData[0];

        for (let i: number = 0; i < this.sp500HistoricalData.length; i++) {
          const currentDataPoint = this.sp500HistoricalData[i];

          if (this.isHolding) {
            // console.log(`looking for sell signal ${this.startOfDeclineDataPoint.date.calendar()} to ${refDataPoint.date.calendar()} = ${this.getPercentChange(this.startOfDeclineDataPoint.close, this.sp500HistoricalData[i].close)}`);
            if (currentDataPoint.close >= this.startOfDeclineDataPoint.close + this.startOfDeclineDataPoint.close * this.sellBumpPercent) {
              const precentChange = this.getPercentChange(this.buyDataPoint.close, currentDataPoint.close);
              this.balance += this.balance * precentChange;
              this.isHolding = false;
              this.sellDataPoint = currentDataPoint;
              console.log(`SELL!!! ${this.buyDataPoint.date.calendar()} to ${currentDataPoint.date.calendar()} = ${(precentChange * 100).toFixed(2)}%, balance = ${Math.floor(this.balance).toLocaleString()}`);
            }
          } else {
            for (let j: number = 0; j < this.maxWindow; j++) {
              if (i + j > this.sp500HistoricalData.length - 1) { break; } // don't go past the end of the array

              const windowEndDataPoint = this.sp500HistoricalData[i + j];
              const precentChange = this.getPercentChange(currentDataPoint.close, windowEndDataPoint.close);
              // console.log(`looking for buy signal ${currentDataPoint.date.calendar()} to ${currentDataPoint.date.calendar()} = ${precentChange}`);
              if (precentChange <= this.percentDropThreshold) {
                this.startOfDeclineDataPoint = currentDataPoint;
                this.buyDataPoint = windowEndDataPoint;
                this.isHolding = true;
                i = i + j;

                const numDays = this.buyDataPoint.date.diff(this.sellDataPoint.date, 'days');
                const savingsPercentChange  = 0.02 * (numDays / 365);
                this.balance += this.balance * savingsPercentChange;
                console.log(`# days since last sell = ${numDays}, savings percent = ${(savingsPercentChange * 100).toFixed(2)}, new balance = ${Math.floor(this.balance).toLocaleString()}`);

                console.log(`BUY!!! ${currentDataPoint.date.calendar()} to ${windowEndDataPoint.date.calendar()} = ${(precentChange * 100).toFixed(2)}%`);
                break;
              }
            }
          }
        }

        const totalPercentChange = this.getPercentChange(origBalance, this.balance)  * 100;
        const numYears = this.sp500HistoricalData[this.sp500HistoricalData.length - 1].date.diff(this.sp500HistoricalData[0].date, 'years', true);
        console.log(`numYears = ${numYears.toFixed(2)}, ${this.startingDate.calendar()} - ${this.endingDate.calendar()}`);
        console.log(`balance = $${Math.floor(this.balance).toLocaleString()}, ${totalPercentChange.toFixed(0)}%, ${(totalPercentChange / numYears).toFixed(2)}%/yr`);
      });
  }

  getPercentChange(oldVal: number, newVal: number) {
    return (newVal - oldVal) / oldVal;
  }

}

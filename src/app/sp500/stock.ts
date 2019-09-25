import moment from 'moment';

export class Stock {
    date: moment.Moment;
    open: number = 0;
    high: number = 0;
    low: number = 0;
    close: number = 0;
    volume: number = 0;

    constructor(json?: any) {
      if (json) {
        this.deserialize(json);
      }
    }

    /****************************************************************************
   * deserialize
   ****************************************************************************/
    deserialize(json: any) {
      this.date = moment(json.Date);
      this.open = json.Open;
      this.high = json.High;
      this.low = json.Low;
      this.close = json.Close;
      this.volume = json.Volume;
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../../library/customer.service';
@Component({
    selector: 'app-message',
    template: `<h2>{{message}}</h2><mat-icon>accessibility</mat-icon>`
})
export class MessageComponent implements OnInit {
    @Input() message: string = 'MessageComponent';

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {
        this.message += ' this was appended inside MessageComponent.ngOnInit';
    }

}

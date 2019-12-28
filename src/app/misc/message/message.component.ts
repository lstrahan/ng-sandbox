import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../../library/customer.service';
@Component({
    selector: 'my-message',
    template: `<h2>{{message}}</h2><mat-icon>accessibility</mat-icon>`
})
export class MessageComponent implements OnInit {
    @Input() message: string = '';

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {
        this.message += ' - this was appended inside MessageComponent.ngOnInit';
    }

}

import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-message',
    template: `<h2>{{message}}</h2><mat-icon>accessibility</mat-icon>`
})
export class MessageComponent {
    @Input() message: string;
}

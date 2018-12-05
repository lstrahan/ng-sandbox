import { OnInit, EventEmitter } from '@angular/core';
export declare class TitleComponent implements OnInit {
    title: string;
    onCancel: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
}

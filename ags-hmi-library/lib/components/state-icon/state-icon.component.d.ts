import { OnInit } from '@angular/core';
import { IconService } from '../../services/icon.service';
export declare class StateIconComponent implements OnInit {
    iconService: IconService;
    state: string;
    constructor(iconService: IconService);
    ngOnInit(): void;
}
export declare class UciStateIconComponent implements OnInit {
    iconService: IconService;
    state: string;
    constructor(iconService: IconService);
    ngOnInit(): void;
}

import { AfterViewInit } from '@angular/core';
import { LogService } from '../../services/log.service';
export declare class ProgressComponent implements AfterViewInit {
    private logService;
    constructor(logService: LogService);
    ngAfterViewInit(): void;
    hideComponent(): void;
}

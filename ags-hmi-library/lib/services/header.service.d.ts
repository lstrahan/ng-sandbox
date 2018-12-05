import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
export declare class HeaderService {
    private titleService;
    appName: string;
    headerTitle: BehaviorSubject<string>;
    breadcrumb: BehaviorSubject<object>;
    private _headerPrimaryTitle;
    private _headerSubTitle;
    headerPrimaryTitle: any;
    headerSubTitle: any;
    constructor(titleService: Title);
    init(appName: string): void;
    updateHeaderTitle(): void;
    updateBreadcrumb(): void;
}

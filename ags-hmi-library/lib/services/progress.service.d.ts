import { LogService } from './log.service';
export declare class ProgressService {
    private logService;
    pendingRequests: number;
    containerName: string;
    element: HTMLElement;
    constructor(logService: LogService);
    getElement(): HTMLElement;
    setBusy(isBusy: boolean): void;
    setVisible(isVisible: boolean): void;
}

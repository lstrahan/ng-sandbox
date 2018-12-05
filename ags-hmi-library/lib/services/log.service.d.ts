export declare class LogService {
    isLocalhost: boolean;
    isDevMode: boolean;
    constructor();
    debug(...msg: any[]): void;
    local(...msg: any[]): void;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
    highlight(background: string, msg: string): void;
}

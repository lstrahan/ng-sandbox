export declare class AuthenticationRequest {
    userName: string;
    password: string;
    constructor(json: any);
}
export declare class AuthenticationResponse {
    authenticated: boolean;
    displayName: string;
    reason: string;
    token: string;
    constructor(json: any);
}

export class AuthenticationRequest {
    userName: string;
    password: string;

    constructor(json: any) {
        this.userName = json.userName;
        this.password = json.password;
    }
}

export class AuthenticationResponse {
    authenticated: boolean;
    displayName: string;
    reason:	string;
    token: string;

    constructor(json: any) {
        this.authenticated = json.authenticated;
        this.displayName = json.displayName;
        this.reason = json.reason;
        this.token = json.token;
    }
}

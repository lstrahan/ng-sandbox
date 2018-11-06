import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LogService } from './log.service';
import { Util } from '../other/util';
import { AuthenticationRequest, AuthenticationResponse } from '../models/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private serviceUrl: string = '';
  private loginRoute: string = '';
  private AUTHENICATE = '/authenticate';
  private GET_DOMAINS = '/domain';
  private HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
    })
  };

  private USERINFO_KEY: string = 'userInfo';

  private isCurrentlyLoggedIn = false;
  private username: string = '';

  constructor(private http: HttpClient,
    private router: Router,
    private logService: LogService) {
  }

  init(serviceUrl: string, loginRoute = '/login') {
    this.serviceUrl = serviceUrl;
    this.loginRoute = loginRoute;
    this.username = this.getUsernameFromStorage();
    this.isCurrentlyLoggedIn = ((this.username != null) && (this.username.length > 0));
  }

  redirectToLoginPage() {
    this.router.navigateByUrl(this.loginRoute);
  }

  getAuthenticationServicePrefix() {
    return this.serviceUrl;
  }

  getUsernameFromStorage(): string {
    let username: string = '';
    let userInfo = this.getUserInfoFromStorage();

    if (userInfo && userInfo.hasOwnProperty('userName') &&
      (userInfo.userName.length > 0)) {
      username = userInfo.userName;
    }

    return username;
  }

  getDisplayNameFromStorage(): string {
    let displayName: string = '';
    let userInfo = this.getUserInfoFromStorage();

    if (userInfo && userInfo.hasOwnProperty('displayName') &&
      (userInfo.displayName.length > 0)) {
      displayName = userInfo.displayName;
    }

    return displayName;
  }

  getTokenFromStorage(): string {
    let token: string = '';
    let userInfo = this.getUserInfoFromStorage();

    if (userInfo && userInfo.hasOwnProperty('token') &&
      (userInfo.token.length > 0)) {
      token = userInfo.token;
    }

    return token;
  }

  getUserInfoFromStorage(): any {
    let userInfo: any;
    userInfo = sessionStorage.getItem(this.USERINFO_KEY);

    return JSON.parse(userInfo);
  }

  putUserInfoInStorage(userInfo: any): void {
    sessionStorage.setItem(this.USERINFO_KEY, userInfo);
  }

  get isLoggedIn() {
    return this.isCurrentlyLoggedIn;
  }

  get currentUser() {
    return this.getUsernameFromStorage();
  }

  get displayName() {
    return this.getDisplayNameFromStorage();
  }

  get token() {
    return this.getTokenFromStorage();
  }


  getAllDomains(): Observable<string[]> {
    const url = Util.urlJoin(this.serviceUrl, this.GET_DOMAINS);
    this.logService.debug('AuthenticationService.getAllDomains() - url = ' + url);

    return this.http.get<any>(url, this.HTTP_OPTIONS).pipe(
      tap(x => this.logService.debug(`retreived domain list`)),
      map(res => res.strings as string[]),
    );
  }

  logIn(userInfo, domain: string): Observable<AuthenticationResponse> {
    const url = Util.urlJoin(this.serviceUrl, this.AUTHENICATE, domain);
    let authenticationRequest = new AuthenticationRequest(userInfo);

    return this.http.post<AuthenticationResponse>(url, authenticationRequest, this.HTTP_OPTIONS)
      .pipe(
        tap(
          response => {
            this.logService.debug('got authentication response ' + JSON.stringify(response));
            let authenticationResponse = new  AuthenticationResponse(response);
            if (authenticationResponse.authenticated) {
              this.putUserInfoInStorage(JSON.stringify({
                userName: userInfo.userName,
                displayName: authenticationResponse.displayName,
                token: authenticationResponse.token,
              }));
              this.isCurrentlyLoggedIn = true;
            }
          },
          error => {
            this.logService.warn('Error authenticating.  [' + error + ']');
          }),
    );
  }

  logOut() {
    localStorage.removeItem(this.USERINFO_KEY);
    this.username = '';
    this.isCurrentlyLoggedIn = false;
    sessionStorage.clear();
    this.redirectToLoginPage();
  }
}

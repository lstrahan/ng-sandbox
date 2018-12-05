import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { LogService } from '../services/log.service';
export declare class AuthGuard implements CanActivate {
    private authenticationService;
    private logService;
    constructor(authenticationService: AuthenticationService, logService: LogService);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}

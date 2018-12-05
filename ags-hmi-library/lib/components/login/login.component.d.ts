import { AfterContentInit, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from '../../services/log.service';
import { AuthenticationService } from '../../services/authentication.service';
export declare class LoginComponent implements OnInit, AfterContentInit {
    private formBuilder;
    private router;
    private route;
    private logService;
    private authenticationService;
    appName: string;
    username: ElementRef;
    private returnUrl;
    ERROR_MESSAGES: {
        [key: string]: string;
    };
    domainList: string[];
    selectedDomain: string;
    loginForm: FormGroup;
    loginFailed: boolean;
    submitted: boolean;
    constructor(formBuilder: FormBuilder, router: Router, route: ActivatedRoute, logService: LogService, authenticationService: AuthenticationService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    createForm(): void;
    logIn(): void;
    handleOnFocus(): void;
}

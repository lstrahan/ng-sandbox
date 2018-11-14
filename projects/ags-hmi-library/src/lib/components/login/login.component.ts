import {AfterContentInit, Component,  OnInit,  Input,  ViewChild,  ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LogService } from '../../services/log.service';
import { AuthenticationResponse } from '../../models/authentication';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'ags-lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterContentInit  {

  @Input() appName: string = '';
  @ViewChild('username') username: ElementRef;
  
  private returnUrl: string = '';

  public ERROR_MESSAGES: { [key: string]: string } = {
    loginMessage: 'Unable to Sign In, try again.',
  };
  public domainList: string[] = new Array<string>();
  public selectedDomain = 'cos';

  public loginForm: FormGroup;
  public loginFailed: boolean = false;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private logService: LogService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    // this.appName = this.route.snapshot.data['appName'];
    this.route.queryParams.subscribe(
      params => {
        this.returnUrl = params['return'] || '/';
    });

    let component = this;
    this.authenticationService.getAllDomains()
    .subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        component.domainList.push(response[i]);
      }
      component.selectedDomain = component.domainList[0];
    });

    this.createForm();
  }

  ngAfterContentInit() {
    // Set the focus to the username (mwt)
    this.username.nativeElement.focus();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        // Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(50)
      ]],
      password: ['', [
        // Validators.required,
        // Validators.minLength(3),
        // Validators.maxLength(50)
      ]],
      domain: [{value: this.selectedDomain, disabled: false}, [
        Validators.required,
      ]],
    });
  }

  logIn() {
    this.submitted = true;

    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;

    this.authenticationService.logIn({
      userName: username,
      password: password}, this.selectedDomain)
      .subscribe(
        res => {
          let authenticationResponse = new AuthenticationResponse(res);
          if (!authenticationResponse.authenticated) {
            this.loginFailed = true;
          } else {
            this.router.navigateByUrl(this.returnUrl);
          }
        },
        err => {
          this.logService.debug('Error occured while authenticating.  ' + JSON.stringify(err));
          this.loginFailed = true;
        }
      );
  }

  handleOnFocus() {
    if (this.submitted) {
      this.submitted = false;
      this.loginFailed = false;
      this.loginForm.markAsPristine();
      this.loginForm.markAsUntouched();
    }
  }
}

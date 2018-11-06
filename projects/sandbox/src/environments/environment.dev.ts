// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  name: 'DEV',

  Classification: 'UNCLASSIFIED',
  // Caveats: '(BOEING PROPRIETARY)',
  Caveats: '// FOUO',
  production: false,

  AuthenticationService_URL: 'https://10.38.108.51/AuthenticationService/webapi',
  EntityService_URL: 'https://10.38.108.51/EntityService/webapi',
  EventModelService_URL: 'https://10.38.108.51/EventModelService/webapi',
  PlanService_URL: 'https://10.38.108.51/PlanService/webapi',
  AlertService_URL: 'wss://10.38.108.51/nginxalert/websocket',
  CALService_URL: 'https://10.38.108.51/CALService/webapi',
  AnnotationService_URL: 'https://10.38.108.51/AnnotationService/webapi'
};

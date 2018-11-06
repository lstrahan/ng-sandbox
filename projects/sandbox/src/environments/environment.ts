export const environment = {
  name: 'LOCAL',

  Classification: 'UNCLASSIFIED',
  Caveats: '(ENV = LOCAL)',
  production: false,

  AuthenticationService_URL: 'http://10.38.108.51/AuthenticationService/webapi',
  EntityService_URL: 'http://10.38.108.51/EntityService/webapi',
  EventModelService_URL: 'http://10.38.108.51/EventModelService/webapi',
  PlanService_URL: 'https://10.38.108.51/PlanService/webapi',
  AlertService_URL: 'wss://10.38.108.51/nginxalert/websocket',
  CALService_URL: 'https://10.38.108.51/CALService/webapi',
  AnnotationService_URL: 'https://10.38.108.51/AnnotationService/webapi'
};

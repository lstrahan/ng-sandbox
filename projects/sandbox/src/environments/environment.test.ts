export const environment = {
  name: 'TEST',

  Classification: 'UNCLASSIFIED',
  // Caveats: '(BOEING PROPRIETARY)',
  Caveats: '// FOUO',
  production: true,

  AuthenticationService_URL: 'http://10.38.108.55/AuthenticationService/webapi',
  EntityService_URL: 'http://10.38.108.55/EntityService/webapi',
  EventModelService_URL: 'http://10.38.108.55/EventModelService/webapi',
  PlanService_URL: 'https://10.38.108.55/PlanService/webapi',
  AlertService_URL: 'wss://10.38.108.55/nginxalert/websocket',
  CALService_URL: 'https://10.38.108.55/CALService/webapi',
  AnnotationService_URL: 'https://10.38.108.55/AnnotationService/webapi'
};

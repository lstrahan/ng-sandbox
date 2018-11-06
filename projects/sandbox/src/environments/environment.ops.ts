export const environment = {
  name: 'OPS',

  Classification: 'UNCLASSIFIED',
  // Caveats: '(BOEING PROPRIETARY)',
  Caveats: '// FOUO',
  production: true,

  AuthenticationService_URL: 'http://10.38.108.151/AuthenticationService/webapi',
  EntityService_URL: 'http://10.38.108.151/EntityService/webapi',
  EventModelService_URL: 'http://10.38.108.151/EventModelService/webapi',
  PlanService_URL: 'https://10.38.108.151/PlanService/webapi',
  AlertService_URL: 'wss://10.38.108.151/nginxalert/websocket',
  CALService_URL: 'https://10.38.108.151/CALService/webapi',
  AnnotationService_URL: 'https://10.38.108.151/AnnotationService/webapi'
};

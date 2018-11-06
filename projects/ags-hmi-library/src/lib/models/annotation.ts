import * as _ from 'lodash';
import { Expose, classToPlain } from 'class-transformer';
export class Annotation {
    userLogon: string = '';
    lastUpdated: string = '';
    @Expose({name: 'annotationId'})
    id: string = '';
    objectId: string = '';
    annotationType: string = '';
    noteType: string = '';
    narrative: string = '';
    confidence:	number = 0;


  constructor(json?: any) {
    if (json) {
      this.userLogon = json.userLogon;
      this.lastUpdated = json.lastUpdated;
      this.id = json.annotationId;
      this.objectId = json.objectId;
      this.annotationType = json.annotationType;
      this.noteType = json.noteType;
      this.narrative = json.narrative;
      this.confidence = json.confidence;
    }
  }

  serialize() {
    return classToPlain(this);
  }
}

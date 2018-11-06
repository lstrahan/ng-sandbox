export class Domain {
    domainType: string = '';
    agsEntityId: string = '';
    sccNum: string = '';
    orbitType: string = '';
    constellation: string = '';
    intlDesignator: string = '';
    launchSite: string = '';
    launchDate: string = '';
    decayDate: string = '';
    tles: any[];
    waypoints: any[];

    constructor(json?: any) {
        if (json) {
            this.domainType = json.domainType;
            this.agsEntityId = json.agsEntityId;
            this.sccNum = json.sccNum;
            this.orbitType = json.orbitType;
            this.constellation = json.constellation;
            this.intlDesignator = json.intlDesignator;
            this.launchSite = json.launchSite;
            this.launchDate = json.launchDate;
            this.decayDate = json.decayDate;
            this.tles = json.tles;
            this.waypoints = json.waypoints;
        }
        else {
            this.domainType = 'SPACE';
        }
    }
}

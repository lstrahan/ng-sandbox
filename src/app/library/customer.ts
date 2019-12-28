export class Customer {
  id: string = '';
  firstname: string = '';
  lastname: string = '';

  constructor(json?: any) {
    if (json) {
      this.id = json.id;
      this.firstname = json.firstname;
      this.lastname = json.lastname;
    }
  }
}

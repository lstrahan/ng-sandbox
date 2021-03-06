import { Expose, Exclude, Transform, classToPlain, Type, plainToClass, TypeHelpOptions } from 'class-transformer';
import moment from 'moment';
import _ from 'lodash';

export const personJson = {
  id: '1',
  firstname: 'Lance',
  surname: 'Strahan',
  residences: [
    { id: '1', parentId: '1', address: '123 Some St', city: 'Monument', zipcode: '80132', date: `2018-01-01T09:30:00Z`, propOnlyInJson: 'this is only in JSON' },
    { id: '2', parentId: '1', address: '567 Another St', city: 'Colorado Springs', zipcode: '80920', date: `2018-02-02T09:20:00Z`, propOnlyInJson: 'this is only in JSON' }
  ]
};

export class Person {
  id: string = '';
  firstname: string = '';
  @Expose({ name: 'surname' })  // this property is named 'surname' in the JSON, but class uses name 'lastname'
  lastname: string = '';
  @Type(() => Address) @Expose({ name: 'residences' })  // this property is named 'residences' in the JSON, but class uses name 'addresses'
  addresses: Address[] = [];

  constructor(json?: any) {
    if (json) {
      return plainToClass(Person, json);
    }
  }

  toPlainObject(): any {
    return classToPlain(this);
  }
}

class Address {
  id: string = '';
  parentId: string = '';
  address: string = '';
  city: string = '';
  @Expose({ name: 'zipcode' })  // this property is named 'zipcode' in the JSON, but class uses name 'zip'
  zip: string = '';
  @Transform((value) => moment(value).utc().toISOString(), { toPlainOnly: true })
  date: moment.Moment;
  @Exclude()
  excludedProperty: string = '';  // this property is not exposed when converting to a plain object

  get getterShouldBeIgnored(): string {
    return `${this.address}, ${this.city} ${this.zip}`;
  }

  constructor(json?: any) {
    this.excludedProperty = 'initialized in constructor';
    if (json) {
      return plainToClass(Address, json);
    }
  }

  toPlainObject(): any {
    return classToPlain(this);
  }
}


export const zooJson = {
  name: 'Colorado Springs Zoo',
  city: 'Colorado Springs, CO',
  animals: [
    { animalType: 'Elephant', weight: 1000, numLegs: 4, lastUpdated: '2019-03-21T01:01:00.0Z', trunkLength: 5 },
    { animalType: 'Elephant', weight: 1200, numLegs: 4, lastUpdated: '2019-03-21T02:02:00.0Z', trunkLength: 6 },
    { animalType: 'Bird', weight: .75, numLegs: 2, lastUpdated: '2019-03-21T03:03:00.0Z', wingSpan: 2 },
    { animalType: 'Bird', weight: 2.0, numLegs: 2, lastUpdated: '2019-03-21T04:04:00.0Z', wingSpan: 5 },
    { animalType: 'Unknown', weight: 2.0, numLegs: 2, lastUpdated: '2019-03-21T05:05:00.0Z' }
  ]
};


export class Animal {
  animalType: string = 'Unknown'; // Elephant | Bird
  weight: number = 0;
  numLegs: number = 0;

  // @Type(() => Date)
  @Transform(value => {
    return value.toISOString();
  }, { toPlainOnly: true })
  @Transform(value => {
    return moment.utc(value);
  }, { toClassOnly: true })
  lastUpdated: moment.Moment;

  constructor(json?: any) {
    if (json) {
      return plainToClass(Animal, json);
    }
  }

  toPlainObject(): any {
    return classToPlain(this);
  }
}

export class Elephant extends Animal {
  animalType: string = 'Elephant';
  trunkLength: number = 0;

  @Expose({ name: 'lastModified'})
  get lastUpdated(): moment.Moment {
    return super.lastUpdated;
  }
  set lastUpdated(value: moment.Moment) {
    super.lastUpdated = value;
  }

  constructor(json?: any) {
    super(json);
    if (json) {
      return plainToClass(Elephant, json);
    }
  }

  toPlainObject(): any {
    return classToPlain(this);
  }
}

export class Bird extends Animal {
  animalType: string = 'Bird';
  wingSpan: number = 0;

  @Expose({ name: 'lastModified'})
  get lastUpdated(): moment.Moment {
    return super.lastUpdated;
  }
  set lastUpdated(value: moment.Moment) {
    super.lastUpdated = value;
  }

  constructor(json?: any) {
    super(json);
    if (json) {
      return plainToClass(Bird, json);
    }
  }

  toPlainObject(): any {
    return classToPlain(this);
  }
}



// The 'Zoo' class has a polymorphic array 'animals' that can contain elements of any class that extends 'Animal'
export class Zoo {
  name: string;
  city: string;
  @Type(() => Animal, {
    keepDiscriminatorProperty: true,
    discriminator: {
      property: 'animalType',
      subTypes: [
        { value: Elephant, name: 'Elephant' },
        { value: Bird, name: 'Bird' },
        { value: Animal, name: 'Unknown' },
        { value: Animal, name: '' }
      ]
    }
  })
  animals: Animal[] | Bird[] | Elephant[];

  constructor(json?: any) {
    if (json) {
      return plainToClass(Zoo, json);
    }
  }

  toPlainObject(): any {
    return classToPlain(this);
  }
}


export const petsJson = [
  {
    name: 'Ellie',
    animal: { animalType: 'Elephant', weight: 1000, numLegs: 4, trunkLength: 5 }
  },
  {
    name: 'Chirpy',
    animal: { animalType: 'Bird', weight: .75, numLegs: 2, wingSpan: 2 }
  },
  {
    name: 'New Bird',
    animal: { animalType: 'Bird', weight: .75, numLegs: 2 }
  }
];

// The 'Pet' class has a polymorphic property 'animal' that contain any class that extends 'Animal'
export class Pet {
  name: string;
  propNotInJson: string = '';
  arrayNotInJson: string[] = [];

  @Type((type: TypeHelpOptions) => {
    // console.log(type);
    return Animal;
  },
    {
      keepDiscriminatorProperty: true,
      discriminator: {
        property: 'animalType',
        subTypes: [
          { value: Elephant, name: 'Elephant' },
          { value: Bird, name: 'Bird' },
          { value: Animal, name: 'Animal' }
        ]
      }
    })
  animal: Animal | Bird | Elephant = new Animal();

  constructor(json?: any) {
    if (json) {
      return plainToClass(Pet, json);
    }
  }

  toPlainObject(): any {
    // return classToPlain(this);
    const origObj = _.cloneDeep(this);
    const plainObj = classToPlain(this);
    (<Pet>plainObj).animal.animalType = origObj.animal.animalType;
    return plainObj;
  }
}

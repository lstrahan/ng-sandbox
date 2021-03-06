import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { Person, Zoo, zooJson, personJson, Pet, Bird, petsJson, Animal } from './models';

@Component({
  selector: 'my-class-transformer',
  templateUrl: './class-transformer.component.html',
  styleUrls: ['./class-transformer.component.scss']
})
export class ClassTransformerComponent implements OnInit {

  classObj: Person | Zoo | Pet;
  plainObj: any;
  json: any;

  constructor() { }

  ngOnInit() {
  }

  testClassTransformerClick() {
    this.json = personJson;
    const person = new Person(this.json);
    this.classObj = person;
    this.plainObj = person.toPlainObject();
  }

  testClassTransformer2Click() {
    this.json = zooJson;
    const zoo = new Zoo(this.json);
    this.classObj = zoo;
    this.plainObj = zoo.toPlainObject();
  }

  testClassTransformer3Click() {
    this.json = petsJson;

    let myPet = new Pet();
    myPet.name = 'xxxx';
    myPet.animal.animalType = 'Bird';
    console.log(myPet.toPlainObject());  // Animal

    myPet = new Pet(petsJson[0]);
    console.log(myPet);  // Elephant

    myPet = new Pet(petsJson[1]);
    console.log(myPet);  // Bird

    myPet.animal = new Animal();
    myPet.animal.animalType = 'Bird';
    myPet = new Pet(myPet.toPlainObject());
    console.log(myPet);  // Bird

    this.classObj = myPet;
    this.plainObj = myPet.toPlainObject();
  }
}


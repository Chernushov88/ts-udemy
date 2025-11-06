import { faker } from '@faker-js/faker'
import { type Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'black';

  constructor() {
     this.name = faker.person.firstName()
     this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
     }
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}


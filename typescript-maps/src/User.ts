import { faker } from '@faker-js/faker'

const name = "Serhii"
export default 'test String'

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }


  constructor() {
     this.name = faker.person.firstName()
     this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
     }
  }
}


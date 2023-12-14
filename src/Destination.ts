import {faker} from '@faker-js/faker';
import { Entity } from './TrackingMap';
export class Destination implements Entity {
    receiver: string;
    location: {
        lat: number;
        lon: number;
    };
    weight: number;

    constructor() {
        this.receiver = faker.person.firstName() ;
        console.log(this.location);
        this.location = {
            lat: +faker.location.latitude(),
            lon: +faker.location.longitude(),
        };
    }

    popupText(): string {
        return `<h3> Receiver Name is : ${this.receiver} </h3>`
    }
}
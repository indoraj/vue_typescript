import { faker } from "@faker-js/faker";
import { Entity } from "./TrackingMap";
export class Cargo implements Entity{
    trackingId: string;
    location: {
        lat: number;
        lon: number;
    };
    weight: number;

    constructor(){
        this.trackingId = faker.string.uuid();
        this.location = {
            lat: faker.location.latitude(),
            lon: faker.location.longitude(),
        }
    }
    popupText(): string {
        return `<h3> Tracking Id is : ${this.trackingId} </h3>`
    }
   
}
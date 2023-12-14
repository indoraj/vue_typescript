import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { TrackingMap } from "./TrackingMap";



const destination = new Destination();
console.log(destination)

const cargo = new Cargo();
console.log (cargo);
// google;
// new google.maps.Map(document.getElementById('g-map'), {zoom:1.6, center:{lat:0, lng:20,},});

const trackingMap = new TrackingMap('g-map');
trackingMap.attachMarker(destination)
trackingMap.attachMarker(cargo)
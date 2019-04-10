
class Place {
    placeName: string;
    longitude: string;
    latitude: string;
    state: string;
    stateAbbrv: string;
    constructor(raw: any) {
        if (raw) {
            this.placeName = raw['place name'];
            this.longitude = raw['longitude'];
            this.latitude = raw['latitude'];
            this.state = raw['state'];
            this.stateAbbrv = raw['state abbreviation'];
        }
    }
}

export class ZipCode {
    zipCode: string;
    country: string;
    countryAbbrv: string;
    places: Place[] = [];

    constructor(raw: any) {
        if (raw) {
            this.zipCode = raw['post code'];
            this.country = raw['country'];
            this.countryAbbrv = raw['country abbreviation'];
            if (raw.places) {
                this.places = raw.places.map(p => new Place(p));
            }
        }
    }
}


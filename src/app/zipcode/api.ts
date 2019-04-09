
class Place {
    placeName: string;
    longitude: string;
    latitude: string;
    state: string;
    stateAbbrv: string;
    constructor(raw: any) {
        if (raw) {
            this.placeName = raw.get('place name');
            this.longitude = raw.get('longitude');
            this.latitude = raw.get('latitude');
            this.state = raw.get('state');
            this.stateAbbrv = raw.get('state abbreviation');
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
            this.zipCode = raw.get('post code');
            this.country = raw.get('country');
            this.countryAbbrv = raw.get('country abbreviation');
            if (raw.places) {
                this.places = raw.places.map(p => new Place(p));
            }
        }
    }
}


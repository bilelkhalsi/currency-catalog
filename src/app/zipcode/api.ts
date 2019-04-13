
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

export class Zipcode {
    id: string;
    zipCode: string;
    hasDetails = false;
    country: string;
    countryAbbrv: string;
    errorMessage: any;
    places: Place[] = [];

    constructor(id: string, raw: any) {
        this.id = id;
        if (raw) {
            this.hasDetails = true;
            this.errorMessage = raw['errorMessage'];
            this.zipCode = raw['post code'];
            this.country = raw['country'];
            this.countryAbbrv = raw['country abbreviation'];
            if (raw.places) {
                this.places = raw.places.map(p => new Place(p));
            }
        }
    }

}


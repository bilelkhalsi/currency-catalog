import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../api';
/*
 * Build a formated string from a place object.
 */
@Pipe({ name: 'location' })
export class LocationPipe implements PipeTransform {
    transform(location: Location): string {
        if (!location) {
            return '';
        }
        return `${location.stateAbbrv} - ${location.placeName} - ${location.state}`;
    }
}

import { Pipe, PipeTransform } from '@angular/core';
/*
 * transform http error to human language message.
 */
@Pipe({name: 'loadLocationError'})
export class LoadLocationError implements PipeTransform {
  transform(error: any): string {
    console.log(error);
    if ( ! error) {
        return 'Trying to load location failed!';
    }
    if ( error.status === 404 ) {
      return 'Zipcode not found!';
    }
    return error.message || error;
  }
}

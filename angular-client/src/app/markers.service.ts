import { Injectable } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { JsonPipe } from '@angular/common';

@Injectable()
export class MarkersService {

  constructor() { }

  getMarkers() {
    if (localStorage.getItem('marker')) {
      return JSON.parse(localStorage.getItem('marker'));
    } else { return null; }
  }

  setMarkers(marker: any) {
    localStorage.setItem('marker', JSON.stringify(marker));
  }

}

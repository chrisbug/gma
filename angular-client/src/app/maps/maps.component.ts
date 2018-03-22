import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title = 'my first AGM project';
  markerLat = 51.678418;
  markerLng = 7.809007;

  markers: Marker[] = [
    {
      name: 'Meeting Point',
      lat: 51.678418,
      lng: 7.809007
     },
    {
      name: 'Meeting Point 2',
      lat: 53.678418,
      lng: 9.809007
    }
  ];

  constructor(){
  }
  ngOnInit() {
    for (let marker of this.markers) {
      console.log(marker);
    }
  }

  mapClicked($event: any) {
    console.log($event);
    const newMarker = {
      name: 'New Location',
      lat: $event.coords.lat,
      lng: $event.coords.lng
    };
    this.markers.push(newMarker);
  }
  markerClicked(marker: Marker) {
    console.log('Clicked marker ' + marker.name );
    this.markerLat = marker.lat;
    this.markerLng = marker.lng;
    this.title = marker.name;
  }


}

interface Marker {
  name?: string;
  lat: number;
  lng: number;
}

import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MarkersService } from '../markers.service';
import { AgmMap } from '@agm/core';
import { getHostElement } from '@angular/core/src/render3';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title = 'my first AGM project';
  markerLat: number;
  markerLng: number;
  changeMeetingPoint = false;
  marker: Marker;

  constructor(private markerService: MarkersService) {}

  ngOnInit() {
    if (this.markerService.getMarkers()) {
      this.marker = this.markerService.getMarkers();
      this.markerLat = this.marker.lat;
      this.markerLng = this.marker.lng;
    } else {
      if (navigator.geolocation) {
        this.findMe();
      }
    }
  }

  mapClicked($event: any) {
    if (this.changeMeetingPoint) {
      console.log($event);
      this.markerLat = $event.coords.lat;
      this.markerLng = $event.coords.lng;
      const newMarker = {
        name: 'Meeting Point',
        lat: $event.coords.lat,
        lng: $event.coords.lng
      };
      this.marker = newMarker;
      this.markerService.setMarkers(newMarker);
    }
  }
  markerClicked(marker: Marker) {
    console.log('Clicked marker ' + marker.name );
    this.markerLat = marker.lat;
    this.markerLng = marker.lng;
    this.title = marker.name;
  }

  meetUpChange() {
    this.changeMeetingPoint = !this.changeMeetingPoint;
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    console.log("showPosition");
    this.markerLat = position.coords.latitude;
    this.markerLng = position.coords.longitude;
    console.log(this.markerLat);
    console.log(this.markerLng);
  }


}

interface Marker {
  name?: string;
  lat: number;
  lng: number;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-container',
  templateUrl: './maps-container.component.html',
  styleUrls: ['./maps-container.component.scss']
})
export class MapsContainerComponent implements OnInit {

  geoLocation: {lat?: number, lng?: number, err?: any} = {};
  center: google.maps.LatLngLiteral = {lat: 42.6850312, lng: -73.826979};
  zoom = 9;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor() { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.geoLocation.lat = position.coords.latitude;
          this.geoLocation.lng = position.coords.longitude;
          this.center = {
            lat: this.geoLocation.lat || 0,
            lng: this.geoLocation.lng || 0
          }

          const data = {
            "lat": this.geoLocation.lat || 42.6850312,
            "lng": this.geoLocation.lng || -73.826979
          };

          this.markerPositions.push(data);
        }
      }, (err) => {
        this.geoLocation.err = err;
        const data = {
          "lat": 42.6850312,
          "lng": -73.826979
        };

        this.markerPositions.push(data);
      });
    }
  }

  addMarker(event: any) {
    this.markerPositions.push(event.latLng.toJSON());
    console.log("marked locations", this.markerPositions);
  }

}

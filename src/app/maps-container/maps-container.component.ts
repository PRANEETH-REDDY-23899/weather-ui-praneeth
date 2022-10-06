import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-maps-container',
  templateUrl: './maps-container.component.html',
  styleUrls: ['./maps-container.component.scss']
})
export class MapsContainerComponent implements OnInit {

  geoLocation: {lat?: number, lng?: number, err?: any} = {};
  center: google.maps.LatLngLiteral = {lat: 42.6850312, lng: -73.826979};
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDpX7qEsi-3gOj5VtnGSminAJAempssoFo', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }

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

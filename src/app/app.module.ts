import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MapsContainerComponent } from "./maps-container/maps-container.component";
import { FeaturesComponent } from "./features/features.component";
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
} from "@angular-material-components/datetime-picker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { GoogleMapsModule } from "@angular/google-maps";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { AboutDataComponent } from "./about-data/about-data.component";
import { FeatureEngineeringComponent } from "./feature-engineering/feature-engineering.component";
import { OtherResourcesComponent } from "./other-resources/other-resources.component";
import { HomeComponent } from "./home/home.component";
// import { modelComponent } from "./model/model.component";

@NgModule({
  declarations: [
    AppComponent,
    MapsContainerComponent,
    FeaturesComponent,
    AboutComponent,
    AboutDataComponent,
    FeatureEngineeringComponent,
    OtherResourcesComponent,
    HomeComponent,
    // modelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    // NgxMaterialTimepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    MatNativeDateModule,
    NgxMatNativeDateModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

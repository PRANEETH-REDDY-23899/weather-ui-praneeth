import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutDataComponent } from "./about-data/about-data.component";
import { AboutComponent } from "./about/about.component";
import { FeatureEngineeringComponent } from "./feature-engineering/feature-engineering.component";
import { HomeComponent } from "./home/home.component";
import { GuidedLessonsComponent } from "./guided-lessons/guided-lessons.component";
import { OtherResourcesComponent } from "./other-resources/other-resources.component";
// import { modelComponent } from "./model/model.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "aboutData",
    component: AboutDataComponent,
  },
  {
    path: "featureEngineering",
    component: FeatureEngineeringComponent,
  },
  {
    path: "guidedLessons",
    component: GuidedLessonsComponent,
  },
  {
    path: "otherResources",
    component: OtherResourcesComponent,
  },

  // {
  //   path: "model",
  //   component: modelComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

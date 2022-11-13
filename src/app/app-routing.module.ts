
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDataComponent } from './about-data/about-data.component';
import { AboutComponent } from './about/about.component';
import { FeatureEngineeringComponent } from './feature-engineering/feature-engineering.component';
import { HomeComponent } from './home/home.component';
import { GuidedLessonsComponent } from './guided-lessons/guided-lessons.component';
import { OtherResourcesComponent } from './other-resources/other-resources.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { ModelComponent } from "./model/model.component";
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
  {
    path: "applicationPage",
    component: ApplicationPageComponent,
  },
  {
    path: "modelInfo",
    component: ModelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

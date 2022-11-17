import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

// Setting data for the static fields


@Component({
  selector: 'app-featuresSupervised',
  templateUrl: './featuresSupervised.component.html',
  styleUrls: ['./featuresSupervised.component.scss']
})
export class FeaturesSupervisedComponent implements OnInit {
  performancePath = "";
  comparisonPath = "";
  performanceShow = "none";
  comparisonShow = "none";

  mlModels: string[] = ["Multiple_Linear_Regression", "Support_Vector_Regression","Random_Forest"]; 
  features: string[] = ["temperature", "humidity", "precipitation"];
  //times: string[] = ["1 day ahead", "1 week ahead", "1 month ahead"];
  windows: string[] = ["5","15","30"];
  dateControl = new FormControl();

 
  
  constructor() {}

  ngOnInit(): void {
  }

   onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    try {
      let check = f.value["windowSize"][0].length + f.value["features"][0].length + f.value["mlModels"][0].length == 3
      this.performanceShow = "flex";
      this.comparisonShow = "none";
      this.performancePath =  f.value["mlModels"] + "/performanceCharts/CHES_" + f.value["features"];
      console.log(this.performancePath)
      }
      catch(error){
      //console.log(error);
      }
    }

}

import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

// Setting data for the static fields


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  performancePath = "";
  comparisonPath = "";
  performanceShow = "none";
  comparisonShow = "none";

  mlModels: string[] = ["Auto_Regression", "ARIMA", "SARIMA"]; 
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
    try{
    let check = f.value["windowSize"][0].length + f.value["features"][0].length + f.value["mlModels"][0].length == 3
      this.performanceShow = "flex";
      let pathDataset = "prediction_with_target_only";
      this.comparisonShow = "block";
       this.performancePath = "timeseriesModels/" + f.value["mlModels"] + "/performanceCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
      this.comparisonPath =  "timeseriesModels/" + f.value["mlModels"] + "/comparisonCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    }
    catch(error){
    //console.log(error);
    }
    
    console.log(this.performancePath)
  }

}

import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  performancePath = "";
  comparisonPath = "";
  show = "none";

  mlModels: string[] = ["Auto_Regression", "ARIMA", "SARIMA", "LSTM", "RNN", "Multiple Linear Regression", "Support Vector Regression","Random forest"]; 
  features: string[] = ["temperature", "humidity", "precipitation"];
  datasets: string[] = ["Prediction target only", "Entire feature set"];
  //times: string[] = ["1 day ahead", "1 week ahead", "1 month ahead"];
  windows: string[] = ["5","15","30"];
  dateControl = new FormControl();

 
  
  constructor() {}

  ngOnInit(): void {
  }

   onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    let pathDataset = "";
    let pathWindowSize = "";
    let pathFeature = "";
    let pathModel = "";
    if (f.value["datasetField"] == "P"){
      pathDataset = "prediction_with_target_only";
      this.show = "flex";
      }
    this.performancePath = f.value["mlModels"] + "/performanceCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    this.comparisonPath =  f.value["mlModels"] + "/comparisonCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    console.log(this.performancePath)
  }

}

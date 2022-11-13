import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

// Setting data for the static fields


@Component({
  selector: 'app-featuresDeep',
  templateUrl: './featuresDeep.component.html',
  styleUrls: ['./featuresDeep.component.scss']
})
export class FeaturesDeepComponent implements OnInit {
  performancePath = "";
  comparisonPath = "";
  performanceShow = "none";
  comparisonShow = "none";

  mlModels: string[] = ["Auto_Regression", "ARIMA", "SARIMA", "LSTM", "RNN", "Multiple_Linear_Regression", "Support_Vector_Regression","Random_Forest"]; 
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
    if (f.value["datasetField"] == "P"){
      pathDataset = "prediction_with_target_only";
      this.performanceShow = "flex";
    }
    if (f.value["mlModels"] == "Multiple_Linear_Regression" || f.value["mlModels"] == "Support_Vector_Regression" || f.value["mlModels"] == "Random_Forest"){
      this.comparisonShow = "none";
      this.performancePath =  f.value["mlModels"] + "/performanceCharts/CHES_" + f.value["features"];
    }
    else{
      this.comparisonShow = "block";
       this.performancePath = "timeseriesModels/" + f.value["mlModels"] + "/performanceCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
      this.comparisonPath =  "timeseriesModels/" + f.value["mlModels"] + "/comparisonCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    }
    console.log(this.performancePath)
  }

}

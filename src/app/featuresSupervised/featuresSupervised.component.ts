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
  secondPerformancePath="";
  comparisonPath = "";
  performanceShow = "none";
  comparisonShow = "none";

  mlModels: string[] = ["Multiple_Linear_Regression", "Support_Vector_Regression","Random_Forest"]; 
  features: string[] = ["temperature", "humidity", "precipitation"];
  datasets: string[] = ["Prediction target only", "Entire feature set"];
  windows: string[] = ["5","15","30"];
  dateControl = new FormControl();

 
  
  constructor() {}

  ngOnInit(): void {
  }

   onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    let pathDataset = "";
    let modelAbbreviation = "";
    try {
      //andrew's model
       let check = f.value["datasetField"][0].length + f.value["windowSize"][0].length + f.value["features"][0].length + f.value["mlModels"][0].length == 4
      this.performanceShow = "flex";
      this.comparisonShow = "block";
      this.performancePath =  f.value["mlModels"] + "/performanceCharts/CHES_" + f.value["features"];

      //sadia's models
      if (f.value["datasetField"][0] == "P"){
      pathDataset = "prediction_with_target_only";
      }
      else{
      pathDataset = "prediction_with_whole_dataset";
      }

      if (f.value["mlModels"][0] == "M"){
        modelAbbreviation = "LR";
      }
      else if (f.value["mlModels"][0] == "S"){
        modelAbbreviation = "SVR";
      }
      else{
        modelAbbreviation = "RF"
      }

     this.secondPerformancePath = "timeseriesModels/" + f.value["mlModels"] + "/performanceCharts/" + "CHES_" + modelAbbreviation + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    this.comparisonPath =  "timeseriesModels/" + f.value["mlModels"] + "/comparisonCharts/" + "CHES_" + modelAbbreviation + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    console.log(this.secondPerformancePath);
      }
      catch(error){
      //console.log(error);
      }
    }

}

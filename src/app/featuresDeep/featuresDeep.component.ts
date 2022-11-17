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

  mlModels: string[] = ["LSTM", "RNN"]; 
  features: string[] = ["temperature", "humidity", "precipitation"];
  datasets: string[] = ["Prediction target only", "Entire feature set"];
  //times: string[] = ["1 day ahead", "1 week ahead", "1 month ahead"];
  windows: string[] = ["5","15","30"];
  dateControl = new FormControl();

 
  
  constructor() {}

  ngOnInit(): void {
  }

   onSubmit(f: NgForm) {
    console.log(f.valid);
    let pathDataset = "";
    try{
    let check = f.value["datasetField"][0].length + f.value["windowSize"][0].length + f.value["features"][0].length + f.value["mlModels"][0].length == 4
      pathDataset = "prediction_with_target_only";
      this.performanceShow = "flex";
    this.comparisonShow = "block";
     this.performancePath = "timeseriesModels/" + f.value["mlModels"] + "/performanceCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    this.comparisonPath =  "timeseriesModels/" + f.value["mlModels"] + "/comparisonCharts/" + "CHES_" + f.value["mlModels"] + "_" + pathDataset + "_" + f.value["features"] + "_" + f.value["windowSize"];
    console.log(this.performancePath)
      }
      catch(error){
      //console.log(error);
      }
  }

}

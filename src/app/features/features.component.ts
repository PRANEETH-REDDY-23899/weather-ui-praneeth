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
  path = "";
  show = "none";

  mlModels: string[] = ["XG BOOST", "RNN", "Linear Regression", "LSTM", "Random Forest", "HMM"]; 
  features: string[] = ["Temperature", "Humidity", "Precipitation"];
  datasets: string[] = ["Prediction target only", "Entire feature set"]
  //times: string[] = ["1 day ahead", "1 week ahead", "1 month ahead"]
  windows: string[] = ["5","15","30"]
  dateControl = new FormControl();

 
  
  constructor() {}

  ngOnInit(): void {
  }

   onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    let pathDataset = "";
    let pathWindowSize = "";
    let pathFeature = "";
    let pathModel = "";
    if (f.value["datasetField"] == "P" || f.value["datasetField"] == "E"){
      pathDataset = "";
      this.show = "block";
      }
    this.path = f.value["datasetField"] + "/" + f.value["windowField"] +  "/" + f.value["features"] + "/" + f.value["mlModels"];
  }

}

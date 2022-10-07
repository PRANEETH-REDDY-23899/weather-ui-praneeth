import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  mlModels: string[] = ["XG BOOST", "RNN", "Linear Regression", "lstm", "Random Forest", "HMM"]; 
  features: string[] = ["Temparature", "Humidity", "Percipitation"];
  datasets: string[] = ["prediction target only", "entire feature set"]
  prediction : string[] = ["prediction target only", "entire feature set"]

  dateControl = new FormControl();
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

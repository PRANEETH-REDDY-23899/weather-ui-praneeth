import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  mlModels: string[] = ["Supervised", "Regression", "Linear Regression", "Decision Tree", "Random Forest", "Neural Network"]; 
  features: string[] = ["One", "Two", "Three"];
  dateControl = new FormControl();
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

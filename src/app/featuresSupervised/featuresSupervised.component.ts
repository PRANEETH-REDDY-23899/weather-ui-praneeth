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
  modelDescription = "";
  modelObservation = "";
  modelAnalysis= "";
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
          this.modelDescription = "Multiple linear regression (MLR) uses multiple dependent variables to predict the outcome of an independent variable by modelling the linear relationship between the dependent and independent variables.";
          this.modelObservation = "From the visualization result we observe that the R squared score for the MLR model is above 95% when predicting the temperature and humidity, but less than 70% when predicting precipitation. The R squared score of 90% can be interpreted as 90% of the variations in temperature or humidity can be explained by changes in the other independent variables. Similarly, less than 70% of the variations in precipitation can be explained by the changes in other independent variables. Also, this can be seen by looking at the visualization graph, for both temperature and humidity, the points are close to the line of best fit, this is because the difference between the predicted and value for temperature and humidity are less than one, but higher than that.";
          this.modelAnalysis= "MLR performs well in the weather dataset because the dataset meets the criteria/assumptions associated with a linear regression model which are: Linearity (the dependent and independent variables have a linear relationship), homoscedasticity (the variance of residual is the same for any value of the independent variable), independence (the observations are independent of each other), and normality (any fixed value of the features is normally distributed).";
      }
      else if (f.value["mlModels"][0] == "S"){
        modelAbbreviation = "SVR";
          this.modelDescription = "Support vector regression used a hyper-plane to fit data and maintains two boundary lines on either side. Data points that fall on the hyperplane or within the boundary lines are the support vectors. The boundary lines are drawn at epsilon from the hyperplane.";
          this.modelObservation = "From the visualization result, the R squared for the prediction result of random forest is above 90% for temperature and humidity but less than 60% for precipitation. R squared score is a matrix that measures how much variation in the dependent variable can be explained by the variation in the independent variables.";
          this.modelAnalysis= "Support vector regression performs well for our model prediction because unlike the other regression models that tries to minimize the error between the actual and predicted values, SVR (Support Vector Regression) tries to fit the line of best fit within a threshold which is defined by the hyperplane and boundary lines. Support vector regression is suitable for large datasets; this is one of the reasons why SVR seems to perform less than Multiple Linear regression and Random Forest for our model.";
      }
      else{
        modelAbbreviation = "RF"
        this.modelDescription = "Random forest regression uses many decision trees that operate as an ensemble. It uses individual decision trees to create an uncorrelated forest of trees. The prediction of random forest is usually better than that of an individual tree in most cases";
        this.modelObservation = "From the visualization result, the R squared for the prediction result of random forest is above 95% for temperature and humidity but about 60% for precipitation. R squared score is a matrix that measures how much variation in the dependent variable can be explained by the variation in the independent variables.";
        this.modelAnalysis= "From the R squared score, more than 95% of the variation in temperature or humidity can be attributed to the variations in the independent variables in the data set. Similarly, about 60% of the variation in precipitation can be attributed to the variation in the independent variables.";
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

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
  modelDescription = "";
  modelObservation = "";
  modelAnalysis= "";
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
    if (f.value["datasetField"][0] == "P"){
      pathDataset = "prediction_with_target_only";
      }
      else{
      pathDataset = "prediction_with_whole_dataset";
      }
      if (f.value["mlModels"][0] == "R"){
        this.modelDescription = "Before reading the interpretations, we would ask you to read through the basic understanding of the model in Time Series Machine Learning Models. If you have gone through it, you would know that Recurrent Neural Networks are deep learning models usually used to solve problems with sequential data such as time series. What helps RNN to work with time series data is its capability to retain a memory. Neural networks usually consist of layers, for RNN specifically, we use SimpleRNN layer of Keras to design our architecture of the model. The two main hyperparameters of an RNN architecture are the number of layers and the number of neurons. Unlike classical models, where we use window to define one of the hyperparameters, for RNN, the window size is used to rearrange the input of the model. It is important to note that the same architecture (i.e., number of layers and number of neurons) doesn’t necessarily work for all inputs and it needs to be tweaked and updated for different scenarios. In our example, we used two different architectures for predicting temperature, humidity, and precipitation. While one architecture worked well with temperature and humidity, we had to redesign for precipitation. Moreover, neural networks can take in more than one features, which weren’t implemented for classical models due to their increased complexity. You can check out the predicted trends for when only the target sequence is used to predict and also when the sequence of entire feature set is used to predict. You can refer to the code snippet of RNN to see how these are implemented.";
        this.modelObservation = "If you look at the results, you will notice that RNN has different performance based on the input and output of the model. For temperature, we observe that as we decrease the window size, the performance of model increases. Similarly for humidity, we observe that increasing the window size causes the model to performance adversely. However, adding more features for the prediction of humidity causes the performance to be more stable and insensitive to window size. While it is obvious from the performance comparisons that RNN performs far better than classical models (AR, ARIMA, SARIMA), it is interesting that performance of RNN model isn’t much better than the classical models for prediction of precipitation irrespective of the window size and the features.";
        this.modelAnalysis= "A possible intuitive reason for the increased performance with decreasing window size in predicting temperature and humidity is that to know the temperature of today, knowing just the temperature of the past week is good enough. Information of the entire month’s temperature doesn’t help much but it shouldn’t reduce the performance, right? Unfortunately, giving the model more information than it requires causes it to overfit, i.e., it forces the model to memorize the data it was trained with, to the point that they can’t think intuitively. Similarly, when we add more features, prediction of temperature doesn’t require that much information leading to overfitting and adversely affecting the performance. However, when we investigate humidity, we see that adding more features gives a more stable performance with respect to window. Intuitively, this means other features help determining the humidity. For example, if it rained on a specific day and it’s not very windy, it is very likely it could be a humid day. Adding more feature helps the model to learn not just the how humidity changes but how other features affects humidity making it more stable in its prediction. Regarding precipitation, RNN doesn’t perform too well with precipitation like other models. This is due to the high frequency of fluctuations in the trend of precipitation, which is quite difficult for the model to differentiate from outliers or anomalies, and it requires more effort in optimizing the model or more appropriate features. In conclusion, it is quite important to find the optimum information and architecture for a specific problem. ";
      }
      else{
        this.modelDescription = "Before reading the interpretations, we would ask you to read through the basic understanding of the model in Time Series Machine Learning Models. If you have gone through it, you would know that Long Short-term memory is a type of recurrent neural networks usually used to solve problems with sequential data such as time series. LSTM is different from RNN in the sense that it consists of extra units that manages the information in memory such as when it enters the memory, how long and how much information may be kept, when it begins to provide output, and when it begins to decay or be forgotten. This gives LSTM an advantage over RNN. Neural networks usually consist of layers, for LSTM specifically, we use LSTM layer of Keras to design our architecture of the model. The two main hyperparameters of an LSTM architecture are the number of layers and the number of neurons. Unlike classical models, where we use window to define one of the hyperparameters, for LSTM, the window size is used to rearrange the input of the model. It is important to note that the same architecture (i.e., number of layers and number of neurons) doesn’t necessarily work for all inputs and it needs to be tweaked and updated for different scenarios. In our example, we used two different architectures for predicting temperature, humidity, and precipitation. While one architecture worked well with temperature and humidity, we had to redesign for precipitation. Moreover, neural networks can take in more than one features, which weren’t implemented for classical models due to their increased complexity. You can check out the predicted trends for when only the target sequence is used to predict and also when the sequence of entire feature set is used to predict. You can refer to the code snippet of LSTM to see how these are implemented. ";
        this.modelObservation = "If you look at the results, you will notice that LSTM has different performance based on the input and output of the model. Compared to RNN, the performance of LSTM is far more stable when just the sequence of the prediction target only. However, the performance becomes more sensitive to window size when more features are used. On the other hand, while it is obvious from the performance comparisons that LSTM performs far better than classical models (AR, ARIMA, SARIMA), it is interesting that performance of LSTM model isn’t much better than the classical models for prediction of precipitation irrespective of the window size and the features.";
        this.modelAnalysis= "A possible intuitive reason for the stability in performance with changes in window size is that the extra units help the model to forget the information it doesn’t need in the past, whereas RNN is more susceptible to changes in window, mostly getting overfit with an increase in window size. On the other hand, adding more features causes the LSTM models to become more susceptible to changes in window size. This is because the architecture isn’t optimal for the input with added features. Regarding precipitation, LSTM doesn’t perform too well with precipitation like other models. This is due to the high frequency of fluctuations in the trend of precipitation, which is quite difficult for the model to differentiate from outliers or anomalies, and it requires more effort in optimizing the model or more appropriate features. In conclusion, it is quite important to find the optimum information and architecture for a specific problem.";
      }
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

import os

def removeSpaceFromName(directory):
	for filename in os.listdir(directory):
		newName = filename.replace(" ","_")
		os.rename(directory + filename,directory + newName)

removeSpaceFromName("./src/assets/Auto_Regression/performanceCharts/")
removeSpaceFromName("./src/assets/Auto_Regression/comparisonCharts/")
removeSpaceFromName("./src/assets/LSTM/performanceCharts/")
removeSpaceFromName("./src/assets/LSTM/comparisonCharts/")
removeSpaceFromName("./src/assets/RNN/performanceCharts/")
removeSpaceFromName("./src/assets/RNN/comparisonCharts/")
removeSpaceFromName("./src/assets/SARIMA/performanceCharts/")
removeSpaceFromName("./src/assets/SARIMA/comparisonCharts/")
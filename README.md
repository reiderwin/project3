# project3

[![Presentation Link](https://github.com/reiderwin/project3/blob/main/Resources/presentation_image_placeholder.png)](https://docs.google.com/presentation/d/1T9VS1c6-boq4IQaspmSfhmNFfRlykG0CqFMgfjUC9Hg/edit?usp=sharing )

# Data Source:
[Global Data Health Exchange- GHDX](https://ghdx.healthdata.org/us-data)
* Entire US by State from 1981-2014 Cancer Mortality per 100,000 people
* Male and Female data per year
# Main CSV
[CANCER_STATES.CSV](https://github.com/reiderwin/project3/blob/main/Resources/CANCER_STATES.CSV)

# Why Care About Cancer?
* Increasing cancer rates of cancer places strain on healthcare system, costing approx. $21 Billion according to 

[Annual Report to the Nation on the Status of Cancer (2019)](https://www.cancer.gov/news-events/press-releases/2021/annual-report-nation-part-2-economic-burden#:~:text=In%202019%2C%20the%20national%20patient,time%20costs%20of%20%244.87%20billion)

* Putting in place better cancer prevention and treatment also equip the over all system to deal with other challenges: Ebola, AIDS, Covid,...

* Possible Insights from Historical Data:
 * Patient Demographic 
 * Research Direction 
 * Economic Impact 

# Methods & Procedures
### Data Selection & Transformation
* 5 CSVs pulled from GHDX, combined & sorted by state
* Irrelevant data removed
### Data Loading 
* Used MongoDB Database (unstructured)
* Connected to Flask
### Data Extraction 
* Converted dataset to be extract and filterable for data analysis
### Data Visualizations 
* Displayed across states: 
  * Mortality by state over time, both male and female (Plotly Bar Graph, Drop Down Menu)
  * Georgia mortality rates over time, both male and female
### Excess JS Library Used
* JS AOS



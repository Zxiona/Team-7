# Testing

## Test Plan

| Test case ID | Test Type | Description | Scenario |
|--------------------------------------|---------------------|---------------------|---------------------|
| **TF1.1.1** | UAT | Request location permission from user then query geolocation from mapbox  | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows location on map  |
| **TF1.1.2** | UAT | Shows results of closest parking spots on table | 1. User clicks location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows closest parking spots in table  |
| **TF1.1.4** | UAT | Filter results by filter icon | 1. User clicks filter icon <br> 2. User selects filter from dropdown menu <br> 3. Shows filtered parking spots in table |
| **TF1.7** | UAT | Submit form with a review page | 1. Once user signs in review page pops up <br> 2. User inputs a review <br> 3. Submit button sends information to text file  |
| **TF1.2.1** | UAT | Shows searched data when data is inputted into search bar | 1. User clicks search icon <br> 2. User inputs data <br> 3. Shows searched parking spots in table |
| **TF2.1** | UAT | Shows relevent data on data dashboard page | 1. User navigates to dashboard using nav menu 2. Table and map appears showing relevent data |
| **TF3.6** | UAT | Map centers on user location | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Centers map to user location |
| **TNF1** | UAT | The app should only show up to 6 markers when centered on user location  | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows 6 markers only near user  |
| **TNF2** | UAT | The app should only show parking spots 1km from user in table | 1. User clicks location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows closest parking spots within 1km in table |
| **TNF4** | UAT | The app should work on IOS, Android and all browser software | perform all tests on IOS, Android and a different browsers (eg. chrome, safari, opera) |
| **TNF5** | UAT | The app should be able to be portable over all screen sizes and resolutions, through laptops to smartphones.  | perform all tests on multiple different divices |
| **TNF8a** | UAT | the app should respond to user within 4 seconds | 1. User centers location 2. Map centers within 4 seconds |
| **TNF8b** | UAT | the app should respond to user within 4 seconds | 1. User navigates to table page 2. webpage with table appears within 4 seconds |


## Requirements Traceability Matrix

The RTM links requirements to code via testing.

| Use-Case ID | Requirement ID | Software module | Test case ID | Status |
|--------------------------------------|---------------------|---------------------|---------------------|---------------------|
| UC1a | FR1.1 |  |  |
| UC1a | F1.1.2 |  |  |
| UC1a | F1.1.4 |  |  |
| UC1b | F1.7 |  |  |
| UC1a | F1.2.1 |  |  |
| UC1a | F2.1 |  |  |
| UC2 | F3.6 |  |  |
| UC3 |  |  |  |
| UC1a |  |  |  |
| UC1a |  |  |  |
| UC1a |  |  |  |
| UC1a |  |  |  |
| UC1a |  |  |  |
| UC1a |  |  |  |




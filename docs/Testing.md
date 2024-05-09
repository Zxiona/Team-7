# Testing

## Test Plan

| Test case ID | Test Type | Description | Scenario |
|--------------------------------------|---------------------|---------------------|---------------------|
| **TF1.1.1** | UAT | Request location permission from user then query geolocation from mapbox  | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows location on map  |
| **TF1.1.2** | UAT | Shows results of closest parking spots on table | 1. User clicks location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows closest parking spots in table  |
| **TF1.1.4** | UAT | Filter results by filter icon | 1. User clicks filter icon <br> 2. User selects filter from dropdown menu <br> 3. Shows filtered parking spots in table |
| **TF1.1.7** | UAT | Submit form with a review page | 1. Once user signs in review page pops up <br> 2. User inputs a review <br> 3. Submit button sends information to text file  |
| **TF1.2.1** | UAT | Shows searched data when data is inputted into search bar | 1. User clicks search icon <br> 2. User inputs data <br> 3. Shows searched parking spots in table |
| **TF2.1** | UAT | Shows relevent data on data dashboard page | 1. User navigates to dashboard using nav menu 2. Table and map appears showing relevent data |
| **TF3.6** | UAT | Map centers on user location | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Centers map to user location |
| **TNF1** | UAT | The app must only show up to 6 markers when centered on user location  | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows 6 markers only near user  |
| **TNF2** | UAT | The app must only show parking spots 1km from user in table | 1. User clicks location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows closest parking spots within 1km in table |
| **TNF4** | UAT | The app must work on IOS, Android and all browser software | perform all tests on IOS, Android and a different browsers (eg. chrome, safari, opera) |
| **TNF5** | UAT | The app must be able to be portable over all screen sizes and resolutions, through laptops to smartphones.  | perform all tests on multiple different divices |
| **TNF8a** | UAT | the app must respond to user within 4 seconds | 1. User centers location 2. Map centers within 4 seconds |
| **TNF8b** | UAT | the app must respond to user within 4 seconds | 1. User navigates to table page 2. webpage with table appears within 4 seconds |


## Requirements Traceability Matrix

The RTM links requirements to code via testing.

| Use-Case ID | Requirement ID | Software module | Test case ID | Status |
|--------------------------------------|---------------------|---------------------|---------------------|---------------------|
| UC1a | FR1.1 | mapcp.htm | TF1.1.1 | pass |
| UC1a | F1.1.2 | tablecp.htm | TF1.1.2 | fail (data last updated 09/05/24) |
| UC1a | F1.1.4 | tablecp.htm | TF1.1.4 | fail (data last updated 09/05/24) |
| UC1a | F1.7 | Review.htm | TF1.1.7 | fail (data last updated 09/05/24) |
| UC1b | F1.2.1 | tablecp.htm | TF1.2.1 | pass |
| UC1b | F2.1 | data usage.htm | TF2.1 | pass |
| UC3 | F3.6 | mapcp.htm | TF3.6 | pass |
| UC1 | NF1 |  mapcp.htm| TNF1 | fail (data last updated 09/05/24) |
| UC1 | NF2 | tablecp.htm | TNF2 | pass |
| UC1 | NF4 | ALL | TNF4 | pass |
| UC1 | NF5 | ALL | TNF5 | pass |
| UC1 | NF8a | mapcp.htm | TNF8a | pass |
| UC1 | NF8b | tablecp.htm | TNF8b | pass |



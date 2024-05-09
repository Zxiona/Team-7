# Testing

## Test Plan

| Test case ID | Test Type | Description | Scenario |
|--------------------------------------|---------------------|---------------------|---------------------|
| **TF1.1.1** | UAT | Request location permission from user then query geolocation from mapbox  | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows location on map  |
| **TF1.1.2** | UAT | Shows markers of closest parking spots on table | 1. User clicks location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows closest parking spots within 1km in table  |
| **TF1.1.4** | UAT | Filter results by filter icon | 1. User clicks filter icon <br> 2. User selects filter from dropdown menu <br> 3. Shows filtered parking spots in table |
| **TF1.7** | UAT | Submit form with a review page | 1. Once user signs in review page pops up <br> 2. User inputs a review <br> 3. Submit button sends information to text file  |
| **TF1.2.1** | UAT | Shows searched data when data is inputted into search bar | 1. User clicks search icon <br> 2. User inputs data <br> 3. Shows searched parking spots in table |
| **TF2.1** | UAT | Shows relevent data on data dashboard page | 1. User navigates to dashboard using nav menu 2. Table and map appears showing relevent data |
| **TF3.6** | UAT | Map centers on user location | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Centers map to user location |
| **TNF1** | UAT | The app should only show up to 6 markers when centered on user location  | 1. User clicks Location arrow <br> 2. Confirmation box appears, requesting permission <br> 3. Shows 6 markers only near user  |
| **TNF2** | UAT | The app should only show parking spots a mile from user  |  |
| **TNF4** | UAT |  |  |
| **TNF5** | UAT |  |  |
| **TNF8** | UAT |  |  |






### Non-Functional Requirements
### Usability: 

NFR1: The system shall show up to 6 different parking spots near the user.

NFR2: The system shall parking spots up to 1 mile from the user.

NFR3: The system should have a graphical user interface that has the map as the main focus, this allows for the user to have a better experience.


### Portability and Reliability:

NFR4: The system must work on both IOS and Android software  

NFR5: The system must be able to be portable over all screen sizes and resolutions, through laptops to smartphones.

### Availability: 

NFR6: The system should be able to be used at all times even allowing the user to use the app offline.

### Quality: 

NFR7: The system should be made to be able to handle continuous testing and updates without harming the use of the app.

NFR8: The system should load rapidly and perform at a high level. A resource intensive program will harm user experiance resulting in major backlash.


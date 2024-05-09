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
| **TNF1** | UAT |  |  |
| **TNF2** | UAT |  |  |
| **TNF4** | UAT |  |  |
| **TNF5** | UAT |  |  |
| **TNF8** | UAT |  |  |










### Functional requirements 

|UC1 o1:|
|-------|
FR1: The system shall get geo-location from (TO BE DETERMINED)
FR2: The system shall get nearest car parking spots from parking spots database
FR3: The system must not show fully occupied parking spots or show a display icon in that referances so in its place
FR4: The system shall have a feature to filter parking spots for the user
FR5: The system may have a feature that enables the user to report for new or damaged parking spots
FR6: The system won't show where new parking sites or spots are being made
FR7: The system shall let the user rate and review the parking area that they have used.
FR8: The system shall let the user choose from mutiple payment options when pre booking a spot
FR9: The system could make an improvement if given a negative review

|UC1 o2:|
|-------|
FR1: The system shall prompt the user to enter the location of the area they would like to park in into the app
FR2: The system shall find all the closest parking spots to the location they put in from the parking spots database
FR3: The system may permit users to save regular locations to which will allow for saved time at a later date
FR4: The system may have an option to see when others have booked the parking spot for/until
FR5: The system won't recommend driving routes to the parking spots
FR6: The system won't plan routes based on time for the user 
FR7: The system shall allow the user to monitor the time they have used the parking spot for and how long they have left in-app
FR8: The system should notify the user through app notifications as to whether there are new parking spots in the area

|UC2 o1:|
|-------|
FR1: The system shall show the council the usage data of parking spots from the parking database
FR2: The system won't give tailored advice on where new parking spots should be built or where there is no need for a parking area
FR3: The system shall show user request or complaints

|UC3 o1:|
|-------|
FR1: The system shall prompt the user to enter the location of the area they would like to search
FR2: The system shall find and display all parking locations relative to the search from the parking database
FR3: The system shall show all details of the parking spot (long/short term, security, handicapped etc.)
FR4: The system shall display also the reported issues of the parking spots
FR5: The system won't be able to show data regarding models of cars frequanted or data that may impede on customer privacy


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


# Requirements

## User Needs

### User stories
    As a Car Owner (user) I want to find out where parking is available in the city or in a place I could be driving by (goal) to assist me in planning my trip, letting me know where to park and whether a spot is available (benefit).
    
    As a Bristol City Council (user), I would like to keep an eye on how often the allocated parking spaces are used. (goal) so that I can determine whether additional parking spots are needed and where to put them. (benefit). This information will help with efficient planning and optimisation of urban space management.
    
    As a Business Owner (user) When there is a parking lot close to my place of business, I would like to see how frequently parking spots are used. (goal) So i can track the public within my area and plan advertising and company hours efficiently (benefit).
    
    As a tourist (user) I want to find a parking spot near where i want to go. (goal) so that i know where to park without the hassle as I am unfamiliar with the area (benefit).


### Actors
    - Car Owners
      Citizens that own a car that wants to be able to find a parking space freely
    - Bristol City Council 
      In charge of urban space management including additinoal and current parking facilities
    - Business Owner
      Interested in traffic of data for efficiency of the business
    - Tourist
      Tourists that want free parking spots closest to the busiest of places


### Use Cases
| UC1 | Car Owner|
|--------------------------------------|---------------------|
| **Description** |  Find parking spots that are close and/or reserve a parking spot in advance |
| **Actors** | Car Owners |
| **Assumptions** | Car owners must have location services turned on and follow the rules stated by the app for example reporting parking in a space. |
| **Steps** | Using Bristol opendata create a database with all of the data related to the parking spots. Car owners should then check around them for parking spots. Car owners are then able to see the parking spots and all the details they entail. |
| **Variations** | Car owners may want to look up parking spots pre-trip so that they are able to plan the most efficient route for them. |
| **Non-functional** | Data must be protected and secure. Should be able to access data from server in real time. Needs to be able to run on any devices within reason. Must have a user-friendly interface that is easy to understand. Must abide by Data Protection Act and UK Gov. |
| **Issues** | There could be issues with the real-time data being updated onto the app when car parking spaces are being occupied. |

| UC2 | Bristol City Council|
|--------------------------------------|---------------------|
| **Description** | Assess the use of different parking spots and buildings to see whether there is a need for more or less in a certain area. |
| **Actors** | Bristol City Council |
| **Assumptions** | Must be a need for constant monitoring of parking sites.|
| **Steps** | Using Bristol opendata create a database with all of the data related to the parking spots. will monitor the usage of the parking sites and relay it back for the council to see. |
| **Variations** |  Users of the app may put in feedback/requests for the council to see.  |
| **Non-functional** | Data must be protected and secure. Should be able to access data from server in real time. Needs to be able to run on any devices within reason. Must have a user-friendly interface that is easy to understand. Must abide by Data Protection Act and UK Gov. |
| **Issues** | The council may make the wrong decision based on the data from the app which can possibly create more congestion issues rather than stop them. |

| UC3 | Tourist|
|--------------------------------------|---------------------|
| **Description** | Find parking spots near popular tourism spots for higher efficiency. |
| **Actors** | Tourists |
| **Assumptions** | Tourists will need to find/book best parking spots for there destination (walking distance etc.) |
| **Steps** |Using Bristol opendata create a database with all of the data related to the parking spots. Tourists should then look around for a spot to park around thier relevent tourism spot. Tourists are then able to see the parking spots and are able to book spots |
| **Variations** |  Tourists should be able to filter out parking spots they dont want (long/short term stay, handicapped etc.). They should also be able to pre-book parking spaces. |
| **Non-functional** | Data must be protected and secure. Should be able to access data from server in real time. Needs to be able to run on any devices within reason. Must have a user-friendly interface that is easy to understand. Must abide by Data Protection Act and UK Gov. |
| **Issues** |  Tourists could have a difficult time understanding local parking regulations through the app as they may be from a foriegn area. |

| UC4 | Business Owner|
|--------------------------------------|---------------------|
| **Description** | Assess the use of different parking spots so that they are able to plan advertising and company hours efficiently.  |
| **Actors** | Business owners |
| **Assumptions** | To make the best decisions, the owners will want to have accurate data. |
| **Steps** | Using Bristol opendata create a database with all of the data related to the parking spots. Business owners will then analyse the data to further their business. |
| **Variations** | May also use feedback mechanisms within the app to adjust their business strategies or interact with customers about parking availability. |
| **Non-functional** | Data must be displayed in a user-friendly easy to understand interface. Must be able to safeguard customer data correctly. The app must be able to run with high network traffic. |
| **Issues** | The data may be not 100% accurate or read incorrectly meaning the business may make a poor decision. |



![image](https://github.com/Zxiona/Team-7/assets/82226228/8776dc1a-60c3-41c2-8d21-ec70196e2b5d)        ![image](https://github.com/Zxiona/Team-7/assets/82226228/b6c3d51d-bddf-40aa-b692-009853a8614a)

## Software Requirements Specification
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

NFR2: The system shall parking spots up to 1km from the user.

NFR3: The system should have a graphical user interface that has the map as the main focus, this allows for the user to have a better experience.


### Portability and Reliability:

NFR4: The system must work on IOS, Android and all Browser software  

NFR5: The system must be able to be portable over all screen sizes and resolutions, through laptops to smartphones.

### Availability: 

NFR6: The system should be able to be used at all times even allowing the user to use the app offline.

### Quality: 

NFR7: The system should be made to be able to handle continuous testing and updates without harming the use of the app.

NFR8: The system should load rapidly and perform at a high level. A resource intensive program will harm user experiance resulting in major backlash.







































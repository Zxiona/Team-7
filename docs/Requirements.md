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
| **Assumptions** | Drivers must have location services turned on and follow the rules stated by the app for example reporting parking in a space. |
| **Steps** | Populate a database with designated parking spot data from Bristol's open data. Drivers check near their current location or specify a destination to view available parking spots. |
| **Variations** | Drivers may use the app to view parking availability city-wide to plan their routes. |
| **Non-functional** | Data must be protected and secure, accessible in real-time, and the app must function across various devices, adhering to the Data Protection Act with a user-friendly interface. |
| **Issues** | Challenges in updating the app in real-time when parking spots become occupied or free. |

| UC2 | Bristol City Council|
|--------------------------------------|---------------------|
| **Description** | Analyze the usage of designated parking spots to determine if additional parking infrastructure is necessary. |
| **Actors** | Bristol City Council |
| **Assumptions** | There is a need for continuous monitoring and planning for parking facilities. |
| **Steps** | Use the database to track usage rates of parking spots and identify areas with insufficient parking. |
| **Variations** |  The council may receive feedback or requests through the app for new parking facilities.  |
| **Non-functional** | Secure data management, robust server capacity, and compliance with governmental regulations. The interface should be designed for ease of use by city planners. |
| **Issues** | Potential public dissatisfaction with changes or expansions in parking infrastructure affecting existing vehicular or pedestrian flows. |

| UC3 | Tourist|
|--------------------------------------|---------------------|
| **Description** | Find and reserve parking spots near major attractions or throughout the city to facilitate easy exploration. |
| **Actors** | Tourists |
| **Assumptions** | Tourists require quick and easy access to parking information to enhance their visit experience. |
| **Steps** | Tourists use the app to locate and possibly reserve parking close to key tourist spots or along a planned travel route. |
| **Variations** |  Tourists may filter parking spots by type (e.g., short-term, long-term, secure) based on their specific needs. |
| **Non-functional** | The app must provide real-time data, be intuitive for users unfamiliar with the area, secure, and function reliably on mobile devices. |
| **Issues** |  Accuracy in real-time availability and potential language barriers in the app’s usability for non-local tourists. |

| UC4 | Business Owner|
|--------------------------------------|---------------------|
| **Description** | Access data on parking usage near their business to tailor services or promotions based on the flow of customers. |
| **Actors** | Business owners |
| **Assumptions** | Business owners need reliable data to make informed decisions about their operations. |
| **Steps** | Business owners use the app to analyze parking spot utilization near their establishments to gauge customer traffic patterns. |
| **Variations** | May also use feedback mechanisms within the app to adjust their business strategies or interact with customers about parking availability. |
| **Non-functional** | Data must be presented in an understandable format, ensuring confidentiality where necessary, and the system must be capable of handling high traffic without downtime. |
| **Issues** | Potential issues with data accuracy which could lead to misguided business decisions. |


# Project Name-Googole places

## Description
This project is based on finding places using google API and frontend technology used here is Vite React .

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `yarn` to install dependencies.


## Usage
1. Run 'yarn dev' to start the development server.
2. Open your web browser and navigate to http://localhost:3000.

## Technologies Used
- vite-React
- Redux
- Tailwind css
- Mui Icons and Components.

## Folder Structure
- /src
- -assets
- -hooks
- redux
- /components
- /utils
- /pages

## Features
Screen 1 (Home):
        List of choices for the user to select from the following options:
        Bakery
        Bar
        Cafe
        Fast food restaurant
        Ice Cream Shop
        Chinese Restaurant 
        Pizza Place
        Sushi Restaurant
        Thai Restaurant
        Vegetarian Restaurant

        By default browser will take users location using lat-long and user can also select any location using pincode.

Screen 2 (Listing):
    * Search bar to search any palce by its name for which the search results are to be shown
    * Displing the list on the screen, showing essential information for each place (e.g., name, address). 
    * Each item in the list have a clickable link or button leading to a detailed view on the next screen.
    * Included a button or link to navigate back to the Home screen. 
    * Button is provided,clicking on it will open a google maps tab for directions
    * Google pagination is implemented.

Screen 3 (Detail):

    * Included a button or link to navigate back to the listing screen.
    * Showing detailed information about the selected place from the list.
    * Details having following info:
        Images
        Name
        Rating
        Address
        A button for route in between place and current location, clicking on it will open a google maps tab for directions

## Credits
- vite-React documentation
- Redux docs.
- Mui







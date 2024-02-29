
# Project Name- Google places

## Description
This project is based on finding places using google API and frontend technology used here is Vite React .
It utilizes the Google Places API to provide location-based services, such as searching for nearby places, displaying place details, and user reviews.

## Installation
1. Clone the repository.(git clone --branch [branch_name] --single-branch [remote-url])
2. Navigate to the project directory.
3. Run `yarn` to install dependencies.

## Environmental setup
1. Create .env file and copy all the variables from .env.example
2. Add all the values.

## Usage
Method-1:With build (recommended)
1. Run 'yarn run build' to create build file to run in dev server.
2. Run 'yarn run preview' to start the dev server.
3. Open your web browser and navigate to http://localhost:4173.
4. Please use cors bypass extension to avoid cors error.

Method-2:
1. Run 'yarn run dev' to start the development server.
2. Open your web browser and navigate to http://localhost:5173.

## Technologies Used
- vite-React (Javascript frontend library)
- Google Places API (for APIs)
- React Router (for routing between the pages)
- Redux (for state management)
- Tailwind css (for styling)
- Mui Icons and Components (for modals and icons)

## Folder Structure
- /src
- assets:images
- hooks:react hooks i.e,contextapi
- redux:global state management
- /components:react compoenets
- /utils:Utilty functions
- /pages:react pages

## Features
Homepage:
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

Listing Page:

    * Search bar to search any palce by its name for which the search results are to be shown
    * Displing the list on the screen, showing essential information for each place (e.g., name, address). 
    * Each item in the list have a clickable link or button leading to a detailed view on the next screen.
    * Included a button or link to navigate back to the Home screen. 
    * Button is provided,clicking on it will open a google maps tab for directions
    * Google pagination is implemented.

Details Page:

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
- Google Places API
# General information about development

This homework has been developed in Angular v12, as well as Bootstrap to ensure responsivness.
The data is displayed dynamically as per the contents of the JSON file given in the homework PDF.
The JSON file has been downloaded locally due to CORS issues, but the call to the JSON endpoint has been left in the code, commented out.

# Project structure

The project mostly consists of 2 components, the main screen and the year offer.

## The main screen

The main screen is basically the entire screen, but it defines the buy zone and its headers.
In the main screen we make use of the Bootstrap grid system, using col-md classes to ensure responsivness.
Here, the first div is the container, the second one (which I define as being the buy zone) is the row and all the rest are columns.
I also get the data from the JSON in this component, filter it to store only the USD currencies and create a price object dynamically, which in the end has a structure like this:

{
1y: {
5u: {oldPrice, newPrice},
10u: {oldPrice, newPrice}
},
5y: {
5u: {oldPrice, newPrice},
10u: {oldPrice, newPrice}
},
...
}

This object is used with the ngFor directive to deliver the appropriate year-number_of_devices information to the coresponding year offers.
The col-md size is also calculated dynmaically to ensure that all the year offers fit on the medium screens.

## The year offers

These are basically the cards within the buy zone.
Data is received from the main screen using Inputs.
The percentage of money saved is displayed only in the first card and so is the red background of the buy button.
The text displayed regarding the year plan is dynamically generated using the year and possibly months.
The number of devices buttons are generated using an ngFor and depends on the year-number_of_devices information received from the main screen.
The prices displayed are taken from the year-number_of_devices object received and depend on the number of devices button which is currently selected.

# BitdefenderTotalSecurity

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

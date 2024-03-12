# Pokemans

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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



Go through the AP:
1. use ng serve to run the app and click on the produced URL (http://localhost:4200/).
2. On the first page you can see 3*4 grid whic has 12 pokemons generated.
3. If you click on load more button, the next 12 data is generated and so on.
4. If you click on any of the pokemon, You will see two tabs, Detials and Evoluton.
5. Details tab is the default tab where you can see the details of the pokemon.
6. Evolution tab shows us the evolution chain where the current stage is highlighted with dotted border. 


Steps Performed to create this APP:

1. Created an Angular app with two components one for list and other for details.
2. Create a service to have HTTP client and make our API calls.
3. Made UI of the 3*4 Grid which consists of boxes.
4. Integrated it with our get pokenoms API where will fetch them by segments by using offset and limit.
5. Integrated Load more functinality to aceess other segments of data.
6. In the details page , created two tabs of Detials and Evolution.
7. In deatils tab displayed the image and the resppective details.
8. In evolution, displayed the evolution chain and highlighted the current stage with dotted border.
9. Used RXJS pipe take 1 to unsubscribe all the subscriptions to avoid the data leaks.
10. Added routing to navigate thorugh the App.

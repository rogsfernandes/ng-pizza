# ng-pizza
Choose your own pizza toppings in this cool Angular App.

Component Design:

- Atoms: Independent components, that does one thing very well (e.g. a Button). Shared across the entire app and used to create composition.
- Molecules: Simple composition of components that have interdependencies between each other (e.g. Search Bar)
- Organisms: Containers that have state and internal logic to make handle it's own responsabilities (e.g. ToDo List)
- Pages: Route that can contain multiple organisms to give customer the ability of operating several things
- Templates: Layout basis for different pages

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

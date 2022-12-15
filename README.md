# Plx-Angular Library
The angular library is located: `projects\plx-inputs\src\lib`

This angular project serve as sample project and testing for the plx-angular package

This packages main dependencies are

- Angular 11
- Bootstrap 4
- ng-bootstrap 9
- PrimeNG 11

## Setup your local environment

### Clone repo

`git clone https://proplogix@dev.azure.com/proplogix/architecture/_git/angular`

### Install

`npm install`

### Run

`ng serve`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Example Project

At the root of this repo there is an Angular project that aims to provide examples of all of the components and css that are configured to meet the specifications of the PropLogix UI/UX style guide.

## Common Components

Plx-Angular has components that are styled specifically to meet the requirements set by the UI/UX style guide.

- Buttons [Bootstrap Buttons](https://getbootstrap.com/docs/4.0/components/buttons/)
- Outlined Buttons [Outlined Bootstrap Buttons](https://getbootstrap.com/docs/4.0/components/buttons/#outline-buttons)
- Cards [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/)
- Toasts [ng-bootstrap Toasts](https://ng-bootstrap.github.io/#/components/toast/overview)
- Top Tabs Nav [ng-bootstrap Top Tabs Nav](https://ng-bootstrap.github.io/#/components/nav/overview)
- Accordion [ng-bootstrap Accordion](https://ng-bootstrap.github.io/#/components/accordion/examples)
- Table [PrimeNG Tables](https://www.primefaces.org/primeng/v11-lts/#/table)
- For utility classes like [grid](https://getbootstrap.com/docs/4.0/layout/grid/), [flexbox](https://getbootstrap.com/docs/4.0/utilities/flex/) and [spacing](https://getbootstrap.com/docs/4.0/utilities/spacing/), prefer bootstrap.

## Input Components

We are using PrimeNG for all of our input components. They are styled with floating labels in accordance with our style guide. Everything on this list has an example in the prime-inputs.component.html file.

- [Text Input](https://www.primefaces.org/primeng/v11-lts/#/inputtext)
- [Chips](https://www.primefaces.org/primeng/v11-lts/#/chips)
- [Date Picker](https://www.primefaces.org/primeng/v11-lts/#/calendar)
- [Currency ](https://www.primefaces.org/primeng/v11-lts/#/inputnumber)
- [Phone Number](https://www.primefaces.org/primeng/v11-lts/#/inputmask)
- [Phone Number with Extension](https://www.primefaces.org/primeng/v11-lts/#/inputmask)
- [Dropdown](https://www.primefaces.org/primeng/v11-lts/#/dropdown)
- [Dropdown with Id](https://www.primefaces.org/primeng/v11-lts/#/dropdown)
- [Multiselect](https://www.primefaces.org/primeng/v11-lts/#/multiselect)
- [Textarea](https://www.primefaces.org/primeng/v11-lts/#/inputtextarea)
- [Checkbox](https://www.primefaces.org/primeng/v11-lts/#/checkbox)
- [Radio Button](https://www.primefaces.org/primeng/v11-lts/#/radiobutton)
- [Toggle](https://www.primefaces.org/primeng/v11-lts/#/inputswitch)

## Icons

We are using [fantasticon](https://www.npmjs.com/package/fantasticon) to create an icon library out of svg images. This allows us to use svg icons easily in our html, a lot like you would use font-awesome.

### Example

`<i class="icon icon-delete"></i>` You can use classes to add colors or change size, as displayed in the sample project.

### Adding Icons to the library

- Name the file the same that the icon class should be called. If you name it `delete` the class will be `.icon-delete`.
- Add the svg file to `/icons`.
- Then run `npm run-script iconbuild`.
- Then reserve the sample application with `ng serve`.
- Check the icons table to see your resulting icon.

#### Adding Icons with fixed content values

- If you have to manually add the svg icon as a ::before or ::after pseudoelement, we need to make sure that the content value is not going to change. The way we do that is go into the `.fantasticonrc.js` configuration file and add a codepoint. After adding the code point and rebuilding, the content value should remain the same. Otherwise, the content value will change when new icons are added to this library.

## Automated Semantic Versioning

This project uses commit messages to determine the semantic version. Our commit messages should use the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary). The [semantic-release](https://www.npmjs.com/package/@semantic-release/npm) package provides this functionality. Make sure you are not squashing commits when merging as that will remove your semantic commit messages and the version cannot be determined.

To increment the version by 1.0.0 (major) start your commit message with BREAKING CHANGE:

To increment the version by 0.1.0 (minor) start your commit message with feat:

To increment the version by 0.0.1 (patch) start your commit message with fix:

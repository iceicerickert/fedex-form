![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)

[![Deploy to Firebase Hosting on merge](https://github.com/iceicerickert/fedex-form/actions/workflows/firebase-hosting-merge.yml/badge.svg?branch=develop)](https://github.com/iceicerickert/fedex-form/actions/workflows/firebase-hosting-merge.yml)
[![CodeQL](https://github.com/iceicerickert/fedex-form/actions/workflows/codeql.yml/badge.svg?branch=develop)](https://github.com/iceicerickert/fedex-form/actions/workflows/codeql.yml)

# fedex-form

This is a form for assessment purposes.  
CV --> [docs/cv.pdf](docs/cv.pdf)  
Visit here: [https://fedex-form.web.app/](https://fedex-form.web.app/).  


## Development

1. Clone this repo
1. Install Node Version Manager
1. run `nvm use`
1. run `npm i`
1. run `npm start` for starting dev server


## QA

1. for component test: run `npm run test`
1. for e2e test: run `npm run e2e`
1. You can find the lighthouse report after deployment as artifact on the summary
1. You can find security alerts on security tab in github


## Build

1. run `npm run build`
1. run `npm run start:dist` to serve build


## Deploy

1. Push to `develop`
1. [GH action](https://github.com/iceicerickert/fedex-form/actions/workflows/firebase-hosting-merge.yml) will deploy to Firebase


## CI/CD

1. see `.github/workflows` folder


## Choices

- All english of course
- Using the latest version of Angular as base
- Using bootstrap for default styling
- Using PWA to add app to homescreen
- Using PWA to visit app when offline
- Added fedex icons and favicon
- Using a css airplane spinner on form submit (throttle to slow 3g to see animation better)
- Put API calls in a service component to keep network request seperated
- user model for the form
- apiuser model for the response
- form with validations
- standard email validation used (because I like standard)
- added some password validations
- added some buttons with presets from some prominent fedex people (do you know them all?)
- responsive design
- default stuff: blocking submit on request, some visual (spinner), resetting form, error handling etc
- precommit lint
- firebase hosting for serving
- github action for deploying
- add lighthouse report after build
- removed protractor
- used cypress
- add few tests
- add tests to pipeline


 ## Improvements

- Revalidate password control on change of firstName or lastName value
- Make it look nicer
- Better test coverage
- etc

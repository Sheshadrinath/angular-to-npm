# AngularToNpmDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Detailed steps to implement this solution.

More details on this can be found in my blog http://playandcodewith.me/tech-blogs/f/publish-your-angular-components

## Packaging

Run `npm run packagr` to package the entire solution and you can find the `dist` folder.

## Publishing to NPM registry

Before publishing your packages in npm registry, please make sure you have a valid account in https://npmjs.com. Once you setup your account, in run the command `npm login` to login to npm registry. You need to provide your username, password and email id to login to npm. 

Once you login to npm, then you are ready to publish your package. Run the command `npm publish dist` to publish the dist folder to the npm registry.

## Fonts, Images or assets

This does not package your font files, images or any other assets. It is recommended to have these in the `cdn` and refer the same from the code.
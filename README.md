## NativeLottieAnimations

Add Native Lottie JSON Animations.

Lottie is an ecosystem of libraries for parsing [Adobe After Effects](https://www.adobe.com/products/aftereffects.html)
animations exported as JSON with [bodymovin](https://github.com/airbnb/lottie-web) and rendering them natively!

The app version is build to work with **React Native version >= 0.63**

## Features

Insert a JSON (`string`) which contains the Lottie file.

Use as loader (`boolean`): Use this widget as custom loading icon. This visually puts the widget on top of the content.

File visibility (`attribute`): the attribute to display/hide the widget. This is needed to use the widget as custom
loader (as it does not replace/modify the Mendix default loader).

Image height (`integer`): Set the Lottie image height.

Image width (`integer`): Set the Lottie image width.

## Usage

This widget requires manual linking of project files. From this point the project can not be used with the default
Mendix Make it Native and you will need a custom make it native build.

### Install pods

`cd ios && pod install`

If you're having troubles after following these steps, there might be a linking issue.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

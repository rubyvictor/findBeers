## App Introduction

This project is a celebration of indie beers around the world and relies on the rest API provided by [Punk](https://punkapi.com/documentation/v2). I created it by bootstrapping with [Create React App](https://github.com/facebookincubator/create-react-app).

Version 1 of the app provides a single page view displaying a large selection of eclectic beers rarely seen on supermarket shelves. Each beer shows off a beautiful picture together with a rather intriguing description of it's flavour. There's even a short suggestion of what food to pair with your awesome beer. If you have a beer in mind, search for it at the top - you might be pleasantly surprised with what you find. :bowtie:

### Demo

Here's a [demo](http://find-beers.herokuapp.com/) - hope you like it as I keep improving it along the way.

## Getting Started

You might wish to try it locally and perhaps even suggest ways to enhance the app.

### Cloning onto your local machine:

`https://github.com/rubyvictor/findBeers.git`

### Adding Dependencies:

After cloning the repo, `cd` into the project directory you've just created and do a:
`yarn install` or `yarn init` first if you haven't done so earlier.

## Some dependencies used in this app include:

### For beer data:

* `yarn add punkapi-lib`

### For testing:

* `yarn add enzyme enzyme-adapter-react-16 --dev`

For this to work, you'll need to create a file `setupTests.js` in your root project directory and paste this boilerplate code into it:

````import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });```

We also do prop-types validation so you will need to add this too:
-  `yarn add prop-types`
````

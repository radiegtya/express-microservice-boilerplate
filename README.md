# Express Microservice Boilerplate

This Boilerplate are made to quickly developing an event driven microservice app using Express Js. This boilerplate might be not the best microservice implementation out there, but we hope any developer could get started fast, and got basic understanding about how to implement microservice using Express Js.

## Installation

Make sure that NodeJs and Npm installed on your PC (we suggest using NodeJs >= 8.x)

```
$ git clone https://github.com/radiegtya/express-microservice-boilerplate
$ cd express-microservice-boilerplate
$ npm install
$ npm i -g nodemon
$ npm start
```

## Structure

When calling command "npm start", actually we run "nodemon starter.js". This "starter.js" responsible
to call our main application that life inside "app" folder, and also make use of "es6" (because by default express didn't support it).

In our app folder, we have some file such as:

- index   =>    responsible for import important files, modules and starting the nodejs app

- controllers   =>    here you can write your logic. You can combine it with model if needed

- router    =>    map your url


## Documentation

Coming Soon, for now we'll made some examples inside "examples" folder

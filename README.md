# Munich ReactJS Meetup Intro Talk

## Reference

Build with [Spectacle Boilerplate](https://github.com/FormidableLabs/spectacle-boilerplate)

## Development

To install local dependencies run `npm install`

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to go

### On Windows

On Windows you might get an error saying

```
'NODE_ENV' is not recognized as an internal or external command,
operable program or batch file.
```

Thus, modify the npm scripts in `package.json` to properly set the `NODE_ENV` environment variable:

```json
...
"scripts": {
    ...
    "build": "SET NODE_ENV=production & webpack --config webpack.config.production.js",
    ...
    "start": "SET NODE_ENV=development & node server.js"
},
...
```

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`

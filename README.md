# inspir

## Config

To set up your app, use the `inspir.config.js` to adjust settings.

#### `title`
The title of your app, as seen on the app's title, and the home page of the app.

#### `queryUrl`
The API endpoint's url, which the app will be posting to.

#### `mode`
A object which represents the kind of data you wish to send.

`multi`: a boolean flag for whether one can upload multiple file or single files only.

`paramName`: name of the param that will be posted (as a form).

## Setup

1. Install dependencies
```
npm install
```

2. Build the app into static builds
```
npm run generate
```

3. Copy the static files from `inspir/dist` into the folder wish to host.

You can also switch to host with SSR through a nodejs app itself, which is innately supported by NuxtJS, but this will not be covered in this documentation.

## Issues, bugs and suggestions
Please file a GitHub issue.
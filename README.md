# FireAuth
This is a base template of a project with Vue + Vuetify + Firebase auth

### > [Try live demo!](https://fireview-101.firebaseapp.com)

## Project setup
```
npm install
```

Add your firebase exported configs into `src/firebase.config.js`
```
export default {
  apiKey: '',
  authDomain: '{{app-name}}.firebaseapp.com',
  databaseURL: 'https://{{app-name}}.firebaseio.com',
  projectId: '{{app-name}}',
  storageBucket: '{{app-name}}.appspot.com',
  messagingSenderId: '',
  appId: ''
}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to firebase with
```
npx firebase deploy
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Counter app with redux-saga 

Followed the redux-saga tutorial, but started with a create-react-app. 
https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html

### Running web-app 
```
yarn start
```

### Testing web-app 
```
yarn test
```

### How this web-app was created 

* Created the skeleton with Create-react-app 
```
npx create-react-app counter.saga.web
cd counter.saga.web
```

* Added redux and saga dependencies 
```
yarn add redux redux-saga
```

* Created reducer and tests. Ensured tests were successful before proceeding 
* Removed serviceWorker 
* Configured redux store and saga middleware into index.js 
* Add Increment and Decrement into App.js (also needed yard add prop-types)
* Added Saga test 

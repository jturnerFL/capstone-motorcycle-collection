import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, About, Collection, Gallery, SignIn } from './components';
import './styles.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Contact } from './components/Contact';


const temp_sports = "Any Sport You Want To PLAY!!!"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>

      <Route exact path="/">
          <Home title={temp_sports}/>
        </Route>
        <Route path='/Collection'>
          <Collection></Collection>
        </Route> 
        <Route path='/Contact'>
          <Contact></Contact>
        </Route>
        <Route path='/About'>
          <About></About>
          </Route>
        <Route path='/SignIn'>
          <SignIn></SignIn>
        </Route>
        <Route path='/Gallery'>
          <Gallery></Gallery>
        </Route>  


      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
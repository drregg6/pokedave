import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Index from './components/homepage/Index';
import Users from './components/users/Users';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="min-w-full flex-2">
          <Header />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/users' component={Users} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

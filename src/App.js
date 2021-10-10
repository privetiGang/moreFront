import './theme/App.css';
import React, { Component } from 'react'
import { withRouter } from 'react-router';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Signup from './screens/Signup.screen';
import Signin from './screens/Signin.screen';
import Dataset from './screens/Dataset.screen';
import Secured from './service/Secured';
import DetailDataset from './screens/DetailDataset.screen';
import FavDatasets from './screens/FavDatasets.scren';

class App extends Component {
  render() {
    const { history } = this.props
    return (
      <div className='App'>
        <Switch >
          <Route history={history} path='/signup' component={Signup} />
          <Route history={history} path='/signin' component={Signin} />
          {/* <Route history={history} path='/dataset' component={Secured} /> */}
          <Route exact history={history} path='/dataset' component={Dataset} />
          <Route history={history} path='/dataset/:id' component={DetailDataset} />
          <Route history={history} path='/favorite' component={FavDatasets} />
          <Redirect from='/' to='/signup' />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
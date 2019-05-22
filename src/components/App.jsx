import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from '../redux/store'
import ListOfApplications from './ListOfApplications/ListOfApplications'
// import Login from './Auth/Login'

// import { ReactComponent as Logo } from './components/images/logo.svg'

import SidePanel from './SidePanel/SidePanel'
import './App.css'

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <SidePanel>
            <Switch>
              <Route path="/requests" render={()=><ListOfApplications />} />
              <Redirect from="*" to="/requests"/>
            </Switch>
          </SidePanel>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App

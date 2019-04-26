import React, { Component } from 'react'
import { Grid, Menu, Button, Image } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ListOfApplications from './ListOfApplications/ListOfApplications'
import logo from './logo.svg'
// import { ReactComponent as Logo } from './components/images/logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Grid className="app" columns="equal">
        {/* <SidePanel/> */}
        <Menu
          size="large"
          inverted
          fixed="left"
          vertical
          style={{ background: "#444341", fontSize: "1.2rem"}}
        >
          <Grid>
            <Grid.Row centered>
              <Image src={logo} size='small'/>
            </Grid.Row>
            <Grid.Row centered>
              {/* <Link to="/list"> */}
                <Button onClick={this.handleSidebarClickList} style={{width: "100%"}}>List of applications</Button>
              {/* </Link> */}
            </Grid.Row>
            <Grid.Row centered>
              {/* <Link to="/add"> */}
                <Button onClick={this.handleSidebarClickAdd} style={{width: "100%"}}>List of cases</Button>
              {/* </Link> */}
            </Grid.Row>
          </Grid>
        </Menu>
        <Grid.Column style={{marginLeft: 270, marginRight: 18}}>
          {/* <Header.Content>Hello</Header.Content> */}
          <ListOfApplications />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App

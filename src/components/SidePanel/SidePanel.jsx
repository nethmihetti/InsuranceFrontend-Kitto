import React from 'react'
import { Grid, Header, Dropdown } from 'semantic-ui-react'


class SidePanel extends React.Component {
  render() {
    return (
      <Grid style={{ background: '#4c3c4c' }}>
      <Grid.Column>
        <Grid.Row style={{ display: 'flex', justifyContent: "center", paddingTop: '1.2em', margin: 0 }}>
          <Header inverted as="h2">
            <Header.Content>Kitto</Header.Content>
          </Header>
        </Grid.Row>
        {/** User drop down */}
        <Header style={{ display: 'flex', padding: '0.25em', justifyContent: "center" }} as="h4" inverted>
          <Dropdown 
            trigger={<span>User</span>}
            options={this.dropdownOptions()}
          />
        </Header>
      </Grid.Column>
    </Grid>
    )
  }
}

export default SidePanel



/*

class UserPanel extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.setState({
      user: this.props.currentUser
    })
  }

  dropdownOptions = () => [
    {
      key: 'user',
      text: <span>Signed in as <strong>User</strong></span>,
      disabled: true
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>
    },
    {
      key: 'signout',
      text: <span onClick={this.handleSignout}>Sign out</span>
    }
  ]

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign out')
      })
  }

  render() {
    return (
      <Grid style={{ background: '#4c3c4c' }}>
        <Grid.Column>
          <Grid.Row style={{ display: 'flex', justifyContent: "center", paddingTop: '1.2em', margin: 0 }}>
            <Header inverted as="h2">
              <Header.Content>Sveezy</Header.Content>
            </Header>
          </Grid.Row>
          {/** User drop down */}
          <Header style={{ display: 'flex', padding: '0.25em', justifyContent: "center" }} as="h4" inverted>
            <Dropdown 
              trigger={<span>User</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserPanel)


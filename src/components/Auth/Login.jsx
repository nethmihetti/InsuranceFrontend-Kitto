import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import firebase from '../../config/firebase'
// import * as axios from 'axios'


class Login extends React.Component {
  state = {
    'email': '',
    'password': '',
    'errors': [],
    'loading': false
  }

  displayErrors = errors => errors.map((error, i) => <p key={i}>
    {error.message}
  </p>)


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.isFormValid(this.state)) {
      this.setState({errors: [], loading: true})
      setTimeout(()=>{console.log("Done")}, 1000)
      // firebase 
      //   .auth()
      //   .signInWithEmailAndPassword(this.state.email, this.state.password)
      //   .then(signedInUser => {
      //     console.log(signedInUser)
      //     console.log(signedInUser.user._lat)
           
      //     const JWT = signedInUser.user._lat
      //     const AuthStr = `Bearer ${JWT}`
      //     const URL = 'https://sveezy-back.herokuapp.com/api/orgUsers/currentUser'
          
      //     axios.get(URL, { headers: { 
      //       'Authorization': AuthStr, 
      //       'Api-Version': '1.0',
      //     }})
      //       .then(response => {
      //         console.log(response.data);
      //       })
      //       .catch((error) => {
      //         console.log('error: ' + error);
      //       });

      //     this.setState({
      //       loading: false
      //     })
      //   })
      //   .catch(err => {
      //     console.error(err)
      //     this.setState({
      //       errors: this.state.errors.concat(err),
      //       loading: false
      //     })
      //   })
    }
  }

  isFormValid = ({email, password}) => email && password

  handleInputErrors = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : ''
  }

  render() {
    const { email, password, errors, loading} = this.state
    return(
      <Grid 
        textAlign='center'
        verticalAlign='middle' 
        className="app"
      > 
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            <Icon name="id card" color="blue" />
            Login
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
                  
            <Form.Input 
              fluid 
              name="email" 
              icon="mail" 
              iconPosition="left"
              placeholder="Email Address"
              onChange={this.handleChange} 
              value={email}
              className={this.handleInputErrors(errors, 'email')}
              type="email" />

            <Form.Input fluid 
              name="password"
              icon="lock" 
              iconPosition="left"
              placeholder="Password"
              onChange={this.handleChange} 
              value={password}
              className={this.handleInputErrors(errors, 'password')}
              type="password" />

            <Button disabled={loading} className={loading ? 'loading': ''} color="blue" fluid size="large">Submit</Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )  
  }
}

export default Login
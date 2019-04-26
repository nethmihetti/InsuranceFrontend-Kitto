import React from "react";
import { List, Segment, Header, Container, Label, Placeholder } from "semantic-ui-react";
import InsureApplicationModal from './InsureApplication'
import axios from 'axios'
import Config from '../../config/Config'


import './ListOfApplications.css'


class ModalModalExample extends React.Component {
  state = {
    open: false,
    data: [],
    currentApp: '',
    loading: true
  }

  componentDidMount() {
    if (this.state.data.length < 1) {
      this.loadApplications()
    }
  }

  loadApplications = () => {
    this.setState({
      loading: true
    })
    let URL = `${Config.Config.ServerURL}/requests`
    axios.get(URL)
    .then(resp => {
      this.setState({
        data: resp.data.data,
        loading: false
      })
      console.log(resp.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleOnOpen = (app) => {
    this.setState({
      open: true,
      currentApp: app 
    })
  }

  handleOnClose = () => {
    this.setState({
      open: false, 
      currentApp: ''
    })
  }

  // handleOnProof = (street, house_num, id) => {
  //   let URL = `${Config.Config.ServerURL}/update`
  //   axios.post(URL, {
  //       data: {
  //         "item_type": street,
  //         "item_desc": house_num,
  //         "insuranceId": id
  //       }
  //   })
  //   .then(resp => {
  //     console.log(resp)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  // rejectRequest = (insuranceId, status) => {
  //   let URL = `${Config.Config.ServerURL}/update`
  //   axios.patch(URL, {
  //     data: {
  //       "insuranceId": insuranceId,
  //       "status": status
  //     }
  //   })
  //   .then(resp => {
  //     console.log(resp)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  placeholder = () => (
    // Array.from(Array(5))
    // [1, 2, 3, 4, 5].forEach((i, x)=>(
      [1, 2, 3, 4, 5].map((i, x) => (
      <List.Item key={i}>
        <Placeholder fluid>
          <Placeholder.Header image >
            <Placeholder.Line length="short" />
            <Placeholder.Line length="very short" />
          </Placeholder.Header>
        </Placeholder>
      </List.Item>
    ))
  )

  closeModal = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Header as='h1' style={{paddingTop: '20px'}}>List of insurance applications</Header>
          <Segment className="container">
          <List divided relaxed>
            {/* {this.state.data.map((app, index) => ( */}
            {this.state.loading? this.placeholder() : this.state.data.map((app, index) => (
              <List.Item key={index}>
              <List.Icon name="home" size="large" verticalAlign="middle" />
              <List.Content className="listItems">
                <div style={{
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center"}}>
                  <List.Header as="a" onClick={()=>this.handleOnOpen(app)}>
                    Insurance contract number: {app.insurancerequestid}
                  </List.Header>
                  {/** Set color to label */}
                  <Label color={app.status==="pending"? "yellow": app.status==="accepted"? "green": "red"} 
                  key={`${index}_lbl`} 
                  style={{minWidth: 70, textAlign: "center"}}>
                    {app.status}
                  </Label>
                </div>
                <List.Description as="a">Created: {app.policycreatedcate}</List.Description>
              </List.Content>
            </List.Item>
            ))}
          </List>
          </Segment>
         
        </Container>
        
        <InsureApplicationModal 
          data={this.state.currentApp} 
          open={this.state.open} 
          close={this.handleOnClose} 
          // handleOnProof={this.handleOnProof}
          // handleOnReject={this.rejectRequest}
          />
      </div>
    )
  }
}



export default ModalModalExample

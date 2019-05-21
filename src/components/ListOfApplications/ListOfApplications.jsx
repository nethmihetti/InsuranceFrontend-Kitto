import React from "react";
import { List, Segment, Header, Container, Label, Placeholder } from "semantic-ui-react";
import { connect } from 'react-redux'
import InsureApplicationModal from './InsureApplication'
import { loadRequestsActionCreator } from '../../redux/actions/loadRequests'


import './ListOfApplications.css'


class ModalModalExample extends React.Component {
  // !!!
  state = {
    open: false,
    currentApp: ''
  }

  componentDidMount() {
    if (this.props.requests.length < 1) {
      this.props.loadRequests()
    }
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
            {this.props.loading? this.placeholder() : this.props.requests.map((app, index) => (
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
          close={this.handleOnClose} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  requests: state.requests,
  loading: state.requestsLoading,
  loadFailed: state.requestsLoadingFailed
})

const mapDispatchToProps = (dispatch) => ({
  loadRequests: () => dispatch(loadRequestsActionCreator()) 
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalModalExample)
// export default ModalModalExample

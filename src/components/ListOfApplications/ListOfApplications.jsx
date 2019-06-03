import React from "react";
import { List, Segment, Header, Container, Label, Placeholder, Pagination, Icon } from "semantic-ui-react";
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
      this.props.loadRequests(0, 10)
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
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
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

  handlePaginationChange = (e, {activePage}) => {
    this.props.loadRequests(activePage-1, 10)
  }

  render() {
    return (
      <div>
        <Container>
          <Header as='h1'>List of insurance applications</Header>
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
          <Pagination
            defaultActivePage={this.props.currentPage+1}
            siblingRange={2}
            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            totalPages={this.props.totalPages}
            onPageChange={this.handlePaginationChange}
          />
        </Container>
        {
          this.state.open === false ? "" : 
          <InsureApplicationModal 
            data={this.state.currentApp} 
            open={this.state.open} 
            close={this.handleOnClose} />
        }
      </div>
    )
  }
}

// StopGap TO DO: make sorting on API side
const sortFunction = (arr) => {
  return arr.sort((a, b) => b.insurancerequestid - a.insurancerequestid)
}

const mapStateToProps = (state) => ({
  requests: sortFunction(state.requests.requests),
  currentPage: state.requests.currentPage,
  totalPages: state.requests.totalPages,
  loading: state.requests.requestsLoading,
  loadFailed: state.requests.requestsLoadingFailed
})

const mapDispatchToProps = (dispatch) => ({
  loadRequests: (page, size) => dispatch(loadRequestsActionCreator(page, size)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalModalExample)


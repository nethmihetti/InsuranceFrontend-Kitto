import React from "react";
import { List, Segment, Header, Container } from "semantic-ui-react";
import InsureApplicationModal from './InsureApplication'

import './ListOfApplications.css'

// Tmp data
const data = [
  {
    numberOfApp: '010101',
    insureData: {
      'typeOfProperty': 'Appartment',
      'city': 'Moscow',
      'street': 'Bolshevikov street',
      'houseNumber': '23',
      'appartmentNumber': '104',
      'cost': '10.000.000 Rub',
      'dateStartOfAgreement': '10.12.2018',
      'dateEndOfTheAgreement': '10.12.2019',
      'dateOfApplication': '05.12.1018'
    },
    personalData: {
      'name': 'Huan',
      'surname': 'Andreas',
      'lastName': 'Pereiro',
      'passportSeria': '2025',
      'passportNumber': '102030',
      'passportIssueDate': '03.05.1990',
      'passportIssuedBy': 'Department number: 10',
      'phoneNubmer': '8-800-555-35-35',
      'email': 'big_huan@gamil.com',
    }
  },
  {
    numberOfApp: '010102',
    insureData: {
      'typeOfProperty': 'Appartment',
      'city': 'Moscow',
      'street': 'Bolshevikov street',
      'houseNumber': '23',
      'appartmentNumber': '104',
      'cost': '10.000.000 Rub',
      'dateStartOfAgreement': '10.12.2018',
      'dateEndOfTheAgreement': '10.12.2019',
      'dateOfApplication': '05.12.1018'
    },
    personalData: {
      'name': 'Huan',
      'surname': 'Andreas',
      'lastName': 'Pereiro',
      'passportSeria': '2025',
      'passportNumber': '102030',
      'passportIssueDate': '03.05.1990',
      'passportIssuedBy': 'Department number: 10',
      'phoneNubmer': '8-800-555-35-35',
      'email': 'big_huan@gamil.com',
    }
  },
  {
    numberOfApp: '010103',
    insureData: {
      'typeOfProperty': 'Appartment',
      'city': 'Moscow',
      'street': 'Bolshevikov street',
      'houseNumber': '23',
      'appartmentNumber': '104',
      'cost': '10.000.000 Rub',
      'dateStartOfAgreement': '10.12.2018',
      'dateEndOfTheAgreement': '10.12.2019',
      'dateOfApplication': '05.12.1018'
    },
    personalData: {
      'name': 'Huan',
      'surname': 'Andreas',
      'lastName': 'Pereiro',
      'passportSeria': '2025',
      'passportNumber': '102030',
      'passportIssueDate': '03.05.1990',
      'passportIssuedBy': 'Department number: 10',
      'phoneNubmer': '8-800-555-35-35',
      'email': 'big_huan@gamil.com',
    }
  }
]

class ModalModalExample extends React.Component {
  state = {
    open: false,
    data: data,
    currentApp: ''
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

  render() {
    return (
      <div>
        <Container>
          <Header as='h1' style={{paddingTop: '20px'}}>List of insurance applications</Header>
          <Segment className="container">
          <List divided relaxed>
            {this.state.data.map((app, index) => (
              <List.Item key={index}>
              <List.Icon name="home" size="large" verticalAlign="middle" />
              <List.Content className="listItems">
                <List.Header as="a" onClick={()=>this.handleOnOpen(app)}>
                  Insurance contract number: {app.numberOfApp}
                </List.Header>
                <List.Description as="a">Created: {app.insureData.dateStartOfAgreement}</List.Description>
              </List.Content>
            </List.Item>
            ))}
          </List>
          </Segment>
        </Container>
        
        <InsureApplicationModal data={this.state.currentApp} open={this.state.open} close={this.handleOnClose} />
      </div>
    )
  }
}



export default ModalModalExample

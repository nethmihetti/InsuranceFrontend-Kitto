import React from "react";
import { List, Segment, Header, Container, Card, Button, Grid } from "semantic-ui-react";
import InsureApplicationModal from './InsureApplication'
import axios from 'axios'

import './ListOfApplications.css'

const tmp = [
  {
    "insurancerequestid": 4388924262558877900,
    "propertytype": "home1",
    "amount": 10000,
    "policystartdate": "2019-04-16",
    "policyenddate": "2019-04-16",
    "policycreatedcate": "2019-04-16",
    "status": "pending",
    "address": {
        "house_num": "1223",
        "apartment_num": "string",
        "street": "string",
        "city": "string",
        "state": "string",
        "country": "string"
    },
    "user": {
        "first_name": "Nethmi",
        "middle_name": "Thileka",
        "last_name": "Hettiarachchi",
        "email": "a2222saa@gmafil.com22",
        "mobile_num": "01311158f9654455",
        "passport_num": "12w111sf3dErf",
        "passport_issued_by": "Sri Lanka",
        "passport_issued_date": "2019-04-13"
    },
    "company": {
        "companyid": 1,
        "companyname": "ABC Insurance",
        "address": {
            "house_num": "No12124",
            "apartment_num": "Dorm3",
            "street": "1, Universrity st",
            "city": "Innopolis",
            "state": "Tatarstan",
            "country": "Russia"
        }
    }
  },
]

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
    data: [],
    currentApp: ''
  }

  componentDidMount() {
    if (this.state.data.length < 1) {
      this.loadApplications()
    }
  }

  loadApplications = () => {
    let company_id = "1"
    let status = "ALL"
    let URL1 = `http://34.66.0.246:8080/api/V1/agents/requests?companyId=${company_id}&status=${status}`
    let URL = 'http://127.0.0.1:5000/requests'
    console.log(URL)
    axios.get(URL)
    .then(resp => {
      this.setState({
        data: resp.data.data
      })
      console.log(resp.data.data)
    })
    .catch(err => {
      console.log(err)
    })
    console.log("done")
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

  handleOnProof = () => {
    const URL = 'http://127.0.0.1:5000/iroha_rest/api/v1.0/items'
    // const URL2 = 'http://127.0.0.1:5000/iroha_rest/api/v1.0/items'
    axios.post(URL, {
        data: {
          "item_type": "Kalatushkin",
          "item_desc": "10"
        }
    }
    )
    .then(resp => {
      console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
    console.log('funciton proof')
  }

  render() {
    return (
      <div>
        <Container>
          <Header as='h1' style={{paddingTop: '20px'}}>List of insurance applications</Header>
          {/* <Grid>          
          {this.state.data.map((app, index) => (
            <Card>
            <Card.Content>
              <Card.Header style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <div>Church Mutual Worker's Compensation Claim</div>
                <div>#ID-1234567</div>
              </Card.Header>
              <Card.Meta style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <p>
                  Date Recieved: <span style={{color: 'red'}}>07/20/2018</span>
                  <span style={{marginLeft: '30px'}}>Account Number: 76543210213</span>
                </p>
                <Button color="red" size="mini" content="Urgent" />
              </Card.Meta>
            </Card.Content>
          </Card>
          ))}
          </Grid> */}
          
          <Segment className="container">
          <List divided relaxed>
            {this.state.data.map((app, index) => (
              <List.Item key={index}>
              <List.Icon name="home" size="large" verticalAlign="middle" />
              <List.Content className="listItems">
                <List.Header as="a" onClick={()=>this.handleOnOpen(app)}>
                  Insurance contract number: {app.insurancerequestid}
                </List.Header>
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
          handleOnProof={this.handleOnProof}/>
      </div>
    )
  }
}



export default ModalModalExample

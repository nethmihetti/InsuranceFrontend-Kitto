import React from 'react'
import { Button, Modal, Grid } from 'semantic-ui-react'

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

const InsureApplicationModal = ({open, close, data, handleOnProof}) => (
  <Modal open={open} onClose={close}>
    <Modal.Header>Insurance contract number: {data===''? '' : data.numberOfApp}</Modal.Header>
    <Modal.Content>
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column>
            <p>Type of property:</p>
            <p>City:</p>
            <p>Street:</p>
            <p>House number:</p>
            <p>Appartment number:</p>
            <p>Cost:</p>
            <p>Date start of agreement:</p>
            <p>Date end of the agreement:</p>
            <p>Date of application:</p>
          </Grid.Column>
          <Grid.Column>
            <p>{data===''? '' : data.propertytype}</p>
            <p>{data===''? '' : data.address.city}</p>
            <p>{data===''? '' : data.address.street}</p>
            <p>{data===''? '' : data.address.house_num}</p>
            <p>{data===''? '' : data.address.apartment_num}</p>
            <p>{data===''? '' : data.amount}</p>
            <p>{data===''? '' : data.policystartdate}</p>
            <p>{data===''? '' : data.policyenddate}</p>
            <p>{data===''? '' : data.policycreatedcate}</p>
          </Grid.Column>

          <Grid.Column>
            <p>Name:</p>
            <p>Surname:</p>
            <p>Last name:</p>
            <p>Passport seria:</p>
            <p>Passport number:</p>
            <p>Passport issue date:</p>
            <p>Passport issued by:</p>
            <p>Phone nubmer:</p>
            <p>Email:</p>
          </Grid.Column>
          <Grid.Column>
            <p>{data===''? '' : data.user.first_name}</p>
            <p>{data===''? '' : data.user.middle_name}</p>
            <p>{data===''? '' : data.user.last_name}</p>
            <p>{data===''? '' : data.user.passport_num}</p>
            <p>{data===''? '' : data.user.passport_num}</p>
            <p>{data===''? '' : data.user.passport_issued_date}</p>
            <p>{data===''? '' : data.user.passport_issued_by}</p>
            <p>{data===''? '' : data.user.mobile_num}</p>
            <p>{data===''? '' : data.user.email}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>

    <Modal.Actions>
    <Button
        negative
        icon="close"
        labelPosition="right"
        content="Reject"
      />
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Proof"
        onClick={() => {handleOnProof(data.insureData.street, data.insureData.houseNumber)}}
      />
    </Modal.Actions>
  </Modal>
)

export default InsureApplicationModal
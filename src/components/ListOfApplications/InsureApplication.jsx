import React from 'react'
import { Button, Modal, Grid } from 'semantic-ui-react'

const InsureApplicationModal = ({open, close, data}) => (
  <Modal open={open} onClose={close}>
    {console.log(data)}
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
            <p>{data===''? '' : data.insureData.typeOfProperty}</p>
            <p>{data===''? '' : data.insureData.city}</p>
            <p>{data===''? '' : data.insureData.street}</p>
            <p>{data===''? '' : data.insureData.houseNumber}</p>
            <p>{data===''? '' : data.insureData.appartmentNumber}</p>
            <p>{data===''? '' : data.insureData.cost}</p>
            <p>{data===''? '' : data.insureData.dateStartOfAgreement}</p>
            <p>{data===''? '' : data.insureData.dateEndOfTheAgreement}</p>
            <p>{data===''? '' : data.insureData.dateOfApplication}</p>
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
            <p>{data===''? '' : data.personalData.name}</p>
            <p>{data===''? '' : data.personalData.surname}</p>
            <p>{data===''? '' : data.personalData.lastName}</p>
            <p>{data===''? '' : data.personalData.passportSeria}</p>
            <p>{data===''? '' : data.personalData.passportNumber}</p>
            <p>{data===''? '' : data.personalData.passportIssueDate}</p>
            <p>{data===''? '' : data.personalData.passportIssuedBy}</p>
            <p>{data===''? '' : data.personalData.phoneNubmer}</p>
            <p>{data===''? '' : data.personalData.email}</p>
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
        content="Accept"
      />
    </Modal.Actions>
  </Modal>
)

export default InsureApplicationModal
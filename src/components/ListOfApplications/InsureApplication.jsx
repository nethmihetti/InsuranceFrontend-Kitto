import React from 'react'
import axios from 'axios'
import { Button, Modal, Grid } from 'semantic-ui-react'
import Config from '../../config/Config'

/** Example of the income data */
/**
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
 */


class InsureApplicationModal extends React.Component {
  state = {
    reject_loading: false,
    reject_disabled: false,
    
    accept_loading: false,
    accept_disabled: false
  }
  
  // close - funciton to close modal
  newHandleOnReject = (insuranceId, status, close) => {
    if (status === "accepted") {
      this.setState({
        accept_loading: true,
        accept_disabled: true,
        reject_loading: false,
        reject_disabled: true
      })
    } else {
      this.setState({
        accept_loading: false,
        accept_disabled: true,
        reject_loading: true,
        reject_disabled: true
      })
    }
    let URL = `${Config.Config.ServerURL}/update`
    axios.patch(URL, {
      data: {
        "insuranceId": insuranceId,
        "status": status
      }
    })
    .then(resp => {
      console.log(resp)
      this.setState({
        reject_loading: false,
        accept_loading: false
      })
      close()
    })
    .catch(err => {
      console.log(err)
    })
    
  }
  
  checkStatus = (open, data) => {
    if (open === true) {
      console.log("happen")
      if (data.status === "accepted") {
        this.setState({
          accept_disabled: true
        })
      }
      if (data.status === "rejected") {
        this.setState({
          reject_disabled: true
        })
      }
    }
  }

  render() {
    const { open, close, data } = this.props
    return (
      <Modal open={open} onClose={close}>
        <Modal.Header>Insurance contract number: {data===''? '' : data.insurancerequestid}</Modal.Header>
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
            disabled={this.state.reject_disabled}
            className={this.state.reject_loading? 'loading': ''}
            onClick={()=>{this.newHandleOnReject(data.insurancerequestid, "rejected", close)}}
          />
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Accept"
            disabled={this.state.accept_disabled}
            className={this.state.accept_loading? 'loading': ''}
            onClick={()=>{this.newHandleOnReject(data.insurancerequestid, "accepted", close)}}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

// const InsureApplicationModal = ({open, close, data, handleOnProof, handleOnReject}) => (
//   <Modal open={open} onClose={close}>
//     <Modal.Header>Insurance contract number: {data===''? '' : data.insurancerequestid}</Modal.Header>
//     <Modal.Content>
//       <Grid columns={4}>
//         <Grid.Row>
//           <Grid.Column>
//             <p>Type of property:</p>
//             <p>City:</p>
//             <p>Street:</p>
//             <p>House number:</p>
//             <p>Appartment number:</p>
//             <p>Cost:</p>
//             <p>Date start of agreement:</p>
//             <p>Date end of the agreement:</p>
//             <p>Date of application:</p>
//           </Grid.Column>
//           <Grid.Column>
//             <p>{data===''? '' : data.propertytype}</p>
//             <p>{data===''? '' : data.address.city}</p>
//             <p>{data===''? '' : data.address.street}</p>
//             <p>{data===''? '' : data.address.house_num}</p>
//             <p>{data===''? '' : data.address.apartment_num}</p>
//             <p>{data===''? '' : data.amount}</p>
//             <p>{data===''? '' : data.policystartdate}</p>
//             <p>{data===''? '' : data.policyenddate}</p>
//             <p>{data===''? '' : data.policycreatedcate}</p>
//           </Grid.Column>

//           <Grid.Column>
//             <p>Name:</p>
//             <p>Surname:</p>
//             <p>Last name:</p>
//             <p>Passport seria:</p>
//             <p>Passport number:</p>
//             <p>Passport issue date:</p>
//             <p>Passport issued by:</p>
//             <p>Phone nubmer:</p>
//             <p>Email:</p>
//           </Grid.Column>
//           <Grid.Column>
//             <p>{data===''? '' : data.user.first_name}</p>
//             <p>{data===''? '' : data.user.middle_name}</p>
//             <p>{data===''? '' : data.user.last_name}</p>
//             <p>{data===''? '' : data.user.passport_num}</p>
//             <p>{data===''? '' : data.user.passport_num}</p>
//             <p>{data===''? '' : data.user.passport_issued_date}</p>
//             <p>{data===''? '' : data.user.passport_issued_by}</p>
//             <p>{data===''? '' : data.user.mobile_num}</p>
//             <p>{data===''? '' : data.user.email}</p>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Modal.Content>

//     <Modal.Actions>
//     <Button
//         negative
//         icon="close"
//         labelPosition="right"
//         content="Reject"
//         onClick={()=>{handleOnReject(data.insurancerequestid, "rejected")}}
//       />
//       <Button
//         positive
//         icon="checkmark"
//         labelPosition="right"
//         content="Proof"
//         onClick={() => {handleOnProof(data.address.street, data.address.house_num, data.insurancerequestid)}}
//       />
//     </Modal.Actions>
//   </Modal>
// )

export default InsureApplicationModal
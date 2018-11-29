










import React, { Component} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import FormExampleForm from './form.jsx'
//import ButtonExampleIcon from './cancel.jsx'

//<ButtonExampleIcon />
const ModalModalExample = () => (
    <Modal closeIcon trigger={<Button color='twitter'>Add New Customer</Button>}>
        <Modal.Header>
            Customer Details
           
       
        </Modal.Header>
    <Modal.Content form="true">
      <FormExampleForm />
  
    </Modal.Content>
  </Modal>
);

export default ModalModalExample
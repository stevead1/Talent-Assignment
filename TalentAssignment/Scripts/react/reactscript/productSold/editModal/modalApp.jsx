import React from 'react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'
import FormExampleForm from './form.jsx'
//import ButtonExampleIcon from './cancel.jsx'

const ModalModalExample = () => (
    <Modal closeIcon trigger={<Button color='yellow'><Icon name='edit' />Edit</Button>}>
        <Modal.Header>
            Edit
          
       
        </Modal.Header>
    <Modal.Content form="true">
      <FormExampleForm />
      
    </Modal.Content>
  </Modal>
);

export default ModalModalExample
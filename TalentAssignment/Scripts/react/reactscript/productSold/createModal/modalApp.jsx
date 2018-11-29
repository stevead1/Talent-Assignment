//import React, { Component } from 'react'
//import { Button, Form, Input, Label } from 'semantic-ui-react'
//const { Modal, Form, Button, Icon } = semanticUIReact;

//export default class ModalModalExample extends Component {

//    constructor(props) {
//        super(props);
//        this.state = {
//            something: '',
//            showModal: false
//        }
//    }

//    handleChangeForms = (e, { value }) => {
//        this.setState({ something: value });
//    }

//    handleCreateButton(evt) {
//        evt.preventDefault()
//        this.closeModal();
//    }

//    closeModal = () => {
//        this.setState({ showModal: false })
//    }

//    render() {
//        const {
//            something,
//            showModal
//        } = this.state

//        return (
//            <Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />New Challenge</Button>}>
//                <Modal.Header>My Modal</Modal.Header>
//                <Modal.Content>
//                    <Form>
//                        <Form.Input
//                            label='Something'
//                            value={something}
//                            onChange={this.handleChangeForms}
//                        />
//                        <Button onClick={(evt) => this.handleCreateButton(evt)}>Save</Button>
//                    </Form>
//                </Modal.Content>
//            </Modal>
//        )
//    }
//}











import React, { Component} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import FormExampleForm from './form.jsx'
//import ButtonExampleIcon from './cancel.jsx'

//<ButtonExampleIcon />
const ModalModalExample = () => (
    <Modal closeIcon trigger={<Button color='twitter'>Add New Sale Record</Button>}>
        <Modal.Header>
            Customer Details
           
       
        </Modal.Header>
    <Modal.Content form="true">
      <FormExampleForm />
      
    </Modal.Content>
  </Modal>
);

export default ModalModalExample

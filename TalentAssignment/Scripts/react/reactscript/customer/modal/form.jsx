import React, { Component } from 'react'
import { Button, Form, Input, Label } from 'semantic-ui-react'

const initialState = {
    name: "",
    address: "",
}

export default class FormExampleForm extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;


    }

    handleChange = (event) => {
        //console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value })
    };

    validate = () => {
        let nameError = "";
        let addressError = "";
        if (!this.state.name ) {
            nameError = "Please Enter Name";
        }
        if (!this.state.address) {
            addressError = "Please Enter Address";
        }
        if (nameError || addressError) {
            this.setState({ nameError, addressError });
            return false;
        }

        return true;
    }

    saveSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        const isValid = this.validate();
        if (isValid) {
            this.setState(initialState);
        }

        if (this.state.name !== null && this.state.address !== null) {
            $.ajax({
                type: 'POST',
                url: '/Customers/AddData',
                data: this.state,
                dataType: 'json',
                success: () => {
                    k = true;

                }
            })
        }
     

    };

    render() {
        return (
            <Form onSubmit={this.saveSubmit}>
                <Form.Field >
                    <label >Name</label>
                    <input
                        focus="true"
                        name="name"
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        
                    />
                    <Label basic color='red' pointing>{this.state.nameError}</Label>

                </Form.Field>
                <Form.Field >
                    <label>Address</label>
                    <input
                        focus="true"
                        name="address"
                        placeholder='Address'
                        value={this.state.address}
                        onChange={this.handleChange}
                       
                    />
                    <Label basic color='red' pointing>{this.state.addressError}</Label>
                </Form.Field>

                <Button floated='right'>Close</Button>
                <Button type="submit" floated='right'>Save</Button>

            </Form>
        )
    }
}


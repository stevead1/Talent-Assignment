import React, { Component } from 'react';
import { Table, Item, Button, Icon } from 'semantic-ui-react'

export default class CustomerTable extends Component {
    constructor(props) {
        super(props)


        this.state = {
            data: [],

        }
    }

    componentDidMount = () => {
        this.getCustomers();
    }

    

    getCustomers = () => {
        $.ajax({
            url: '/Customers/GetCustomerList',
            type: 'GET',
            dataType: 'json',
            success: (res) => {
                //console.log(res);
                this.setState({
                    data: res
                })
            }
        })
    }



    render() {
        let customers = this.state.data.map((item) => {
            return (

                <Table.Row key={item.CustomerID}>
                    <Table.Cell> {item.Name} </Table.Cell>
                    <Table.Cell>{item.Address} </Table.Cell>
                    <Table.Cell><Button color='yellow'><Icon name='edit' />Edit</Button></Table.Cell>
                    <Table.Cell><Button color='google plus'><Icon name='delete' /> Delete</Button></Table.Cell>
                </Table.Row>
            )
        });

        return (
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Customer Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Actiom(Edit)</Table.HeaderCell>
                        <Table.HeaderCell>Action(Delete)</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {customers}
                </Table.Body>

            </Table>

        )

    }
}
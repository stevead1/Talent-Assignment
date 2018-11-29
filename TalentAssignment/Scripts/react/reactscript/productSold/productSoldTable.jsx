import React, { Component } from 'react';
import { Table, Item, Button, Icon } from 'semantic-ui-react'
import ModalModalExample from './editModal/modalApp.jsx';

export default class ProductSoldTable extends Component {
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
            url: '/ProductSolds/GetProductSoldList',
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

    deleteButton = (e) => {
        //console.log("delete button is called");
        //console.log(e.target.value);
        $.ajax({
            url: '/ProductSolds/saleDelete',
            type: 'POST',

            data: { id: e.target.value },
            dataType: 'json',
            success: () => {
                k = true;

            }
        })
    }

    render() {
        let productsolds = this.state.data.map((item) => {
            return (

                <Table.Row key={item.ProductSoldID}>
                    <Table.Cell> {item.customerName} </Table.Cell>
                    <Table.Cell>{item.productName} </Table.Cell>
                    <Table.Cell>{item.storeName} </Table.Cell>
                    <Table.Cell>{item.dateSold} </Table.Cell>
                    <Table.Cell><ModalModalExample /></Table.Cell>
                    <Table.Cell><Button color='google plus' value={item.ProductSoldID} onClick={this.deleteButton}><Icon name='delete' /> Delete</Button></Table.Cell>
                </Table.Row>
            )
        });

        return (
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Customer Name</Table.HeaderCell>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Store Name</Table.HeaderCell>
                        <Table.HeaderCell>Date Sold</Table.HeaderCell>
                        <Table.HeaderCell>Actiom(Edit)</Table.HeaderCell>
                        <Table.HeaderCell>Action(Delete)</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {productsolds}
                </Table.Body>

            </Table>

        )

    }
}


//<Table.Cell><Button color='google plus' value={item.ProductSoldID} onClick={this.deleteButton}><Icon name='delete' /> Delete</Button></Table.Cell>
//<Table.Cell><Button color='yellow'><Icon name='edit' />Edit</Button></Table.Cell>
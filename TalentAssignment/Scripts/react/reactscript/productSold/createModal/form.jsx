

import React, { Component } from 'react'
import { Button, Form, Input, Label, Checkbox } from 'semantic-ui-react'



export default class FormExampleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputcustomerName: "",
            inputproductName: "",
            inputstoreName: "",
            inputDate: "",
            customerData: [],
            productData: [],
            storeData: [],

        }
    }
    //componentDidMount = () => {
    //    this.getCustomers();
    //}
    //getCustomers = () => {
    //    $.ajax({
    //        url: '/ProductSolds/GetCustomerName',
    //        type: 'GET',
    //        dataType: 'json',
    //        success: (data) => {
    //            //console.log(res);
    //            //this.setState({
    //            //    customerData: res });
    //            let customerNameFromApi = data.map(team => { return { value: team.customerID, display: team.customerName } })
    //            this.setState({ customerData: [{ value: '', display: 'Select Customer' }].concat(customerNameFromApi) });

    //        }
    //    })
    //}

    componentDidMount() {
        fetch("http://localhost:49575/productsolds/GetCustomerName")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let customerNameFromApi = data.map(team => { return { value: team.customerID, display: team.customerName } })
                this.setState({ customerData: [{ value: '', display: 'Select Customer' }].concat(customerNameFromApi) });
                //console.log(this.state.customerData);
            }).catch(error => {
                console.log(error);
            });


        fetch("http://localhost:49575/productsolds/GetProductName")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let productNameFromApi = data.map(team => { return { value: team.productID, display: team.productName } })
                this.setState({ productData: [{ value: '', display: 'Select Product' }].concat(productNameFromApi) });
            }).catch(error => {
                console.log(error);
            });


        fetch("http://localhost:49575/productsolds/getstorename")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let storeNameFromApi = data.map(team => { return { value: team.storeID, display: team.storeName } })
                this.setState({ storeData: [{ value: '', display: 'Select Store' }].concat(storeNameFromApi) });
            }).catch(error => {
                console.log(error);
            });
    }
     
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };



    saveSubmit = (event) => {
        event.preventDefault();
        let x = this.state.customerData.find(a => a.display === this.state.inputcustomerName);
        let y = this.state.productData.find(a => a.display === this.state.inputproductName);
        let z = this.state.storeData.find(a => a.display === this.state.inputstoreName);
        
        //var x = () => { console.log(customerData.inputcustomerName) }
        //ProductId, CustomerId, StoreId, DateSold
        //if this.state.inputproductName
        console.log({ CustomerId: x.value, ProductId: y.value, StoreId: z.value, DateSold: this.state.inputDate } );
        //console.log({ thecustomerName: this.state.inputcustomerName, theproductName: this.state.inputproductName, thestoreName: this.state.inputstoreName, thedateSold: this.state.inputDate });
        $.ajax({
            type: 'POST',
            url: '/ProductSolds/AddNewSale',
            data: { customerId: x.value, productId: y.value, storeId: z.value, dateSold: this.state.inputDate },
            dataType: 'json',
            success: () => {
                k = true;

            }
        })
    }

    render() {

        return (
            <Form onSubmit={this.saveSubmit}>
                <Form.Field inline label='Select Customer' control='select' name="inputcustomerName" value={this.state.inputcustomerName} onChange={ this.handleChange}>
                    {this.state.customerData.map((team) => <option key={team.value} >{team.display}</option>)}
                </Form.Field>


                <Form.Field inline label='Product Name' control='select' name="inputproductName" value={this.state.inputproductName} onChange={this.handleChange}>
                    {this.state.productData.map((team) => <option key={team.value} >{team.display}</option>)}
                </Form.Field>


                <Form.Field inline label='Store Name' control='select' name="inputstoreName" value={this.state.inputstoreName} onChange={this.handleChange}>
                    {this.state.storeData.map((team) => <option key={team.value} >{team.display}</option>)}
                </Form.Field>

                <Form.Field inline>
                    <label>Date</label>
                    <input
                        placeholder='02/10/2018'
                        name="inputDate"
                        value={this.state.inputDate}
                        onChange={this.handleChange}

                    />
                </Form.Field>

                <Button floated='right'>Close</Button>
                <Button floated='right' type="submit">Save</Button>

            </Form>

        );
    }

}



//<Form.Field inline label='Store Name' control='select'>
//    {this.state.storeData.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
//</Form.Field>
import React, { Component } from 'react';
import CustomerTable from './customerTable.jsx';
import ModalModalExample from './modal/modalApp.jsx';

export default class CustomerApp extends Component {
    render() {
        return (
            <div >
                <ModalModalExample />
                < CustomerTable />

            </div>
        );
    }
}

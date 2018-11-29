import React, { Component } from 'react';
import ProductSoldTable from './productSoldTable.jsx';
import ModalModalExample from './createModal/modalApp.jsx';

export default class ProductSoldApp extends Component {
    render() {
        return (
            <div >
                <ModalModalExample />
                < ProductSoldTable />

            </div>
        );
    }
}
//import React from 'react'
//import { Menu } from 'semantic-ui-react'

//const MenuNavbar = () => (
//    <Menu inverted>
//        <Menu.Item name='Keys-Onboarding' />
//        <Menu.Item name='Products' />
//        <Menu.Item name='Customers' />
//        <Menu.Item name='Store' />
//        <Menu.Item name='Sales' />
//    </Menu>
//);

//export default MenuNavbar

import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
//import { Link } from 'react-router-dom'


export default class MenuNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'home'
           

        }

       
    }
    

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
        
            
    }

    render() {
        
        const { activeItem } = this.state

        return (
            <Menu inverted>
                <Menu.Item name='KeysOnboarding' active={activeItem === 'KeysOnboarding'} onClick={this.handleItemClick} />
                
                <Menu.Item
                    
                    name='Products'
                    active={activeItem === 'Products'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Store'
                    active={activeItem === 'Store'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Sales'
                    active={activeItem === 'Sales'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}
import React, { Component } from 'react';
import ButtonExampleAnimated from './exampleTest.jsx'
//import LoggedInNavigation from '../navbar/LoggedInNavigation.jsx';

export default class Test extends Component {
    render() {
        let href="../customers/index"
        return (
            <div >
                <a href={href}>Customer</a>
                < ButtonExampleAnimated />

            </div>
        );
    }
}



//<LoggedInNavigation/>
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB';

class ComponenteA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"Matias",
            last_name:"Perez",
            mail:"mati31@gmail.com",
            conectado: true
        }
    }

    render() {
        return (
            <div>
                <ComponenteB name={this.state.name} last_name={this.state.last_name} mail={this.state.mail} conectado={this.state.conectado} cambiarStatus={this.cambiarStatus}></ComponenteB>
            </div>
        );
    }

    cambiarStatus = () => {
        if (this.state.conectado === true) {
            this.setState(prevState => (
                {
                    conectado: !prevState,
                }
            ) 
        )
        } else {
            this.setState(prevState => (
                {
                    conectado: true,
                }
            ) 
        )
        }
    }
}

ComponenteA.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};


export default ComponenteA;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import photo from '../assets/img/photo.jpg';

export class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mini-container jumbotron">
                <div class="media">
                    <div class="media-body">
                        <h4 class="media-heading">Sobre o projeto</h4>
                        Esse projeto foi desenvolvido com o intuito de deixar a leitura inclusiva.
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
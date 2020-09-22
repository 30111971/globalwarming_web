import { requirePropFactory } from '@material-ui/core';
import React, { Component } from 'react';
import './styles.css';

export default class IntegrantesBoard extends Component {
  render() {
    return (
        <div className="board">
            <p><h6>Integrantes:</h6> Matheus da Costa Maicá Oliveira, Bruno Pietro, Cauê Machado Higino </p>
            <p><h6>Professor Orientador:</h6> Ricardo Gudde Martins </p>
            <p><h6>Escola:</h6> TECPUC</p>
        </div>
    );
  }
}

import React, { Component } from 'react';
import './styles.css';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import API from '../../services/api'

export default class Header extends Component {
  filtraNome = e => {
    e.preventDefault();
    let data = document.getElementsByClassName("searchBar")[0].value
    var couponNames = []
    console.log("data")
    API.get("/cupom/listar")
        .then(res => { 
          res.forEach(e => {
            if(e.titulo.toLowerCase().search(data.toLowerCase()) !== -1) {
            couponNames = [...couponNames, e]
          }            
        });

        this.props.handleState(couponNames)
      }) 
  }
  
  render() {
    return (
        <header>
          <div>
            <div className="icon-animation">
              <Link className="home" to="/">
                <MdHome className="menu-icon"/>
              </Link>
              <span className="animacao"/>
            </div>
            <h1 style={{ fontSize: 23, fontWeight: "bold" }}>Aquecimento Global</h1>
          </div>
          <form onSubmit={this.filtraNome} className="search">
            <span className="fa fa-search" id="searchButton" onClick={this.filtraNome}></span>
            <input type="text" className="searchBar" placeholder="O que está buscando?" style={{width: "50%", height: 40}} />
          </form>          
          <Link className="link" to="/">
            <Button
              onClick={() => alert("Indisponível :(")}
              style={{ backgroundColor: "white" }}
            >
              Login
            </Button>
          </Link>
          
        </header>
    );
  }
}

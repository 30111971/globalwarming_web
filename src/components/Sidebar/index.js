import React, { Component } from 'react';
import { GoMarkGithub } from 'react-icons/go'
import { Link } from 'react-router-dom';
import { ScreenContext } from '../../contexts/ScreenContext';
import './styles.css';

export default class Sidebar extends Component {

  render() {
    return (
      <ScreenContext.Consumer>
      {(context) => (
        <aside className="sidebar">
          <div className="content">
            <Link className="nav-button" to="/">
              <h3>Projeto</h3>
              <div className="animacao" />
            </Link>
            <Link className="nav-button" to="/integrantes">
              <h3>Integrantes</h3>
              <div className="animacao" />
            </Link>
            <Link className="nav-button" to="/">
              <h3>Aquecimento Global</h3>
              <div className="animacao" />
            </Link>
            <Link className="nav-button" to="/">
              <h3>Inteligência Artificial</h3>
              <div className="animacao" />
            </Link>
            <Link className="nav-button" to="/">
              <h3>Imagens por Satélite</h3>
              <div className="animacao" />
            </Link>
            <Link className="nav-button" to="/">
              <h3>Outras Informações</h3>
              <div className="animacao" />
            </Link>            
          </div>
          <footer className="bottom-nav">
            <Link className="nav-button" to="https://github.com/30111971">
              <GoMarkGithub  className="icon"/>
              <span>GitHub</span>
              <div className="animacao" />
            </Link>
            {/* <Link className="nav-button" to="/">
              <IoMdPerson  className="icon"/>
              <span>Entrar</span>
              <div className="animacao" />
            </Link> */}
          </footer>
        </aside>
        )}
      </ScreenContext.Consumer>
    );
  }
}

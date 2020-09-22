import React, { Component } from 'react';
import ItemProvider from '../../components/ItemProvider'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import IntegrantesBoard from '../../components/IntegrantesBoard'
import { ScreenContext } from '../../contexts/ScreenContext';

export default class Integrantes extends Component {

  render() {
    return (
      <ItemProvider>
        <ScreenContext.Consumer>
        {(context) => (
          <div className="container">
            <Header handleState={context.handleState}/>
            <Sidebar />
            <IntegrantesBoard cupons={context.state.cupons} />
          </div>
        )}
        </ScreenContext.Consumer>
      </ItemProvider>
    );
  }
}

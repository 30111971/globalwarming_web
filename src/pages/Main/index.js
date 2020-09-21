import React, { Component } from 'react';
import ItemProvider from '../../components/ItemProvider'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Board from '../../components/Board'
import { ScreenContext } from '../../contexts/ScreenContext';

export default class Main extends Component {

  render() {
    return (
      <ItemProvider>
        <ScreenContext.Consumer>
        {(context) => (
          <div className="container">
            <Header handleState={context.handleState}/>
            <Sidebar />
            <Board cupons={context.state.cupons} />
          </div>
        )}
        </ScreenContext.Consumer>
      </ItemProvider>
    );
  }
}

import React, { Component } from 'react';
import { ScreenContext } from '../../contexts/ScreenContext'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import axios from 'axios';
export default class CupomProvider extends Component {
    state = {
        filtrosTipo: ['restaurante', 'hotel', 'transporte', 'servico', 'produto', 'lazer'],
        filtroPrecoMax: '',
        ordem: '',
        crescendo: true,
        cupons: [],
        ordemInicial: ['premium', 'standard', 'free'],
    }

    handleState = cupons => this.setState({cupons})

    handleCheckboxChange = e => {
        if(e.target.checked) {
            this.setState({filtrosTipo: this.state.filtrosTipo.concat(e.target.value)})
        } else {
            this.state.filtrosTipo.splice(this.state.filtrosTipo.indexOf(e.target.value),1);
            this.setState({filtrosTipo: this.state.filtrosTipo})
        }
    }

    handlePriceChange = e => this.setState({filtroPrecoMax: e.target.value});

    reset = e => {
        e.preventDefault();
        this.setState({filtroPrecoMax: ''});
    }

    handleOrderClick = async e => {
        if(this.state.ordem === e.target.value) {
            await this.setState({crescendo: !this.state.crescendo});
        } else {
            await this.setState({ordem: e.target.value, crescendo: true});
        }
        this.orderCards();
    }

    orderCards = () => {
        const { ordem } = this.state;
        this.setState({
            cupons: this.state.crescendo ? (this.state.cupons.sort((a, b) => {
                if(a[ordem] < b[ordem]) return -1
                if(a[ordem] === b[ordem]) return 0
                return 1
            })) : this.state.cupons.reverse()
        })
    }

    handleIcon = () => this.state.crescendo ? <MdKeyboardArrowUp className="icone" /> : <MdKeyboardArrowDown className="icone" />

    render() {
        return (
            <ScreenContext.Provider value={{
                state: this.state,
                handleCheckboxChange: this.handleCheckboxChange,
                handlePriceChange: this.handlePriceChange,
                reset: this.reset,
                handleOrderClick: this.handleOrderClick,
                handleIcon: this.handleIcon,
                handleState: this.handleState,
            }}>
                {this.props.children}
            </ScreenContext.Provider>
        );
    }
}

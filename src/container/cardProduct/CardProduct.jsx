import React, { Component } from 'react';


class CardProduct extends Component {

    state = {
        order : 1
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })

    }

    handleMinus = () => {

        if(this.state.order > 0){
            this.setState({
                order : this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/ayam/Ayam+Berbumbu+5+Potong.jpg" alt=""/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original [isi 5 Pcs]</p>
                <p className="product-price">Rp 25,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" className="text-count" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;
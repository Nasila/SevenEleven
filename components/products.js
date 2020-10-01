import React, { Component } from 'react'
import axios from 'axios';
import Card from './card';
export default class products extends Component {
    state = {products: []};
    render() {
        axios.get("http://localhost:5000/products/").then(res=>this.setState({ products: res.data }));
        console.log(this.state.products);
        return (
            <div className={gridcontainer}>
                {this.state.products.map((product) => (
                    <Card key={product.id} name={product.name} price={product.price} description={product.description}/>
                
                ))}
                </div>
        )
    }
}
const gridcontainer={
    display: "grid",
    gridTemplateColumns:"auto auto auto",
    padding: "10px"
}
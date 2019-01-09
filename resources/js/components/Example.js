import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './pages/Product'
import Home from './pages/Home'
export default class Example extends Component {
    constructor(props){
        super(props)
        this.AddProduct = this.AddProduct.bind(this)
    }
    AddProduct (){
        console.log(this.refs.name.value)
    }
    render() {

        var products = [
            {
                id : 1,
                name : 'Thức đẹp trai',
                price : '9000 USD'
            },
            {
                id : 2,
                name : 'Thức đẹp trai',
                price : '8000 USD'
            },
            {
                id : 3,
                name : 'Thức đẹp trai',
                price : '7000 USD'
            }
        ];
        let productElement  = products.map( (product,index) =>{
            let result = '';
            result =<Product  key = {product.id} name = {product.name} price = {product.price}></Product>
            return result;
        });
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                            <a className="nav-link" href="#"><Home/></a>
                            </li>
                            <li className="nav-item">
                                
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            { productElement }
                        </div>
                    </div>
                    <div className="row">
                        <div className ="form-group">
                            <label>Tên</label>
                            <input className="form-control" type="text" ref="name"></input>
                        </div>
                        <div className ="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.AddProduct}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

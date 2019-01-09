import React, { Component } from 'react';

class Product extends Component {

    render() {
        return (
            <div className="col-xs-4">
                <div className="thumbnail">
                    <img alt=""/>
                    <div className="caption">
                        <h3> {this.props.name} </h3>
                        <p>
                            {this.props.price} 
                        </p>
                        <p>
                            <a name="" id="" className="btn btn-primary" href="" role="button" >Mua</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product

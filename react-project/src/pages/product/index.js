import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
class Index extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const { data } = await api.get(`/products/${id}`)

        this.setState({ product: data })
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    <a href={product.url} >{product.url}</a>
                </p>
            </div>
        )
    }
}

export default Index;

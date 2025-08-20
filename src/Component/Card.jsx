import React from 'react'
import products from '../data.js'

const Card = ({product}) => {
    return (
        <>
            <div class="card" style={{"width": "18rem;"}}>
                <img src={product.image} className="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{products.name}</h5>
                        <p class="card-text">{products.description}</p>
                        {products.discount > 0 ?(
                           <p>
                             price:$<del>{products.price}</del>
                             <span className="ps-3">${products.discountedPrice}</span>
                           </p>
                        ):(
                            <p>price:${products.price}</p>
                        )}
                        
                        <a href="#" className="btn btn-primary">View More</a>
                    </div>
            </div>
        </>
    )
}

export default Card

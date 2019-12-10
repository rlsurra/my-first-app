import React from 'react'
import './Producto.css'

const Productos = ({ productos }) => {
    return (
    <div id="cartas-productos">
        {productos.map((prod) => (
        <div class="card">
            <div class="card-body">
                <h5 id="tipo-prod" class="card-title">{prod.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{prod.productType}</h6>
                <p class="card-text">{prod.publicId}</p>
            </div>
        </div>
        ))}
    </div>
    )
};

export default Productos

    /*

                <h6 class="card-subtitle mb-2 text-muted">{prod.productOffering.id}</h6>
                <p class="card-text">{prod.productOffering.name}</p>
                <p class="card-text">{prod.productOffering.description}</p>

    */
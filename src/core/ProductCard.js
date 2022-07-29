import React from "react"
import { Link } from "react-router-dom";

//icons
import{MdAddShoppingCart} from "react-icons/md"
import{FaHeart} from "react-icons/fa"


const ProductCard=({product})=>{
    //Setting up the outline of each product card
    return(
        <div className="card shadow-lg" style={{minHeight:"300px",textDecoration:"none"}}>
          <Link to={`/products/${product.id}`} style={{textDecoration:"none"}}>

          <img src={`${product.image}`} height="200px" width="100%"></img>
           <div className="p-3">
            <p className="text-muted h6" style={{fontFamily:"serif" , fontSize:"15px"}}>{product.title}</p>
            <p className="text-muted h6" style={{fontFamily:"serif" , fontSize:"20px"}}>₹ {product.amount}</p>
            <span class="badge badge-success bg-success">{product.rating}</span>
            
           </div>
           <div className="p-3 d-flex justify-content-between" >
             <div className=""><FaHeart className="h5 text-secondary" /></div>

             <div className="" ><MdAddShoppingCart className="h5" /></div>
           </div>
          </Link>
        </div>
    )
}

export default ProductCard
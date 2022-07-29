import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom";
import db from "../db.json"


import NavMenu from "../core/NavMenu"
import ProductCard from "../core/ProductCard"

const ProductList=(props)=>{

    const [products,setProducts]=useState([])

    useEffect(()=>{
        setProducts(db.products)//Get products from db.json in products state as soon as page reloads.
    },[props])

    const showProducts=()=>(
        <div className="row col-12 p-0 mx-auto justify-content-center mt-3 mb-5">
            {products && products.map((p,i)=>(
                <div className="col-3 m-0"><ProductCard product={p}/></div>
            ))}
        </div>
    )
    return(
        <div>
            <NavMenu />
          {console.log(db.products)}
          <br/>
          {showProducts()}
        </div>
    )
}

export default ProductList
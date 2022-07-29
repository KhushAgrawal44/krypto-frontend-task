import React,{useState,useEffect} from "react"
import { useParams } from 'react-router-dom';
import db from "../db.json"
import NavMenu from "../core/NavMenu";


const ProductDetails=(props)=>{

    const reqId=useParams().productId

    const [product,setProduct]=useState({})

    useEffect(()=>{
        console.log(reqId);
        console.log(db.products);
        db.products && db.products.map((p,i)=>{
            console.log(p.id);
            console.log(reqId);
            if(p.id==reqId)
            {
                console.log("Hello");
                setProduct(p)
            }
            
        })
    },[props])

   
    const showDetails=()=>(
        <div>
            <div className="row col-9 mx-auto mt-5" style={{height:"60vh"}}>
                <div className="col my-auto">
                    <img src={`${product.image}`} height="50%" width="90%"></img>
                </div>
                <div className="col mt-5 my-auto">
                    <h3 className="" style={{fontFamily:"sans-serif"}}>{product.title}</h3>
                   <div className="">
                   <p className="text-muted" style={{fontFamily:"sans-serif"}}>{product.description}</p>
                    <p className="h3" style={{fontFamily:"sans-serif"}}>₹ {product.amount}</p>
                    <div className="row mt-5">
                        <div className="col"><button className="btn btn-lg  btn-outline-primary float-end">Buy Now</button></div>
                        <div className="col"><button className="btn btn-lg  btn-outline-dark">Add to Cart</button></div>

                    </div>
                   </div>
                </div>
            </div>
        </div>
    )

    return(
        <div>
         <NavMenu />
         {showDetails()}
        </div>
    )
}

export default ProductDetails
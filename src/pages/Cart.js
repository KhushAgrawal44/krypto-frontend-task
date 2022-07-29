import React from "react"
import NavMenu from "../core/NavMenu"
import db from "../db.json"


const Cart=()=>{
    const cartCard=(p)=>(
        <div className="row border border-3 mt-1">
            <div className="col-4"><img src={`${p.image}`} width="100%" height="100%"></img></div>
            <div className="col-8" style={{fontFamily:"sans-serif"}}>
                <p className="h4">{p.title}</p>
                <p className="h4 text-muted">₹ {p.amount}</p>
            </div>
        </div>
    )
    const cartProducts=()=>(
      <div className="card p-4">
        <p className="h4 p-3">My Cart</p>
        {cartCard(db.products[5])}
        {cartCard(db.products[8])}
      </div>
    )

    const priceSummary=()=>(
        <div className="card p-4" style={{fontFamily:"sans-serif"}}>
            <p className="h4 mb-4">Price Details</p>
            <div className="d-flex justify-content-between ">
                <span className="h5 text-muted">Price </span>
                <span className="h5 text-muted">₹ 900</span>
            </div> 
            <div className="d-flex justify-content-between ">
                <span className="h5 text-muted">Discounted Price </span>
                <span className="h5 text-muted">₹ 875</span>
            </div> 
            <div className="d-flex justify-content-between ">
                <span className="h5 text-muted">Delivery Charges</span>
                <span className="h5 text-muted">₹ 25</span>
            </div> 
            <hr/>
            <div className="d-flex justify-content-between ">
                <span className="h3 text-dark">Total</span>
                <span className="h3 text-dark">₹ 900</span>
            </div> 

            <div className="mt-5"><button className="col-12 btn btn-primary btn-lg btn-block">Place Order</button></div>

        </div>
    )
    return(
        <div>
           <div><NavMenu /></div>
           <div className="row col-9 mx-auto mt-5">
               <div className="col-6">
                 {cartProducts()}
               </div>
               <div className="col-6">{priceSummary()}</div>
           </div>
        </div>
    )
}

export default Cart
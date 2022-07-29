import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//icons
import { FaShoppingCart } from 'react-icons/fa';

//Setting up reusable Top Menu Component.

const NavMenu=()=>{
    return (
        <div>
           <Navbar bg="primary" expand="lg">
             <Container>
               <Navbar.Brand href="/"><span className="h2 text-white mx-5" style={{fontFamily:"fantasy",fontWeight:"bold"}}>ShopKart</span></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="justify-content-end text-white ml-2" style={{ width: "100%" }}>
                   <Nav.Link href="/products" className="text-white">Products</Nav.Link>
                   <Nav.Link href="/" className="text-white ml-2">Login</Nav.Link>
                   <Nav.Link href="/cart" className="text-dark ml-2"><FaShoppingCart className="h4 " /><sup class="badge badge-pill badge-warning bg-danger p-1">2</sup></Nav.Link>

                 </Nav>
               </Navbar.Collapse>
             </Container>
           </Navbar>
        </div>
    )
}

export default NavMenu
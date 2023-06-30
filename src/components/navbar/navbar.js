import React from 'react'
import {AcmeLogo} from "../AcmeLogo";
import {Button, Link, Text} from "@nextui-org/react";
import './navbar.css'
const Navbar = () => {
    return (
        <>

            <div className="Navbar">
                <Link href="/">Product</Link>
                <Link href="/cart">Cart</Link>
            </div>

        </>
    );
}

export default Navbar;
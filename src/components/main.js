import React from 'react'
import './main.css'

import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
const Main = () => {
    return (
        <>
            <Navbar>
                <Navbar.Brand>
                    <AcmeLogo/>
                    <Text b color="inherit" style={{fontSize: 24}}>
                        fumishoara
                    </Text>
                </Navbar.Brand>
                <div className="nav-links">
                    <Navbar.Content hideIn="xs">
                        <Navbar.Link href="#">Features</Navbar.Link>
                        <Navbar.Link href="#">Customers</Navbar.Link>
                        <Navbar.Link href="#">Pricing</Navbar.Link>
                        <Navbar.Link href="#">Company</Navbar.Link>
                    </Navbar.Content>
                </div>
                <Navbar.Content>

                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Notify about new Stocks
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

        </>
    );
}

export default Main;
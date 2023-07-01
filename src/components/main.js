import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import Cards from "./cards/cards";
import React from 'react'
import './main.css'

import img1 from './images/img1.png'
import Footer from "./footer/footer";

const Main = () => {

    const collapseItems = [
        "Stocks",
        "Prices",
        "Team",
        "Feedback",
        "Telegram",
        "Instagram",
    ];

    return (
        <>
            <Navbar variant="fixed">
                <Navbar.Brand>
                    <Navbar.Toggle aria-label="toggle navigation" />
                    <AcmeLogo height="65px"/>
                    <Text b color="inherit" hideIn="xs">
                        FUMISHOARA
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    <Navbar.Link isActive href="#">
                        HOMEsoara
                    </Navbar.Link>
                    <Navbar.Link href="#">Catalog</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Buy Now
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem key={item}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>

            <Cards/>

            {/*<div className="mid"></div>*/}
            <img className="heroimg" src={img1} alt=""/>

            <div className="mainwrap">

                <div className="howto">How to buy?</div>

                <ul style={{marginLeft: 40}}>
                    <li>Alege vape-ul tau preferat si alege din capacitatile disponibile.</li>
                    <li>Salveaza-ti alegerea in cosul de cumparaturi si cand esti decis plaseaza comanda.</li>
                    <li>In scurt timp vei fi contactat pe numarul de telefon lasat in sectia de informatii.</li>
                    <li>Se alege locul si metoda de livrare (daca este cazul).</li>
                </ul>

                <div className="howto">
                    Despre noi
                </div>

                <ul>
                    <li style={{maxWidth: 700, marginLeft: 20}}>
                        Suntem o echipa mica, dar cu o perspectiva mare. Am decis sa deschidem un eshop, fara a avea ceva
                        experienta anterioara si suntem exact o persoana ca tine, care a obosit sa fie fututa de bani de catre vape shops.
                    </li>
                </ul>

                <div className="howto">FAQ</div>

                <ul>
                    <li style={{maxWidth: 700, marginLeft: 20}}>
                        Daca ai intrebari, sugestii sau doar vrei sa ne lasi un feedback, suntem aici pentru tine.
                        Trimite un mesaj pe Instagram sau pe Telegram, care apoi va fi postat pe website.
                    </li>
                </ul>
            </div>


            <Footer/>
        </>
    );
}

export default Main;
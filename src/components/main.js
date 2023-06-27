import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import Cards from "./cards/cards";
import React from 'react'
// import pers1 from './images/p1.png'
// import pers2 from './images/p2.png'
// import pers3 from './images/p3.png'
// import pers4 from './images/p4.png'
import './main.css'

const Main = () => {
    return (
        <>
            {/*<div className="navbar">*/}
            <Navbar isBordered variant="sticky">
                <Navbar.Brand>
                    <AcmeLogo/>
                    <Text b color="inherit" style={{fontSize: 24}}>
                        fumishoara
                    </Text>
                </Navbar.Brand>

                <div className="nav-links">
                    <Navbar.Content hideIn="xs">
                        <Navbar.Link href="#">Homeshoara</Navbar.Link>
                        <Navbar.Link href="#">Catalog</Navbar.Link>
                        <Navbar.Link href="#">Contact</Navbar.Link>
                    </Navbar.Content>
                </div>

                <Navbar.Content>
                    <Navbar.Item>
                        <Button auto flat className="custom-button" as={Link} href="#">
                            Buy Now
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>

            </Navbar>
            {/*</div>*/}

            <div className="mainwrap">
                <Cards/>

                <div className="howto">
                    How to buy?
                    {/*<img src={pers2} alt="pers2" className="centered-image" />*/}
                </div>

                <ul style={{marginLeft: 20}}>
                    <li>Alege vape-ul tau preferat si alege din capacitatile disponibile.</li>
                    <li>Salveaza-ti alegerea in cosul de cumparaturi si cand esti decis plaseaza comanda.</li>
                    <li>In scurt timp vei fi contactat pe numarul de telefon lasat in sectia de informatii.</li>
                    <li>Se alege locul si metoda de livrare (daca este cazul).</li>
                </ul>

                <div className="howto">
                    Despre noi
                    {/*<img src={pers1} alt="pers1" className="centered-image" />*/}
                </div>

                <ul>
                    <li style={{maxWidth: 700, marginLeft: 20}}>
                        Suntem o echipa mica, dar cu o perspectiva mare. Am decis sa deschidem un eshop, fara a avea ceva
                        experienta anterioara si suntem exact o persoana ca tine, care a obosit sa fie fututa de bani de catre vape shops.
                    </li>
                </ul>

                <div className="howto">
                    FAQ
                    {/*<img src={pers3} alt="pers1" className="centered-image" />*/}
                </div>

                <ul>
                    <li style={{maxWidth: 700, marginLeft: 20}}>
                        Daca ai intrebari, sugestii sau doar vrei sa ne lasi un feedback, suntem aici pentru tine.
                        Trimite un mesaj pe Instagram sau pe Telegram, care apoi va fi postat pe website.
                    </li>
                </ul>

            </div>
        </>
    );
}

export default Main;
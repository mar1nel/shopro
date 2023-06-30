import { Card, Grid, Row, Text } from "@nextui-org/react";
import waka1 from './cards-img/waka1.png';
import crystal1 from './cards-img/crystal1.webp';
import elfbar1 from './cards-img/elfbar1.jpg';
import elfbar2 from './cards-img/elfbar2.webp';
import React from "react";

export default function Cards() {
    const list = [
        {
            title: "Crystal ProMax 4000 2%",
            img: crystal1,
            price: "55 LEI",
        },
        {
            title: "Waka Vape 6000 5%",
            img: waka1,
            price: "60 LEI",
        },
        {
            title: "ElfBar Vape 600 Puff 2%",
            img: elfbar1,
            price: "25 LEI",
        },
        {
            title: "ElfBar BC5000 Puff 2%",
            img: elfbar2,
            price: "OUT OF STOCK",
        },
    ];

    return (
        <>
            <br/>
            <div style={{marginLeft: 20}}>Today we dropping in Timisoara:</div>
            <br/>
            <div className="card-container">
                <Grid.Container gap={0} justify="center">
                {list.map((item, index) => (
                    <Grid xs={3} sm={6} key={index}>
                        <Card isPressable>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={item.img}
                                    objectFit="cover"
                                    width="100%"
                                    height={100}
                                />
                            </Card.Body>
                            <Card.Footer >
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text b>{item.title}</Text>
                                    <Text
                                        css={{
                                            color: "$accents7",
                                            fontWeight: "$semibold",
                                            fontSize: "$sm",
                                        }}>
                                        {item.price}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
               </Grid.Container>
            </div>
        </>
    );
}

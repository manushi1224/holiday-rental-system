import React from "react";
import Footer from "./Footer";
import Data from "../DataEx.json"
import { Container, Card, Button } from "react-bootstrap";
import "../style/Reserve.css"

export default function Reserve() {

    const hotel = Data
    const cleaningFee = parseInt(hotel.priceDetails[0].value.split('$')[1])

    return (
        <div>
            <Container>
                <Card id="reserve">
                    <Card.Body className="m-2">
                        <div className="row">
                            <div className="col-4">
                                <img src={hotel.photos[0].thumbnailUrl} alt="" height={120} width={145} className="object-fit-fill rounded" />
                            </div>
                            <div className="col-8">
                                <div>
                                    <div className="room-type">{hotel.roomType}</div>
                                    <div className="room-name">{hotel.name}</div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h4>Price Details</h4>
                            <div className="my-2">
                                <span>
                                    ₹{hotel.pricing.rate.amount} x nights <span className="float-end">₹</span>
                                </span>
                            </div>
                            <div className="my-2">
                                <span>
                                    Cleaning Fee
                                </span>
                                <span className="float-end">₹{cleaningFee * 70}</span>
                            </div>
                            <hr />
                            <div className="fw-bold my-2">
                                Total before Taxes (INR)<span className="float-end">₹total</span>
                            </div>
                        </div>
                        <Button variant="" className="mt-4 mb-3 reservebtn">
                            <span className="fw-bold text-light">
                                Reserve
                            </span>
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </div>
    )
}
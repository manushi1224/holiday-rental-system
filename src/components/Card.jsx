import React, { Fragment } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper';
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import "../style/Cards.css"
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import DateModal from "./DateModal";

export default function Cards() {
    return (
        <Fragment>
            {/* <DateModal/> */}
            <Container className="swiper-container" >
                <Swiper
                    // install Swiper modules
                    className="swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src="https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720" alt="none" /></SwiperSlide>
                    <SwiperSlide><img src="https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720" alt="none" /></SwiperSlide>
                    <SwiperSlide><img src="https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720" alt="none" /></SwiperSlide>
                    <SwiperSlide><img src="https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720" alt="none" /></SwiperSlide>
                </Swiper>
                <Container fluid={true} className="m-2 card-space" >
                    <Container className="fw-bold card-data" fluid={true}>Nashik, India <span className="float-end fw-lighter"><AiFillStar className="me-1"/>4.87</span></Container>
                    <Container className="card-data">150 kilometers away</Container>
                    <Container className="card-data">10-17 Sept</Container>
                    <Container className="card-data"><span className="fw-bold">$400</span> night</Container>
                    <Button>
                        <Link>
                        </Link>
                    </Button>

                </Container>
            </Container>


        </Fragment>
    )
}
import React, { Fragment, useState } from 'react'
import Data from "../DataEx.json"
import ImgLayout from './ImageLayout'
import { Container } from '@mui/material'
import "../style/Main.css"
import { Col, Row } from "react-bootstrap";
import BookModal from './BookModal'
import { AiFillStar } from 'react-icons/ai';
import ReviewModal from './ReviewModal'
import Detail from './Detail'

export const Main = (props) => {

  const [review, setReview] = useState(false)
  const [value, setValue] = useState({
    checkIn: new Date(),
    checkOut: new Date()
  });
  // const [totalDaysSelected, setTotalDaysSelected] = useState(0);

  const updateReview = () => {
    setReview(!review)
    // console.log(newValue)
  }

  const handleDateChange = (newValue) => {
    setValue(newValue)
  }

  // const handleTotalDaysUpdate = (totalDays) => {
  //   setTotalDaysSelected(totalDays);
  // };

  const hotel = Data

  console.log(typeof props.updateTotalDays);
  // const par =useParams()

  return (
    <Fragment className="main">
      <div className='m-1'>
        <Container>
          <h4 className='main fw-bold'>{hotel.name}</h4>
          {hotel.reviewDetailsInterface.reviewCount > 3 &&
            <span><AiFillStar className="me-2 mb-1" /><span className='fw-bold'>{hotel.stars}</span> · </span>}
          <span onClick={() => updateReview()} className="underline fw-bold">
            {hotel.reviewDetailsInterface.reviewCount} Reviews
          </span>
          <ReviewModal review={review} updateReview={updateReview} hotel={hotel} />
        </Container>
        <Container className='d-flex'>
          <ImgLayout hotel={hotel} />
        </Container>
        <Container>
          {/* <MultiCalendar value={value} change={(newValue) => handleDateChange(newValue)} /> */}
        </Container>
        <Container className='mt-3'>
          <Row>
            <Col>
              <Detail hotel={hotel}/>
            </Col>
            <Col>
              <BookModal
                hotel={hotel}
                review={review}
                updateReview={updateReview}
                value={value}
                change={handleDateChange}
              // updateTotalDays={handleTotalDaysUpdate} // Make sure to pass the prop with the correct name and as a function
              />
              {console.log(value)}

            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    </Fragment>
  )
}

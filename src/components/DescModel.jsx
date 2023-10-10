import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "../style/Detail.css"

export default function DescModel(props) {
    return (
        <Modal
            dialogClassName="modal-90w"
            className={`modal ${props.toggle ? 'slide-up' : ''} main`}
            show={props.isOpen}
            id='loginModal'
            aria-labelledby="example-custom-modal-styling-title"
            scrollable={true}
        // centered
        >
            <Modal.Header>
                <button type="button" class="btn-close" aria-label="Close" onClick={props.toggle}></button>
            </Modal.Header>
            <Modal.Body>
                <div className='container p-3'>
                    <h3 className='fw-bold'>About this place</h3>
                    {props.hotel.sectionedDescription.description.split('\n\n')[0]}</div>
                <div className='container p-3'><h6 className='fw-bold'>The Space</h6>
                    {props.hotel.sectionedDescription.space}</div>
                <div className='container p-3'>
                    <h6 className='fw-bold'>Guest Access</h6>
                    {props.hotel.sectionedDescription.access}
                </div>
            </Modal.Body>

        </Modal>

    );
};
import React, { Fragment } from "react";

export default function ImgLayout(props) {
    //image for page
    var img = []
    for (let i = 0; i < 5; i++) {
        if (i === 0) { img.push(props.hotel.photos[i].pictureUrl) }
        else {
            let x = props.hotel.photos[i].thumbnailUrl
            x = x.split("=")
            x[1] = "medium"
            x = x.join("=")
            img.push(x)
        }
    }

    //image for model
    var imglist = []
    for (let i = 0; i < props.hotel.photos.length; i++) {
        if (i === props.hotel.photos.length - 1) {
            if ((i + 1) % 3 === 1) {
                imglist.push(props.hotel.photos[i].pictureUrl)
            }
            else if (i % 3 === 0 || i % 3 === 1) {
                let x = props.hotel.photos[i].thumbnailUrl
                x = x.split("=")
                x[1] = "medium"
                x = x.join("=")
                imglist.push(x)
            }
            else if ((i) % 3 === 2) {
                imglist.push(props.hotel.photos[i].pictureUrl)
            }
        }
        else {
            if (i % 3 === 0 || i % 3 === 1) {
                let x = props.hotel.photos[i].thumbnailUrl
                x = x.split("=")
                x[1] = "medium"
                x = x.join("=")
                imglist.push(x)
            }
            else {
                imglist.push(props.hotel.photos[i].pictureUrl)
            }
        }
    }
    return (
        <Fragment>
            <div className='me-1 mt-2'><img height={407} width={550} src={img[0]} alt='none'></img> </div>
            <div className='m-1'>
                <div className='d-flex '>
                    <div className='m-1'><img height={200} width={275} src={img[1]} alt='none'></img></div>
                    <div className='m-1'><img height={200} width={275} src={img[2]} alt='none'></img></div>
                </div>
                <div className='d-flex '>
                    <div className='m-1'><img height={200} width={275} src={img[3]} alt='none'></img></div>
                    <div className='m-1'><img height={200} width={275} src={img[4]} alt='none'></img></div>
                </div>
            </div>
        </Fragment>
    )
}
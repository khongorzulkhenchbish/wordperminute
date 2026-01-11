import React from 'react';
import {Row} from 'react-bootstrap';
import data from '../resources/data.json';
import '../styles/Layout.css'

const Adv = () => {
  return (
    <Row className="adv">
        <iframe className="content-box" src="https://www.youtube.com/embed/JOglMvmJ3H0?si=2pN-fIZczqqXR6om" title="YouTube video player"></iframe>
        <div className="content-box">
        <h1>{data.content_header}</h1>
          <p>{data.adv_text}</p>
        </div>
    </Row>
  )
}
export default Adv;
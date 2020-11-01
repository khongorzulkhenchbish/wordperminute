import React from 'react';
import { Row } from 'react-bootstrap';
import data from '../resources/data.json';
import '../styles/Layout.css'

const Adv = () => {
  return (
    <Row className="adv">
      <div className="contentBox">
        <iframe className="adv-video" src="https://www.youtube.com/embed/KwQvyYzcOJU" frameBorder="0" title="advVideo"></iframe>
      </div>
      <div className="contentBox">
      <h1>{data.content_header}</h1>
        <p>{data.adv_text}</p>
        <button type="button" className="btn btn-primary" >{data.sign_up_button}</button>
      </div>
    </Row>
  )
}
export default Adv;
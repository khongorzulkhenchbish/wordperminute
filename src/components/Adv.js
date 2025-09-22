import React from 'react';
import {Row} from 'react-bootstrap';
import data from '../resources/data.json';
import '../styles/Layout.css'

const Adv = () => {
  return (
    <Row className="adv">
        <iframe className="contentBox first-box adv-video" src="https://www.youtube.com/embed/QAb3ATOpBpE?si=v5Hu0sNZuASslU2E" frameBorder="0" title="advVideo"></iframe>
        <div className="contentBox">
        <h1>{data.content_header}</h1>
          <p>{data.adv_text}</p>
        </div>
    </Row>
  )
}
export default Adv;
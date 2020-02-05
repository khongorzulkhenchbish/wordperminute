import React from 'react';
import {Row} from 'react-bootstrap';

const Adv = () => {
    return (
        <Row className="justify-content-center d-flex adv">
          <div className="contentBox text-right">
            <iframe width="560" height="315" title="video" src="https://www.youtube.com/embed/v4xZUr0BEfE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="contentBox">
            <h1>BROUGHT TO YOU BY LIVECHAT</h1>
            <p>LiveChat is an application that enables the visitors on your site to 
              <strong>ch
              at live with your customer support</strong>. As opposed 
            to the outdated phone technology, LiveChat lets you to chat with severa
            l customers at the same time, track their behaviour and measure sales conversio
            n. Give us a try!</p>
            <button type="button" className="btn btn-primary" >SIGN UP FOR FREE</button>
          </div>
        </Row>
    )
}

export default Adv;
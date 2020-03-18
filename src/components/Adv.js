import React from 'react';
import {Row} from 'react-bootstrap';

const Adv = () => {
    return (
        <Row className="justify-content-center d-flex adv">
          <div className="contentBox text-right">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GIsc6Q9VkcA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="contentBox">
            <h1>ADVERTISEMENT GOES HERE</h1>
            <p>Sed ut perspiciatis laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <button type="button" className="btn btn-primary" >SIGN UP FOR FREE</button>
          </div>
        </Row>
    )
}

export default Adv;
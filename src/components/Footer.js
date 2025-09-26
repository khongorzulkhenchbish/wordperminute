import React from 'react';
import {Row} from 'react-bootstrap';
import '../styles/Layout.css'
import data from "../resources/data.json";

const Footer = () => {
  return (
    <Row>
        <footer>
            {data.footer_text}
        </footer>
    </Row>
  )
}
export default Footer;
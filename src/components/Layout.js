import React from 'react';
import './Layout.css';
import Adv from '../components/Adv';
import Header from '../components/Header';
import Main from '../components/Main';
import { Container} from 'react-bootstrap';


const Layout = () => {
  return (
    <Container fluid="true">
      {/* first container */}
      <Header/>
      <Main/>
      <Adv/>
     </Container>
    )
}

export default Layout;

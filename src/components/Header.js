import React from 'react';
import {Row, Col, Container, Nav,} from 'react-bootstrap';

const Header = (props) => {
	return (
        <Row style={{backgroundColor:'#527dbc'}}> 
			<Col style={{backgroundColor:'rgba(63,50,50,.2)'}}>
				<Nav className="justify-content-end">
					<Nav.Item >
						<Nav.Link href="mailto:lolhongorzul@gmail.com">Бидэнтэй холбогдох</Nav.Link>
					</Nav.Item>
				</Nav>
				
			</Col>
			<div className="w-100">
			</div>
			<Col className="justify-content-center d-flex">
				<Container className="cont">
					<Row className="justify-content-center">
						<h1 id="header">ХУРДАН БИЧҮҮЛДЭГ АПП</h1>
					</Row>
					<Row className="justify-content-center">
						<Col className="meter">
							<Col className="counter" id="wordMin">
							{props.data.correct}
							</Col>
							<Col className="desc">
							ҮГ / МИН
							</Col>
						</Col>
						<Col className="meter">
							<Col className="counter" id="charMin" >
							{props.data.totalLetter}
							</Col>
							<Col className="desc">
							ҮСЭГ / МИН
							</Col>
						</Col>
						<Col className="meter">
							<Col className="counter" id="accuracy">
							{props.data.accuracy}%
							</Col>
							<Col className="desc">
							АМЖИЛТ
							</Col>
						</Col>
					</Row>
					<Row className="justify-content-center d-flex">
						<Col className="meter">
							<Col className="counter" id="second" >
								{props.data.sec}
							</Col>
							<Col className="desc">
							СЕКУНД
							</Col>
						</Col>
					</Row>
				</Container>
			</Col>
      	</Row>
      )
    };

export default Header;
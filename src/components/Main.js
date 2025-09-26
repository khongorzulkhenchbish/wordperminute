import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Header from './Header';
import Adv from '../components/Adv';
import Footer from '../components/Footer';
import PopUp from '../components/PopUp';
import '../styles/Layout.css';
import { isSameString, getLastInputChar } from './isSameString';
import sample from "../resources/sample.json";


export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            givenWord: '',
            charMin: 0,
            sec: 60,
        }

        this.givenText=sample[this.returnRandomInt()];
        // this.givenText ="search the worlds information including webpages images videos and more google has many special features to help";
        this.givenArray=[];
        this.givenArray=this.givenText.trim().split(" ");
        this.state.givenWord=this.givenArray[0];
        this.i=0;
        this.style = {
            end:'</span>',
            green:'<span style="color: #6174b4;text-decoration: none;">',
            red:'<span style="color: #6174b4;text-decoration: line-through;">'
        }
        this.lDiv='';
        this.index=0;
        this.isStarted = false;
        this.correct = 0
        this.totalWord = 0
        this.accuracy = 0
        this.totalLetter = 0
    }

    componentDidUpdate(prevProps, prevState) {
        this._input.focus();
    }


    CountDown() {
    	this.isStarted = true;
    	if (this.state.sec === 0) {
            // this.InitializeStates();
		}
		else {
            this.setState({sec: this.state.sec-1});
        	setTimeout(() => {
            this.CountDown()
        	}, 1000);
    	}
    }

    refreshPage () {
        window.location.reload();
    }

    returnRandomInt = (min=0, max=sample.length) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    async InitializeStates() {
        this.state.isStarted = false;
        this.setState((_state) => {
            return {
                givenWord: '',
                charMin: 0,
                sec: 20,
            }
        });
        this.correct=0;
        this.accuracy=0;
        this.totalLetter=0;
        // this.refreshPage();
    }


    handleChange = (e) => {

        if (!this.isStarted) this.CountDown();

        var tmp=e.target.value, display='';

        if(getLastInputChar(tmp) === " ") {
            tmp = tmp.substr(0, tmp.length - 1);
            if(tmp.length >= 1)
                this.totalWord++;
                if(tmp === this.state.givenWord) {
                    this.correct += 1
                    this.totalLetter += tmp.length;
                    display = this.style.green;
                } else {
                    this.wrong += 1
                    display = this.style.red;
                }
                //index of substr to erase from rDiv
                this.index += this.state.givenWord.length+1;

                //if the text is in the end
                if(this.i === this.givenArray.length-1) {
                    this.i=-1; this.index=0;
                }

                this.setState((state) => {
                    return {
                        givenWord: this.givenArray[++this.i]
                    }
                });
                this.lDiv += '\xa0' + display  + tmp + this.style.end;

                document.getElementById('leftWord').innerHTML = this.lDiv;
			    document.getElementById('rightWord').innerHTML = this.givenText.substr(this.index, this.givenText.length);
                document.getElementById("in").value='';

                if (this.totalWord) {
                    this.accuracy = Math.floor(this.correct/this.totalWord*100);
                }
        } else {
            //while writing
            if(isSameString(this.state.givenWord, tmp))
                display = this.style.green;
            else
                display = this.style.red;

            display += tmp + this.style.end;


            var k=0;

            while(k < tmp.length && k < this.state.givenWord.length && this.state.givenWord[k] === tmp[k])
                k++;
                document.getElementById('leftWord').innerHTML = this.lDiv + '\xa0' + display;
                document.getElementById('rightWord').innerHTML = this.givenText.substr(this.index + k, this.givenText.length);
        }
    }


    render() {
        return (
            <Container fluid>
                <Row id="upper-part" className="justify-content-md-center">
                    <Header data={{sec:this.state.sec, accuracy: this.accuracy, correct: this.correct, totalLetter: this.totalLetter}}/>
                    <Row className="text-cont">
                        <Col className="text-right text-stream" id="leftWord"></Col>
                        <Col className={this.state.focused ? "focused": ""} id="right-col">
                            <input type="text" id="in" onChange={(e) => {this.handleChange(e)}} autoFocus ref={c => (this._input = c)}></input>
                            <div id="rightWord" className="text-stream" >{this.givenText}</div>
                        </Col>
                    </Row>
                    <PopUp data={{correct: this.correct, accuracy: this.accuracy, visible: this.state.sec===0}}/>
                </Row>
                <Row id="lower-part" className="justify-content-md-center">
                    <Adv />
                </Row>
                <Footer />
            </Container>
        );
    }
}

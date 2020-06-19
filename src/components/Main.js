import React, {} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Header from './Header';
import Adv from '../components/Adv';
import './Layout.css';


// check equality between input and givenWord while writing
function handleCheck (_s1, _s2) {
    for(var i = 0; i < _s2.length; ++i) {
        if(_s1[i] !==_s2[i]) return false;
    }
    return true;
}


export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            givenWord: '',
            charMin: 0,
            sec: 60,
        }
        this.givenText = "search the worlds information, including webpages, images, videos and more. Google has many special features to help you find exactly what youre looking";
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
        this.wrong = 0
        this.totalWord = 0
        this.accuracy = 0
        this.totalLetter = 0
    }

    componentDidUpdate(prevProps, prevState) {
        this._input.focus();
    }

    CountDown() {
    	this.isStarted = true;   
    	console.log(this.state.sec + " seconds left");
    	if (this.state.sec === 0) {
            console.log("over")
		} 
		else {
            this.setState({sec: this.state.sec-1});
        	setTimeout(() => {
            this.CountDown()
        	}, 1000);
    	}   
    }
      
    handleChange = (e) => {
        if (!this.isStarted) this.CountDown();
        var tmp=e.target.value, now='';

        if(tmp.charAt(tmp.length-1) === " ") {
            //if wrote a word
            tmp = tmp.substr(0, tmp.length - 1);
            if (tmp.length >= 1) this.totalWord++;
                if(tmp === this.state.givenWord) {
                    this.correct += 1
                    this.totalLetter += tmp.length;
                    now = this.style.green;
                } else {
                    this.wrong += 1
                    now = this.style.red;
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
                this.lDiv += '\xa0' + now  + tmp + this.style.end;
                document.getElementById('leftWord').innerHTML = this.lDiv;
			    document.getElementById('rightWord').innerHTML = this.givenText.substr(this.index, this.givenText.length);
                document.getElementById("in").value='';
                if (this.totalWord) {
                    this.accuracy = Math.floor(this.correct/this.totalWord*100);
                }
        } else {
            //while writing
            if(handleCheck(this.state.givenWord, tmp)) 
                now = this.style.green;
            else 
                now = this.style.red;
            
            now += tmp + this.style.end;
            var k=0;
            while(k < tmp.length && k < this.state.givenWord.length && this.state.givenWord[k] === tmp[k]) 
                k++;
                document.getElementById('leftWord').innerHTML = this.lDiv + '\xa0' + now;
                document.getElementById('rightWord').innerHTML = this.givenText.substr(this.index + k, this.givenText.length);
        }
    }


    render() {
        console.log('render');
        return (
            <Container fluid>
                <Header data={{sec:this.state.sec, accuracy: this.accuracy, correct: this.correct, totalLetter: this.totalLetter}}/>
                <Row id="mid-row">
                    <Col className="text-right" id="leftWord">|
                    </Col>
                    <Col className={this.state.focused ? "focused": ""} id="right-col">
                        <input type="text" id="in" onChange={(e) => {this.handleChange(e)}} autoFocus ref={c => (this._input = c)}></input>
                        <div id="rightWord" >{this.givenText}</div>
                    </Col>
                </Row>
                <Adv/>
            </Container>
        );
    }
}

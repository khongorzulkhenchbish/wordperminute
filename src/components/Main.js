import React, {} from 'react';
import { Col, Row } from 'react-bootstrap';


// check equality between input and givenWord while writing
function handleCheck (_s1, _s2) {
    for(var i = 0; i < _s2.length; ++i) {
        if(_s1[i] !==_s2[i]) return false;
    }
    return true;
}


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            givenWord: '',
            correct: 0,
            wrong: 0,
            wordCnt: 0,
            charMin: 0,
        }
        this.givenText = "apple is the best fruit in the world";
        this.givenArray=[];
        this.givenArray=this.givenText.trim().split(" ");
        this.state.givenWord=this.givenArray[0];
        this.i=0;
        this.style = {
            end:'</span>',
            green:'<span style="color: green;text-decoration: none;">',
            red:'<span style="color: red;text-decoration: line-through;">'
        }
        this.lDiv='';
        this.index=0;
        this.isStarted = false;
        this.sc = 1;
    }

    CountDown() {
    	this.isStarted = true;   
    		console.log(this.sc);
    	if (this.sc === 0) {
		} 
		else {
        	this.sc--;
        	setTimeout(() => {
            this.CountDown()
        	}, 1000);
    	}   
    }
      
    handleChange = (e) => {
        if (!this.isStarted) this.CountDown();
        // this.state.charMin++;
        var tmp=e.target.value, now='';

        if(tmp.charAt(tmp.length-1) === " ") {
            //if wrote a word
            tmp = tmp.substr(0, tmp.length - 1);
            // if (tmp.length > 1) this.state.wordCnt++;
                if(tmp === this.state.givenWord) {
                    // if input is exactly right
                    this.setState((state) => {
                        return {
                            correct: state.correct+1
                        }
                    });
                    now = this.style.green;
                } else {
                    // if input is exactly wrong
                    this.setState((state) => {              
                        return {
                            wrong: state.wrong+1  
                        }    
                    });
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
        } else {
            // this.state.wordCnt++;
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
        <Row>
            <Col className="text-right" id="leftWord">
            </Col>
            <Col >
                <input type="text" id="in"  onChange={(e) => {this.handleChange(e)}} autoFocus ></input>
            </Col>
            <Col className="text-left" id="rightWord">{this.givenText}
            </Col>
        </Row>
        );
    }
}

export default Main;
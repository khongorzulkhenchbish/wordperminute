var index = 0, wordCnt = 0, charCnt = 0, correctWord = 0;
var lDiv = {
	text:'',
	style:'',
	word:'',
	end:'</b>'
};

var rDiv = {
	text:'',
	style:'',
	word:'',
	end:'</b>'
};

var wrong = '<b style="color:green; text-decoration-line: line-through">', yep = '<b style="color:green; text-decoration-line: none">', end = '</b>';

var time = 60, isStarted = 0;

// function onTimer() {
// 	document.getElementById('second').innerHTML = time;
// 	if(time == 0) {
// 		isStarted = 0;
// 		charCnt = 0; wordCnt = 0; accuracy = 0, correctWord = 0;
// 		time = 60;
// 		document.getElementById('second').innerHTML = time;
// 	} else {
// 		time--;
// 		setTimeout(onTimer, 1000);
// 	}
// }

var text = "Өөрөө хаана байдаг вэ";

function string_to_array (text) {
	return text.trim().split(" ");
};

var arr = {};
arr = new Array() ;
arr = string_to_array(text);
var count = 0;

function getWord() {
	if(count == arr.length) count = 0, index = 0;
	return arr[count++];
}

rDiv.text = text;
rDiv.word = getWord();
document.getElementById('rightWord').innerHTML = rDiv.text;

var lIndex = 0;

function TEST() {
	var accuracy;
	if(wordCnt == 0) accuracy = 0;
	else accuracy = Math.floor(correctWord*100/wordCnt);
	var charMin = Math.floor(60*charCnt/(60-time));
	var wordMin = Math.floor(60*wordCnt/(60-time));
	document.getElementById("accuracy").innerHTML = accuracy;
	document.getElementById("charMin").innerHTML = charMin;
	document.getElementById("wordMin").innerHTML = wordMin;
}

function solve() {
	if(!isStarted) onTimer(), isStarted = 1;
	var inputV = document.getElementById('in').value;
	var l = inputV.length;
	if(inputV[l-1] == ' ') {
		var word = inputV.substr(0, l-1), now = '';
		if(word.length > 1) {
			wordCnt++;
			if(word == rDiv.word) now = yep + word + end, correctWord++;
			else now = wrong + word + end;
			lDiv.text += '\xa0' + now;
			document.getElementById('leftWord').innerHTML = lDiv.text;
			
			index += rDiv.word.length+1;
			rDiv.word = getWord();
			document.getElementById('rightWord').innerHTML = rDiv.text.substr(index, rDiv.text.length);
		}
		document.getElementById('in').value = '';
	} else {
		charCnt++;
		var word = inputV, now = '';
		
		if(word == rDiv.word.substr(0, l)) now = yep + word + end;
		else now = wrong + word + end;

		var i = 0;
		while(i < word.length && i < rDiv.word.length && rDiv.word[i] == word[i]) i++;

		document.getElementById('leftWord').innerHTML = lDiv.text + '\xa0' + now;
		document.getElementById('rightWord').innerHTML = rDiv.text.substr(index + i, rDiv.text.length);
	}
	TEST();
};

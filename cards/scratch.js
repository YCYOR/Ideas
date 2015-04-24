var row  = foo => {
	if			(foo >= 0  && foo <=6)  return 1;
	else if (foo >= 7  && foo <=13) return 2;
	else if (foo >= 14 && foo <=20) return 3;
	else if (foo >= 21 && foo <=27) return 4;
	else if (foo >= 28 && foo <=34) return 5;
	else if (foo >= 35 && foo <=41) return 6;
	else if (foo >= 42 && foo <=48) return 7;
	else														return 8;
}
var col = inFoo => {
	var foo = inFoo < 49 ? inFoo : inFoo + 2;
	return foo % 7 + 1
}
var ft = () => {var arr = [];for (var i = 0;i<52;i++){arr.push(i)} ;return arr;}
var ft2 = () => {var arr = [];for (var i = 1;i<=52;i++){arr.push(i)} ;return arr;}
var rc = foo => `row: row(foo), col: col(foo)` 
var rc2 = foo => {return {row: row(foo), col: col(foo)}}

var cn = foo => {
	var row = foo.row - 1;
	var col = foo.row < 8 ? foo.col -1 : foo.col - 3;
	return row * 7 + col;
}
var solarNumber = (month,day) => 55 - (2 * month + day)

var cards = {0:'Joker',1:'AH',14:'AC',33:'7D'}
var cm = new Map();
cm.set(1,'AH');
cm.set(14,'AC');
cm.set(33,'7D');

// what do i need to know about a deck?
//   what card is at what position -- does this mean what r/c?
//   e.g. 
//     what is the position of the 'AC' -- same as Solar# 14
//     what card is at row:1, col:2
//     once a deck is spread, do i need two arrays,
//       one keyed by position (r/c?) and
//       one keyed by card (or just card #)
//
var cardsArr = [{1:'AH'},{14:'AC'},{33:'7D'}]
// this has a certain simplicity and is not fragile if "dealing" always creates new decks
// or is this better: 
const sd = ft2();
var hs=[],cs=[],ds=[],ss=[];
var deal3 = deck => {
	hs=[];cs=[];ds=[];ss=[];
	for (var i3 = 0; i3 < 48; i3=i3+12) {
		hs.push(deck.slice(i3,i3+3).reverse());
		cs.push(deck.slice(i3+3,i3+6).reverse());
		ds.push(deck.slice(i3+6,i3+9).reverse());
		ss.push(deck.slice(i3+9,i3+12).reverse());
	}
	hs.push(deck.slice(48,49));
	cs.push(deck.slice(49,50));
	ds.push(deck.slice(50,51));
	ss.push(deck.slice(51));
}
var deal1 = deck => {
	hs=[];cs=[];ds=[];ss=[];
	for (var i1 = 0; i1 < 51; i1=i1+4) {
		hs.push(deck.slice(i1,i1+1));
		cs.push(deck.slice(i1+1,i1+2));
		ds.push(deck.slice(i1+2,i1+3));
		ss.push(deck.slice(i1+3,i1+4));
	}
}
var rf = (a,b) => a.concat(b);
var quadrate = (deck) => {
	var d3, newDeck;
	hs=[];cs=[];ds=[];ss=[];
	deal3(deck);
	nhs = hs.reduce(rf).reverse();
	ncs = cs.reduce(rf).reverse();
	nds = ds.reduce(rf).reverse();
	nss = ss.reduce(rf).reverse();
	hs=[];cs=[];ds=[];ss=[];
	d3=nss.concat(nds,ncs,nhs);
	deal1(d3);
	nhs = hs.reduce(rf).reverse();
	ncs = cs.reduce(rf).reverse();
	nds = ds.reduce(rf).reverse();
	nss = ss.reduce(rf).reverse();
	newDeck=nss.concat(nds,ncs,nhs);
}

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
var cardsArr = [ {0:'Joker'},
								 {1:'AH'}, {2:'2H'}, {3:'3H'}, {4:'4H'}, {5:'5H'}, {6:'6H'}, {7:'7H'}, {8:'8H'}, {9:'9H'},{10:'10H'},{11:'JH'},{12:'QH'},{13:'KH'},
								{14:'AC'},{15:'2C'},{16:'3C'},{17:'4C'},{18:'5C'},{19:'6C'},{20:'7C'},{21:'8C'},{22:'9C'},{23:'10C'},{24:'JC'},{25:'QC'},{26:'KC'},
								{27:'AH'},{28:'2H'},{29:'3H'},{30:'4H'},{31:'5H'},{32:'6H'},{33:'7H'},{34:'8H'},{35:'9H'},{36:'10D'},{37:'JD'},{38:'QD'},{39:'KD'},
								{40:'AS'},{41:'2S'},{42:'3S'},{43:'4S'},{44:'5S'},{45:'6S'},{46:'7S'},{47:'8S'},{48:'9S'},{49:'10S'},{50:'JS'},{51:'QS'},{52:'KS'}];

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
	return newDeck;
}
var age = bd => {
	var td = new (Date);
	// 86400000 = milliseconds/day
	// 365.25 = days/year
	// td - bd = today - birthday
	Math.floor(((td - bd) / 86400000) / 365.25);
	// age = # of quadrations for current age spread
	// long range cards (0-6, 7-13, 14-20, 21-27, 28-34, 35-41, 42-48, 49-55, 56-62, 63-69, 70-76, 77-83)
	// these are quadrations 1, 2 ,3 ,4 ,5 ,6, 7, 8, 9, 10, 11, 12 (first quadaration = age 0)
	// age / 7 = age for LR spread
	// LR card in LR spread = Sun Card position + age % 7 + 1
	// 7 period cards in the yearly spread (current age spread) begin @Sun Card Position + 1
	// for the vertical cards, start position is Sun Card Position - 7 + 52 - 3
	//   for cards under crown row its: Sun Card Position - 7 + 52 + 3 + 1
	//   where 7 -> 14 -> 21 ...
}
// for displacement cards:
//   row/col in Mundance Spread -> row/col Natural Spread
//   row/col of Sun Card in Natural Spread -> row/col Mundance Spread
//   e.g. QC in Mundane Spread is row:1/col:3 -> in Natural Spread that is 3H <- card QC gives to
//        QC in Natural Spread is row:4/col:4 -> in Mundane Spread that is 10D <- card QC receives from
// the Planet overlays: Me = Sun Card Postion + 1
//                      Ve = Sun Card Postion + 2
//                      Ma = .. + 3
//                      Ju = .. + 4
//                      Sa = .. + 5
//                      SN = .. + 6
//                      NN = .. + 7
//          Challenge Card = .. + 8
//          Result Card    = .. + 9
//  vertically, only go to 6 or 7
//
// Daily card calculation:
//   weeks-from-birth % 90 = spread for the week, begins on day of week of birth, e.g. Tues for me
//   
// For LR Card
//   Need: Age and SunCard#
//   1) find LR Spread
//      age / 7 = age for LR Spread
//   2) get SunCardPosition in LR Spread
//      Deck (quadrature of age /7)
//      SunCardPosition = Deck.indexOf(SunCard#)
//   3) LR Card = (SunCardPosition + Age) % 7 + 1
//
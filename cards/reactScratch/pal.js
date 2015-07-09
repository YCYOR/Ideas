//> hm='1111';if (hm[1]===hm[2] && hm[0]===hm[3]) `palindrome: ${hm}`
//'palindrome: 1111'
//> for (let i = 0;i<24;i++) i
//23
//> for (let i = 0;i<24;i++) `${i}`
//'23'
export let pal = inStr => {
  let hm = inStr;
  let rv = false;
  if (hm.length === 4 && hm.match(/\d{4}/)) {
    if (hm[1]===hm[2] && hm[0]===hm[3]) {
      rv = true;
    }
  }
  return rv;
}
export let p0 = n => {
  let rv = '';
  if (typeof n === "number" && n < 10) {
    rv=`0${n}`;
  } else {
    rv=`${n}`;
  }
  return rv;
}

//let i=0,m=0;
//while (i<14) {
  //while (m<20) {
    //console.log( `${ p0(i) }${p0(m)}`) ;
    //m++;
  //}
  //m = 0;
  //i++
//}

if (require.main === module) {
  console.log(require.main)

  for (let h=0;h<24;h++) {
    for (let m=0;m<60;m++) {
      let hm = `${p0(h)}${p0(m)}` 
      let p = pal(hm); 
      if (p) {
        console.log(`palindrome: ${hm}`);
      }
    }
  }
}
// change pal to be a boolean
// write a function that accepts or uses the h:m from now
// and let the console.log decide how to display
//palindrome: 0000
//palindrome: 0110
//palindrome: 0220
//palindrome: 0330
//palindrome: 0440
//palindrome: 0550
//palindrome: 1001
//palindrome: 1111
//palindrome: 1221
//palindrome: 1331
//palindrome: 1441
//palindrome: 1551
//palindrome: 2002
//palindrome: 2112
//palindrome: 2222
//palindrome: 2332


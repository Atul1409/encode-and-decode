var letters_code =
 "abcdefghijklmnopqrstuvwxyzabcdefghi";
var letters_decode =
 "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopq";
var a = "";

function reverse(str) {
 var news = "";
 for (var i = str.length - 1; i >=
  0; i--) {
  news += str[i];
 }
 return news;
}



function encode() {
 text = document.getElementById(
  "input").value;
 text = text.toLowerCase();
 var i = null;
 for (i of text) {

  x = letters_code.indexOf(i) + 9;
  if (letters_code.indexOf(i) < 0) {
   a += i;
  } else {
   a += letters_code[x];
  }

 }
 a = reverse(a);
 document.getElementById('display')
  .innerHTML = a;
 a = "";
}

function decode() {
 text = document.getElementById(
  'display').value;
 text = text.toLowerCase();
 var i = null;
 for (i of text) {

  x = letters_decode.indexOf(i) + 17;

  if (letters_decode.indexOf(i) <
   0) {
   a += i;
  } else {
   a += letters_decode[x];
  }
 }
 a = reverse(a);
 document.getElementById('display')
  .innerHTML = a;
 a = "";

}

function reset() {
 document.getElementById('display')
  .innerHTML = "";
 document.getElementById('input')
  .value = "";
 a = "";
}

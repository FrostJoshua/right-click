
let fullCode = "#ff8040#800040#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffffbaaaaaaaaabbaaabaaaaaaaaaaabbaaaaaaaaaaaaaaabbaaaabababababaabbaaabababababaabbaaaaaaaaaaaaabbaaaaaaaaaaaaabbaaaaaaaaaaaaabbaaaaaaaaaaaaaaaaaaaaaabaababaaaabaaaabababaaaababbaaabaaabababaabaaaabababababaabbaaaabaababaabababaaaaaaaaaaaaaaaaabaabbbbbbbbbbaab";




var toAdd = document.createDocumentFragment();



const pArray = fullCode.split("");
var prevcolor1 = pArray.slice(0, 7).join("");
var prevcolor2 = pArray.slice(7, 14).join("");
var prevcolor3 = pArray.slice(14, 21).join("");
var prevcolor4 = pArray.slice(21, 28).join("");
var prevcolor5 = pArray.slice(28, 35).join("");
var prevcolor6 = pArray.slice(35, 42).join("");
var prevcolor7 = pArray.slice(42, 49).join("");
var prevcolor8 = pArray.slice(49, 56).join("");
var prevcolor9 = pArray.slice(56, 63).join("");
var prevcolor10 = pArray.slice(63, 70).join("");
var prevcolor11 = pArray.slice(70, 77).join("");
var prevcolor12 = pArray.slice(77, 84).join("");
var prevcolor13 = pArray.slice(84, 91).join("");
var prevcolor14 = pArray.slice(91, 98).join("");
var prevcolor15 = pArray.slice(98, 105).join("");
var prevcolor16 = pArray.slice(105, 112).join("");

for(var i=0; i < 256; i++){
   var newDiv = document.createElement('div');
   cid = i+112;
  // alert(cid);
   scid = fullCode.charAt(cid)
  // alert(scid);
   if (scid == "a"){pixcolor = prevcolor1;}
      if (scid == "b"){pixcolor = prevcolor2;}
         if (scid == "c"){pixcolor = prevcolor3;}
            if (scid == "d"){pixcolor = prevcolor4;}
               if (scid == "e"){pixcolor = prevcolor5;}
         if (scid == "f"){pixcolor = prevcolor6;}
            if (scid == "g"){pixcolor = prevcolor7;}
   if (scid == "h"){pixcolor = prevcolor8;}
      if (scid == "i"){pixcolor = prevcolor9;}
      if (scid == "j"){pixcolor = prevcolor10;}
      if (scid == "k"){pixcolor = prevcolor11;}
      if (scid == "l"){pixcolor = prevcolor12;}
      if (scid == "m"){pixcolor = prevcolor13;}
      if (scid == "n"){pixcolor = prevcolor14;}
      if (scid == "o"){pixcolor = prevcolor15;}
      if (scid == "p"){pixcolor = prevcolor16;}
            if (scid == "0"){pixcolor = "#ffffff";}

   newDiv.id = 'p'+i;
   newDiv.className = 'square';
   newDiv.style.background = pixcolor;
   toAdd.appendChild(newDiv);

  newPic = "smallcontainer";

document.getElementById(newPic).appendChild(toAdd);
};

function myhref(web){
  window.location.href = web;}

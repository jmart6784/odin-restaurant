!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let d=()=>{let e=document.getElementById("content");document.getElementById("home").style.backgroundColor="rgb(39, 39, 39)",document.getElementById("about").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("menu").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("contact").style.backgroundColor="rgb(99, 53, 0)",e.innerHTML="";let t=document.createElement("h1"),n=document.createTextNode("Odin Restaurant");t.className="title",t.appendChild(n),e.appendChild(t);let d=document.createElement("img");d.src="images/img1.jpg",d.id="img1",e.appendChild(d);let a=document.createElement("h4"),o=document.createTextNode("Come eat at Odin's, it's the best fake Restaurant on the internet!");a.className="description",a.appendChild(o),e.appendChild(a)};document.getElementById("home").addEventListener("click",d);var a=d;var o=document.getElementById("about").addEventListener("click",(function(){let e=document.getElementById("content");document.getElementById("about").style.backgroundColor="rgb(39, 39, 39)",document.getElementById("home").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("menu").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("contact").style.backgroundColor="rgb(99, 53, 0)",e.innerHTML="";let t=document.createElement("h1"),n=document.createTextNode("About");t.className="title",t.appendChild(n),e.appendChild(t);let d=document.createElement("h4"),a=document.createTextNode("Odin's Restaurant is the best place to eat out with friends. Make a reservation today.");d.className="description",d.appendChild(a),e.appendChild(d)}));var l=document.getElementById("menu").addEventListener("click",(function(){let e=document.getElementById("content");document.getElementById("menu").style.backgroundColor="rgb(39, 39, 39)",document.getElementById("home").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("about").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("contact").style.backgroundColor="rgb(99, 53, 0)",e.innerHTML="";let t=document.createElement("h1"),n=document.createTextNode("Menu");t.className="title",t.appendChild(n),e.appendChild(t);let d=document.createElement("div");d.id="grid-div",e.appendChild(d);let a=document.createElement("div");a.className="category-div",d.appendChild(a);let o=document.createElement("h2"),l=document.createTextNode("Lunch");o.className="menu-category",o.appendChild(l),a.appendChild(o);let c=document.createElement("h2"),m=document.createTextNode("Gourmet Italian Pizza: $24.99");c.className="menu-item",c.appendChild(m),a.appendChild(c);let r=document.createElement("h2"),u=document.createTextNode("Classic Cheese Burger: $4.99");r.className="menu-item",r.appendChild(u),a.appendChild(r);let i=document.createElement("h2"),p=document.createTextNode("Chili Cheese hot dog: $3.99");i.className="menu-item",i.appendChild(p),a.appendChild(i);let s=document.createElement("div");s.className="category-div",d.appendChild(s);let h=document.createElement("h2"),g=document.createTextNode("Dinner");h.className="menu-category",h.appendChild(g),s.appendChild(h);let C=document.createElement("h2"),y=document.createTextNode("Steak and potatoes: $17.99");C.className="menu-item",C.appendChild(y),s.appendChild(C);let E=document.createElement("h2"),b=document.createTextNode("Chicken pot pie: $9.99");E.className="menu-item",E.appendChild(b),s.appendChild(E);let N=document.createElement("h2"),f=document.createTextNode("Lasagna: $7.99");N.className="menu-item",N.appendChild(f),s.appendChild(N)}));var c=document.getElementById("contact").addEventListener("click",(function(){let e=document.getElementById("content");document.getElementById("contact").style.backgroundColor="rgb(39, 39, 39)",document.getElementById("home").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("menu").style.backgroundColor="rgb(99, 53, 0)",document.getElementById("about").style.backgroundColor="rgb(99, 53, 0)",e.innerHTML="";let t=document.createElement("div");t.id="grid-div",t.className="contact-grid",e.appendChild(t);let n=document.createElement("div");n.className="category-div",t.appendChild(n);let d=document.createElement("h1"),a=document.createTextNode("Contact");d.className="menu-category",d.appendChild(a),n.appendChild(d);let o=document.createElement("h4"),l=document.createTextNode("Phone: (123)-456-7890");o.className="menu-item",o.appendChild(l),n.appendChild(o);let c=document.createElement("h4"),m=document.createTextNode("Address: 123 Null St, Faketown, FA");c.className="menu-item",c.appendChild(m),n.appendChild(c);let r=document.createElement("h4"),u=document.createTextNode("Email: example@mail.com");r.className="menu-item",r.appendChild(u),n.appendChild(r);let i=document.createElement("div");i.className="category-div",t.appendChild(i);let p=document.createElement("h1"),s=document.createTextNode("Buisness Hours");p.className="menu-category",p.appendChild(s),i.appendChild(p);let h=document.createElement("h4"),g=document.createTextNode("Mon-Thu 10AM-10PM");h.className="menu-item",h.appendChild(g),i.appendChild(h);let C=document.createElement("h4"),y=document.createTextNode("Fri-Sun 7AM-11PM");C.className="menu-item",C.appendChild(y),i.appendChild(C);let E=document.createElement("h4"),b=document.createTextNode("Restaurant closed on holidays");E.className="menu-item",E.appendChild(b),i.appendChild(E)}));a(),o(),l(),c()}]);
import{s as i,j as x,L as u,r as d,B as k,R as S,a as f,b as R,c as E}from"./vendor.7059da55.js";const I=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}};I();const A=i.div`
display: flex;
flex-direction: column;
justify-content: space-between;
transition: 200ms ease ;
background-color: ${t=>t.colour};
margin-left: ${t=>t.show?"10rem":"5rem"};
padding: 1rem;
button{
    z-index: 2;
    margin-top: auto;
    width: 100px;
    height: 50px;
    align-self: right;
}
@media (max-width: 912px) {
    margin-left: 0;
  }
`,B=i.div`
display: flex;
flex-direction: column;
justify-content: space-between;
transition: 200ms ease ;
background-color: ${t=>t.colour};
margin-left: ${t=>t.show?"10rem":"5rem"};
align-items: center;
text-align: center;
@media (max-width: 912px) {
    margin-left: 0;
  }

a{
  text-decoration: none;
  color: black;
  font-style: bold;
  font-size: 1.3rem;
  :hover{
    font-size: 1.35rem;
  }
}

.link-div{
  margin-top: 5vh;
  line-height: 10vh;
  background-color: rgba(0, 255, 255, 0.4);
}
`,L=i.main`
  display: flex;
  padding: 1rem;
  img {
    width: 50vw;
    height: 50vh;
    flex: 1;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%) ;
    @media (max-width: 912px) {
      display: none;
    }
  }
`,D=i.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  h3 {
    text-align: center;
    background-color: darkslategray;

    @media (min-width: 912px) {
      margin-right: 2.5vw;
    }
  }
  color: whitesmoke;
`,F=i.main`
  background-color: rgb(112, 128, 144, 0.8);
  padding: 2.5vw;
  color: whitesmoke;
  a {
    text-decoration: none;
  }
`,z=i.nav`
  cursor: pointer;
  z-index: 1;
  width: ${t=>t.show?"10rem":"5rem"};
  height: 100vh;
  position: fixed;
  background-color: #464F59;
  transition: width 200ms ease;
  opacity: ${t=>t.show?"1":"0.75"};
  img{
    transform: ${t=>t.show?"rotate(180deg)":"rotate(0deg)"}
  }

  @media (max-width: 912px) {
    opacity: ${t=>t.show?"1":"0.4"};
    background-color: ${t=>t.show?"#464F59":"rgba(0,0,0,0)"};
    width: ${t=>t.show?"100vw":"5rem"};;
  }
`,N=i.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`,w=i.li`
  display: ${t=>t.display};
  margin-top: 1vh;
  margin-bottom: 2vh;
  justify-content: center;
  width: 100%;
  :hover{
    background-color: #778899;
  }
  :last-child {
    margin-top: auto;
    margin-bottom: 5vh;
  }
  a {
    color: white;

    height: 5rem;
    text-decoration: none;
    font-size: 1.4rem;;
    :hover{
        font-size: 1.6rem;
    }
  }
`;var T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABsElEQVR4nO3avUodQRjG8R8mYhcwkQheQwSRJE0uQ9IEv6pch6VtylxJYiCgja19SBEUcgEhKjYei8PC4ZzdIx7Pzuw67x+mmx2e92Hn2dmZIQiCIAiCIAiCIC8HeJFbRE7O8AtvcgvJxRkG+IetzFqyUBkwwC0O8SyrosSMGlC173iZU1RK6gwY4DfWM+pKRpMBA1xjN5+0NEwzoGpf8TyXwLYZN+BYvQlHnmgujBuwgc+4MWnCOd7mkdkedQbAB/xVnwt76WW2R5MBsIZTzbmw2Iag+wKp7TZqAMPwO2zoe4LXc60+U9HTDKjYwVVN/3O8m0/pQ7pqAGziT80z19h/fOlDumwArOBnw7NzyYXxQbvIfbmw+pjB+2BAxSdcmtR8gfezDtonA2jOhStszzJg3wyAV/jhAbmwkFJd3+jbG1D0FJgWgjMvjvpgQNLPYPELoS4ZUPRSuNifoSV8aeh7rIXf4dR0bkMkNbNsiT2prfLYFDU5r+te+WK2xZvmezEHI6PtPz7mk5aGOBw1Wfw3LOcUlZK4IGFYfNFXZIq+JFX8NbkgCIIgCIIgCNJxBywmHwRmTqXyAAAAAElFTkSuQmCC";const e=x.exports.jsx,o=x.exports.jsxs,h=x.exports.Fragment;function v({show:t,setShow:n}){return e(h,{children:e(z,{onClick:()=>n(!t),show:t,children:o(N,{children:[e("img",{src:T}),t?o(h,{children:[e(w,{children:e(u,{to:"/",children:"Home"})}),e(w,{children:e(u,{to:"/experience",children:"Previous Experience"})}),e(w,{children:e(u,{to:"/demonstration",children:"Code examples"})}),e(w,{children:e(u,{to:"/contact_info",children:"Contact Information"})})," "]}):null]})})})}var J="/assets/homeimage.409edbee.png";const M=i.div`
    margin-top: -5rem;
    margin-right: -1rem;
    margin-left: -1rem;
    flex: 1;
    padding-top: 45vh;
    padding-bottom:45vh;
    text-align: center;
    background-image: url(${J});
    background-size:cover;
    overflow: hidden;

    h1{
        font-size: 6vw;
        color: white;
    }
    p{  color: white;
        font-size: 1.5vw;
        font-weight: 900;
    }
`;function j({gloss:t,setGloss:n}){return o(M,{children:[e("h1",{children:"Ashley Shaw"}),t?o(h,{children:[e("p",{children:"Welcome to my portfolio"})," "]}):e(h,{children:e("p",{children:"How do!"})})]})}var C="/assets/Me.e84dd877.png",G="/assets/Glosme.d41c258b.png",y="/assets/reviewarrow.aecc7865.svg";const Q=i.div`
display: flex;
width: 80vw;
border-top: 5px solid darkslategray;
padding-top: 5vh;
h3{ 
    flex: 2;
    text-align: center;
    margin-right: 1vw;
    font-size: 2vw;
    color: whitesmoke;
    @media (max-width: 912px){
      flex: 0;
    }
}
@media (max-width: 912px) {
    width: 80vw;
    h3{
        font-size: 4vw;
    }
  }
`,H=i.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex: 2;
margin-left: auto;
`,U=i.img`
position: absolute;
top: 50%;
right: -0.01vw;
height: 4vh;
width: 4vw;
cursor: pointer;
transition: 100ms ease;
:hover{
  height: 4.25vh;
  width: 4.25vw;
}
`,P=i.img`
position: absolute;
top: 50%;
height: 4vh;
width: 4vw;
left: 0.01vw;
cursor: pointer;
transform: rotate(180deg);
transition: 100ms ease;
:hover{
  height: 4.25vh;
  width: 4.25vw;
}
`,W=i.div`
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.7);
height: 20vh;
width: 100%;
padding:2vw 5vw;
text-align: center;
`,Y=i.p`
font-style: italic;
margin-top: auto;
`,O=i.p`
font-size: 1.25rem;
@media (max-width: 912px){
      font-size: 1rem;
    }
`,V=i.p`

`;function Z(){const[t,n]=d.exports.useState(0);function r(){return n(t===p.length-1?0:t+1)}function s(){return n(t===0?p.length-1:t-1)}return o(Q,{children:[e("h3",{children:" Reviews: "}),o(H,{children:[e(P,{src:y,onClick:s}),e(U,{src:y,onClick:r}),e(K,{text:p[t].text,name:p[t].name,stars:p[t].stars})]})]})}const p=[{text:"Hands down my second favourite son",name:"- My Mum (mother of two)",stars:5},{text:"Oooo he's a good lad",name:"- Grandma Anne",stars:5},{text:"Will you leave me alone while I do my ironing",name:"- Warren Perkins.esq",stars:3},{text:"This is who I meant would never give you up or let you down",name:"- Rick Astley (No relation)",stars:5},{text:"Beer on the table,<br/> Ashley speaks using his hands,<br/> the beer falls",name:"- Scouse Dan",stars:3},{text:"Designs better websites than me",name:"- Conor Jones (Designed 0 Websites)",stars:4}],K=({text:t,name:n,stars:r})=>o(W,{children:[e(O,{dangerouslySetInnerHTML:{__html:t}}),e(Y,{children:n}),e(V,{children:q(r)})]});function q(t){let n="";for(let r=0;r<t;r++)n+="\u2B50";return n}function X(){const[t,n]=d.exports.useState(!1),[r,s]=d.exports.useState(!0);return o("div",{children:[e(v,{show:t,setShow:n}),o(A,{show:t,setShow:n,colour:"#8194A6",children:[e("button",{onClick:()=>s(!r),children:r?e("p",{children:"For Glossop Folk"}):e("p",{children:"For English"})}),e(j,{gloss:r,setGloss:s}),o(L,{children:[e(D,{gloss:r,setGloss:s,children:r?o(h,{children:[e("h3",{colour:"white",children:"About me"}),e("br",{}),e("p",{children:"I am a 23 year old aspiring front end software developer from Glossop"}),e("br",{}),e("p",{children:"I pride myself on my good communication skills, organisation and punctuality, being able to work as part of a team or independently. I am an honest and trustworthy individual who has a passion to work hard at all things to the best of my ability and to be reliable when coping under pressure."})]}):o(h,{children:[e("h3",{colour:"white",children:"Ya Reet"}),e("br",{}),e("p",{children:"I am a young fella from God's own back garden who reckons himself half decent with computers and that."}),e("br",{}),e("p",{children:"I reckon I've got a fair gift o't gab, decent at sorting myself out and always turn up when I'm supposed to. I don't talk chuff, am not light-fingered and put in a hard days graft. I can work wi other folk or on me sen and I don't start sweating when't muck hits the fan."})]})}),e("img",{src:r?C:G})]}),e(Z,{})]})]})}const $=i.img`
height: 100vh;
width: 100vw;
position: absolute;
z-index: -1;
opacity: 0.75;
`;function b(t){return e($,{src:t.source})}var _="/assets/experienceimage.28fcb951.png";function ee(){const[t,n]=d.exports.useState(!1);return o("div",{children:[e(b,{source:_}),e(v,{show:t,setShow:n}),e(A,{show:t,children:o(F,{children:[e("h1",{children:"Coding Experience "}),e("p",{children:"Responsive Web Design Certification (HTML and CSS)"}),e("p",{children:"JavaScript Algorithms and Data Structures Certification (Javascript)"}),e("p",{children:o("small",{children:["Certifications can be found ",e("a",{href:"https://www.freecodecamp.org/fcc5c7c9632-98c5-41a5-812b-f8891f70292f",children:"here"})]})}),e("br",{}),e("h1",{children:"Previous Employment"}),e("p",{children:"Barclays Bank - 4PP Manchester (2019-Present)"}),e("p",{children:"William Hill PLC - Glossop (2016-2019)"}),e("p",{children:"J W Mettrick and Son Ltd \u2013 Glossop (2014-2016) "}),e("br",{}),e("h1",{children:"Education"}),e("p",{children:"Glossopdale Sixth Form (September 2014 - June 2016)"}),e("p",{children:"A-levels: B History; C Geography; D Law; Merit Level 3 BTEC IT Certificate."}),e("p",{children:"Glossopdale Community College (September 2009 \u2013 July 2014)"}),e("p",{children:"10 GCSEs, grade A-C, including Maths, English and Science"}),e("br",{}),e("small",{children:"Please see CV for more info"})]})})]})}var te="/assets/demonstrationimage.7888c157.png";const ne=i.div`
margin-top: 5vh;
line-height: 10vh;
background-color: rgba(3, 3, 3, 0.4);
width: 50%;
@media (max-width: 918px){
    width: 90%;
}
`;function ie(){const[t,n]=d.exports.useState("");function r(s){if(s<1||s>3999)return"Please enter a number between 1 - 3999";let a={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},l="";for(let c in a)for(;s>=a[c];)l+=c,s-=a[c];return l}return o(ne,{children:[e("h1",{children:"Roman Numeral Converter"}),e("input",{type:"text",placeholder:"Example: 21 will output XXI",value:t,onChange:s=>n(s.target.value)}),e("p",{children:r(t)})]})}const oe=i.div`
display: flex;
align-items: center;
margin-top: 5vh;
background-color: rgba(100, 0, 100, 0.4);
width: 50vw;
max-width: 50%;
margin-left: auto;
margin-right: auto;
@media (max-width: 918px){
    width: 90%;
}
`,re=i.form`
margin-left: auto;
margin-right: auto;
ul{
    list-style-type: none;
}
`,ae=i.button`
width: 20px;
height: 20px;
background-color: red;
margin-left: auto;
`,se=i.div`
display: flex;
`;function le(){const[t,n]=d.exports.useState(""),[r,s]=d.exports.useState([{description:"Make to do List"}]);function a(c){if(c.preventDefault(),t==="")return null;n("");let m=[{description:t},...r];s(m)}function l(c,m){c.preventDefault();let g=[...r];g.splice(m,1),s(g)}return e(oe,{children:o(re,{children:[e("h1",{children:"To do List"}),e("input",{type:"text",value:t,onChange:c=>n(c.target.value)}),e("button",{onClick:a,children:"AddTask"}),e("ul",{children:r.map((c,m)=>o(se,{children:[e("li",{children:c.description}),e(ae,{onClick:g=>l(g,m),children:"X"})]},m))})]})})}function ce(){const[t,n]=d.exports.useState(!1);return o("div",{children:[e(b,{source:te}),e(v,{show:t,setShow:n}),o(B,{show:t,children:[e(ie,{}),e(le,{}),o("div",{className:"link-div",children:[e("h1",{children:"Websites"}),e("a",{href:"https://codepen.io/ash-shaw/pen/MWELNZG",target:"_blank",children:"Technical documentation page(Codepen)"}),e("br",{}),e("a",{href:"https://codepen.io/ash-shaw/pen/MWEzEjW",target:"_blank",children:"Survey form(Codepen)"}),e("br",{}),e("a",{href:"https://codepen.io/ash-shaw/pen/ExwyPyJ",target:"_blank",children:"Tribute page(Codepen)"}),e("br",{})]})]})]})}var de="/assets/contactimage.4d745422.png";const he=i.main`
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 35vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  background-color: #464f59;
  border-radius: 10px;
  h4 {
    font-size: 3vh;
    letter-spacing: 1.1px;
    color: whitesmoke;
    font-weight: 300;
    text-align: center;
    padding-top: 1.5vh;
  }
  p {
    color: #ab6d00;
    text-align: center;
    font-size: 1.9vh;
  }
`,me=i.img`
  width: 35vh;
  height: 35vh;
  border-radius: 10px 10px 0px 0px;
`,pe=i.a`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  font-weight: 750;
  height: 4vh;
  width: 75%;
  text-align: center;
  color: black;
  font-size: 3vh;
  font-weight: lighter;
  text-decoration: none;
  background-color: white;
  padding-bottom: 1vh;
  cursor: pointer;
  img {
    margin-top: 0.5vh;
    margin-right: 17.5%;
    margin-left: 3%;
    width: 15%;
    height: 3.5vh;
  }

  @media (max-width: 912px) {
    /* width: 100%; */
  }
`,ge=i.div`
  margin-top: 2vh;
  p {
    font-size: 2.5vh;
    line-height: 5.5vh;
    color: whitesmoke;
  }
`,ue=i.footer`
  height: 6vh;
  background-color: #323940;
  margin-top: auto;
  border-radius: 0px 0px 5px 5px;
  text-align: center;

  a {
    margin-top: auto;
    margin-bottom: auto;
    color: whitesmoke;
    font-size: 2vh;
    text-decoration: none;
  }
`;var fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2QAAA9kBvACB0QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAStSURBVHic7dtriFVVFAfw353UasTSMjRCNIsKyx5akX0QEUoo0qAwoTAosA9RRgQZQYRBEApBFESUH8KiEIOiKIyyJxYKPe2DFUpFGD20FHNy8vThnKszd/a+c+7znJzZsOAyd++1////2Xfvtc7aU0mSxEhuPUUDKLqNClA0gKLbqABFAyi6jQpQNICi24gXYEz1Q6VSuQQrcBF6C0PU2XYQm7ExSZJtIIsET8YuJCPA9mF+kiQp9yMfmI4dJQDYSduDK6qcBwmQiTAFn5cAaCfsN8wZyHeIAJkIE/FxCQC303bjggDXyTAz8EUv3ioB8HbYTzgnwHEatsLPEXXGYUMJCLRiO3FmgNtM6aa/V9bxDzWbQ9bxODxbAiLN2A5MC3A6N1sVyUABEuzHVbUDskFrS0CoEfsaUwM8ZuOXAf0GCZCgDzdERHiwBMTy2GeYHMA/V3oSDOw7RIAE/bg9IsKdOFwCkjH7FBMDuOdlZGv7BwWo2n0REW7GoRKQrbUPMCGAd4E0+guNqStAgkcjIlyHv0tAumpvozeAcxEO1Bk3rAAJnkZPRNm/SkD+dZwQwLdYmvzUG5tLgAQvYWxgkksN3Vi6aRsjuJbinxzjcwuQ4E3hZTbL0XO1m/YCxgTwLJdu5Hl8NCRAgo+Ed9kZ+K6L5J8T/lmu0Ngp1bAAiTRbnBKYfCq+7AL5J1EJzL+yCV9NCZDgW8wIgJiELR0kvyZyKq1q0l/TAiTS3/2sAJjx2NQB8qsj5Fe34LMlARLpCXBZJJPc2EbyqyLk17Tot2UBEmmUtTCSSa5rg/+VAd8V6V7Qqu+2CJBIA47rI0Afb9LnYdwR8NmjfSl62wRIpGfvNZGl+lATvpZHfC3Ev23CvKedAryD8SHQGfC75DujD2FpzE/ma5l8kV7XVsAbAvF4JEqrl0n2YfFwfjJf16qf6HRNgFcwLgDwYuFobYlwknIAiwL9j5e+jAklPPPxZ5ECvCgcjy/JnuaGiDgLDc7R92FBoF+vozHFe8L5/hz8WoQA6yJPeKnBy3yTwN6Ay/F7BmJe4PsJeL9mzm3Cr7vOw4/dFOAp4Xg8loltwaRA//MxN/D3ifgkMvc3OCMwZrrGS3tNCbA2sikNl4l9hdNzbG6TpS8262HYhbMDYxst7TUswCMR0HfnHP+9QCVqgJ/TsT2nr924MLJ68pb2GhLggQjo+xsUMVaJmqbxJbxHeP/IW9rLLcA9EfIPNwi4aoMqUThL8/cT9uPqALY8pb1hBQjG49kEjzUJuGr9eBXrtf6GuQ83BjAOV9qrK0A/bg04reCJFgF3wvpxW+RhxUp7UQEO4aaAox48UwKy9ezeiAih0l5QgD4siSyn50tAMI/FTqva0t4QAWLx+Fi8XAJijVjs5ektjkaqgwSIxePjpJtV0YSasfXCuUq1tHdEgL24MtDxRP//qzKvCWeSC/AD6fkbisfH490SEGiHbRbOJGcTiM9xkmPvpthWnDqEa4D8KVnnogF3wrarySRryZ/m2L0oWbWdBmSSRy5LZ22Z9Cj8wrHZDuJD6d1oZOfkSG4j/v8FRgUoGkDRbVSAogEU3UYFKBpA0W3EC/AfKRig5Ggc6fwAAAAASUVORK5CYII=";function we(){return o(he,{children:[e(me,{src:C}),e("h4",{children:"Ashley Shaw"}),e("p",{className:"undertext",children:"Frontend Developer"}),o(pe,{href:"mailto:ashshaw17@gmail.com",children:[e("img",{src:fe}),"Email"]}),o(ge,{children:[e("p",{children:"Address: 7 Wiltshire Drive"}),e("p",{children:"Glossop"}),e("p",{children:"Derbyshire"}),e("p",{children:"SK13 8SQ"})]}),e(ue,{children:e("a",{href:"tel:07803432177",children:"Telephone: 07803432177"})})]})}function ve(){const[t,n]=d.exports.useState(!1);return o(h,{children:[e(v,{show:t,setShow:n}),e(b,{source:de}),e(A,{children:e(we,{})})]})}function xe(){return e(k,{children:o(S,{children:[e(f,{path:"/",element:e(X,{})}),e(f,{path:"/experience",element:e(ee,{})}),e(f,{path:"/contact_info",element:e(ve,{})}),e(f,{path:"/demonstration",element:e(ce,{})})]})})}R.render(e(E.StrictMode,{children:e(xe,{})}),document.getElementById("root"));

import{s as i,j as x,L as g,r as d,B as k,R,a as u,b as S,c as E}from"./vendor.3d1a2a57.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}};B();const A=i.div`
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
`,L=i.div`
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
`,I=i.main`
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
`,z=i.main`
  background-color: rgb(112, 128, 144, 0.8);
  padding: 2.5vw;
  color: whitesmoke;
  a {
    text-decoration: none;
  }
`,N=i.nav`
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
`,F=i.ul`
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
`;var T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABsElEQVR4nO3avUodQRjG8R8mYhcwkQheQwSRJE0uQ9IEv6pch6VtylxJYiCgja19SBEUcgEhKjYei8PC4ZzdIx7Pzuw67x+mmx2e92Hn2dmZIQiCIAiCIAiCIC8HeJFbRE7O8AtvcgvJxRkG+IetzFqyUBkwwC0O8SyrosSMGlC173iZU1RK6gwY4DfWM+pKRpMBA1xjN5+0NEwzoGpf8TyXwLYZN+BYvQlHnmgujBuwgc+4MWnCOd7mkdkedQbAB/xVnwt76WW2R5MBsIZTzbmw2Iag+wKp7TZqAMPwO2zoe4LXc60+U9HTDKjYwVVN/3O8m0/pQ7pqAGziT80z19h/fOlDumwArOBnw7NzyYXxQbvIfbmw+pjB+2BAxSdcmtR8gfezDtonA2jOhStszzJg3wyAV/jhAbmwkFJd3+jbG1D0FJgWgjMvjvpgQNLPYPELoS4ZUPRSuNifoSV8aeh7rIXf4dR0bkMkNbNsiT2prfLYFDU5r+te+WK2xZvmezEHI6PtPz7mk5aGOBw1Wfw3LOcUlZK4IGFYfNFXZIq+JFX8NbkgCIIgCIIgCNJxBywmHwRmTqXyAAAAAElFTkSuQmCC";const e=x.exports.jsx,r=x.exports.jsxs,v=x.exports.Fragment;function f({show:t,setShow:n}){return e(v,{children:e(N,{onClick:()=>n(!t),show:t,children:r(F,{children:[e("img",{src:T}),t?r(v,{children:[e(w,{children:e(g,{to:"/",children:"Home"})}),e(w,{children:e(g,{to:"/experience",children:"Previous Experience"})}),e(w,{children:e(g,{to:"/demonstration",children:"Code examples"})}),e(w,{children:e(g,{to:"/contact_info",children:"Contact Information"})})," "]}):null]})})})}var J="/assets/homeimage.409edbee.png";const j=i.div`
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
`;function M(){return r(j,{children:[e("h1",{children:"Ashley Shaw"}),e("p",{children:"Welcome to my portfolio"})]})}var y="/assets/Me.e84dd877.png",C="/assets/reviewarrow.aecc7865.svg";const Q=i.div`
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
`,U=i.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex: 2;
margin-left: auto;
`,G=i.img`
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
`,H=i.img`
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
`,P=i.div`
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.7);
height: 20vh;
width: 100%;
padding:2vw 5vw;
text-align: center;
`,W=i.p`
font-style: italic;
margin-top: auto;
`,V=i.p`
font-size: 1.25rem;
@media (max-width: 912px){
      font-size: 1rem;
    }
`,Y=i.p`

`;function O(){const[t,n]=d.exports.useState(0);function l(){return n(t===m.length-1?0:t+1)}function c(){return n(t===0?m.length-1:t-1)}return r(Q,{children:[e("h3",{children:" Reviews: "}),r(U,{children:[e(H,{src:C,onClick:c}),e(G,{src:C,onClick:l}),e(Z,{text:m[t].text,name:m[t].name,stars:m[t].stars})]})]})}const m=[{text:"Review Example 1",name:"- Review 1",stars:1},{text:"Review Example 2",name:"- Review 2",stars:2},{text:"Review Example 3",name:"- Review 3",stars:3},{text:"Review Example 4",name:"- Review 4",stars:4},{text:"Review Example 5",name:"- Review 5",stars:5}],Z=({text:t,name:n,stars:l})=>r(P,{children:[e(V,{dangerouslySetInnerHTML:{__html:t}}),e(W,{children:n}),e(Y,{children:K(l)})]});function K(t){let n="";for(let l=0;l<t;l++)n+="\u2B50";return n}function X(){const[t,n]=d.exports.useState(!1);return r("div",{children:[e(f,{show:t,setShow:n}),r(A,{show:t,setShow:n,colour:"#8194A6",children:[e(M,{}),r(I,{children:[r(D,{children:[e("h3",{colour:"white",children:"About me"}),e("br",{}),e("p",{children:"I am a 23 year old aspiring front end software developer from Glossop"}),e("br",{}),e("p",{children:"I pride myself on my good communication skills, organisation and punctuality, being able to work as part of a team or independently. I am an honest and trustworthy individual who has a passion to work hard at all things to the best of my ability and to be reliable when coping under pressure."})]}),e("img",{src:y})]}),e(O,{})]})]})}const q=i.img`
height: 100vh;
width: 100vw;
position: absolute;
z-index: -1;
opacity: 0.75;
`;function b(t){return e(q,{src:t.source})}var $="/assets/experienceimage.28fcb951.png";function _(){const[t,n]=d.exports.useState(!1);return r("div",{children:[e(b,{source:$}),e(f,{show:t,setShow:n}),e(A,{show:t,children:r(z,{children:[e("h1",{children:"Coding Experience "}),e("p",{children:"Responsive Web Design Certification (HTML and CSS)"}),e("p",{children:"JavaScript Algorithms and Data Structures Certification (Javascript)"}),e("p",{children:r("small",{children:["Certifications can be found ",e("a",{href:"https://www.freecodecamp.org/fcc5c7c9632-98c5-41a5-812b-f8891f70292f",children:"here"})]})}),e("br",{}),e("h1",{children:"Previous Employment"}),e("p",{children:"Barclays Bank - 4PP Manchester (2019-Present)"}),e("p",{children:"William Hill PLC - Glossop (2016-2019)"}),e("p",{children:"J W Mettrick and Son Ltd \u2013 Glossop (2014-2016) "}),e("br",{}),e("h1",{children:"Education"}),e("p",{children:"Glossopdale Sixth Form (September 2014 - June 2016)"}),e("p",{children:"A-levels: B History; C Geography; D Law; Merit Level 3 BTEC IT Certificate."}),e("p",{children:"Glossopdale Community College (September 2009 \u2013 July 2014)"}),e("p",{children:"10 GCSEs, grade A-C, including Maths, English and Science"}),e("br",{}),e("small",{children:"Please see CV for more info"})]})})]})}var ee="/assets/demonstrationimage.7888c157.png";const te=i.div`
margin-top: 5vh;
line-height: 10vh;
background-color: rgba(3, 3, 3, 0.4);
width: 50%;
@media (max-width: 918px){
    width: 90%;
}
`;function ie(){const[t,n]=d.exports.useState("");function l(c){if(c<1||c>3999)return"Please enter a number between 1 - 3999";let o={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},a="";for(let s in o)for(;c>=o[s];)a+=s,c-=o[s];return a}return r(te,{children:[e("h1",{children:"Roman Numeral Converter"}),e("input",{type:"text",placeholder:"Example: 21 will output XXI",value:t,onChange:c=>n(c.target.value)}),e("p",{children:l(t)})]})}const ne=i.div`
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
`,oe=i.button`
width: 20px;
height: 20px;
background-color: red;
margin-left: auto;
`,ae=i.div`
display: flex;
`;function se(){const[t,n]=d.exports.useState(""),[l,c]=d.exports.useState([{description:"Make to do List"}]);function o(s){if(s.preventDefault(),t==="")return null;n("");let h=[{description:t},...l];c(h)}function a(s,h){s.preventDefault();let p=[...l];p.splice(h,1),c(p)}return e(ne,{children:r(re,{children:[e("h1",{children:"To do List"}),e("input",{type:"text",value:t,onChange:s=>n(s.target.value)}),e("button",{onClick:o,children:"AddTask"}),e("ul",{children:l.map((s,h)=>r(ae,{children:[e("li",{children:s.description}),e(oe,{onClick:p=>a(p,h),children:"X"})]},h))})]})})}function le(){const[t,n]=d.exports.useState(!1);return r("div",{children:[e(b,{source:ee}),e(f,{show:t,setShow:n}),r(L,{show:t,children:[e(ie,{}),e(se,{}),r("div",{className:"link-div",children:[e("h1",{children:"Websites"}),e("a",{href:"https://codepen.io/ash-shaw/pen/MWELNZG",target:"_blank",children:"Technical documentation page(Codepen)"}),e("br",{}),e("a",{href:"https://codepen.io/ash-shaw/pen/MWEzEjW",target:"_blank",children:"Survey form(Codepen)"}),e("br",{}),e("a",{href:"https://codepen.io/ash-shaw/pen/ExwyPyJ",target:"_blank",children:"Tribute page(Codepen)"}),e("br",{})]})]})]})}var ce="/assets/contactimage.4d745422.png";const de=i.main`
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
`,he=i.img`
  width: 35vh;
  height: 35vh;
  border-radius: 10px 10px 0px 0px;
`,me=i.a`
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
`,pe=i.div`
  margin-top: 2vh;
  p {
    font-size: 2.5vh;
    line-height: 5.5vh;
    color: whitesmoke;
  }
`,ge=i.footer`
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
`;var ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2QAAA9kBvACB0QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAStSURBVHic7dtriFVVFAfw353UasTSMjRCNIsKyx5akX0QEUoo0qAwoTAosA9RRgQZQYRBEApBFESUH8KiEIOiKIyyJxYKPe2DFUpFGD20FHNy8vThnKszd/a+c+7znJzZsOAyd++1////2Xfvtc7aU0mSxEhuPUUDKLqNClA0gKLbqABFAyi6jQpQNICi24gXYEz1Q6VSuQQrcBF6C0PU2XYQm7ExSZJtIIsET8YuJCPA9mF+kiQp9yMfmI4dJQDYSduDK6qcBwmQiTAFn5cAaCfsN8wZyHeIAJkIE/FxCQC303bjggDXyTAz8EUv3ioB8HbYTzgnwHEatsLPEXXGYUMJCLRiO3FmgNtM6aa/V9bxDzWbQ9bxODxbAiLN2A5MC3A6N1sVyUABEuzHVbUDskFrS0CoEfsaUwM8ZuOXAf0GCZCgDzdERHiwBMTy2GeYHMA/V3oSDOw7RIAE/bg9IsKdOFwCkjH7FBMDuOdlZGv7BwWo2n0REW7GoRKQrbUPMCGAd4E0+guNqStAgkcjIlyHv0tAumpvozeAcxEO1Bk3rAAJnkZPRNm/SkD+dZwQwLdYmvzUG5tLgAQvYWxgkksN3Vi6aRsjuJbinxzjcwuQ4E3hZTbL0XO1m/YCxgTwLJdu5Hl8NCRAgo+Ed9kZ+K6L5J8T/lmu0Ngp1bAAiTRbnBKYfCq+7AL5J1EJzL+yCV9NCZDgW8wIgJiELR0kvyZyKq1q0l/TAiTS3/2sAJjx2NQB8qsj5Fe34LMlARLpCXBZJJPc2EbyqyLk17Tot2UBEmmUtTCSSa5rg/+VAd8V6V7Qqu+2CJBIA47rI0Afb9LnYdwR8NmjfSl62wRIpGfvNZGl+lATvpZHfC3Ev23CvKedAryD8SHQGfC75DujD2FpzE/ma5l8kV7XVsAbAvF4JEqrl0n2YfFwfjJf16qf6HRNgFcwLgDwYuFobYlwknIAiwL9j5e+jAklPPPxZ5ECvCgcjy/JnuaGiDgLDc7R92FBoF+vozHFe8L5/hz8WoQA6yJPeKnBy3yTwN6Ay/F7BmJe4PsJeL9mzm3Cr7vOw4/dFOAp4Xg8loltwaRA//MxN/D3ifgkMvc3OCMwZrrGS3tNCbA2sikNl4l9hdNzbG6TpS8262HYhbMDYxst7TUswCMR0HfnHP+9QCVqgJ/TsT2nr924MLJ68pb2GhLggQjo+xsUMVaJmqbxJbxHeP/IW9rLLcA9EfIPNwi4aoMqUThL8/cT9uPqALY8pb1hBQjG49kEjzUJuGr9eBXrtf6GuQ83BjAOV9qrK0A/bg04reCJFgF3wvpxW+RhxUp7UQEO4aaAox48UwKy9ezeiAih0l5QgD4siSyn50tAMI/FTqva0t4QAWLx+Fi8XAJijVjs5ektjkaqgwSIxePjpJtV0YSasfXCuUq1tHdEgL24MtDxRP//qzKvCWeSC/AD6fkbisfH490SEGiHbRbOJGcTiM9xkmPvpthWnDqEa4D8KVnnogF3wrarySRryZ/m2L0oWbWdBmSSRy5LZ22Z9Cj8wrHZDuJD6d1oZOfkSG4j/v8FRgUoGkDRbVSAogEU3UYFKBpA0W3EC/AfKRig5Ggc6fwAAAAASUVORK5CYII=";function we(){return r(de,{children:[e(he,{src:y}),e("h4",{children:"Ashley Shaw"}),e("p",{className:"undertext",children:"Frontend Developer"}),r(me,{href:"mailto:ashshaw17@gmail.com",children:[e("img",{src:ue}),"Email"]}),r(pe,{children:[e("p",{children:"Address: 7 Wiltshire Drive"}),e("p",{children:"Glossop"}),e("p",{children:"Derbyshire"}),e("p",{children:"SK13 8SQ"})]}),e(ge,{children:e("a",{href:"tel:07803432177",children:"Telephone: 07803432177"})})]})}function fe(){const[t,n]=d.exports.useState(!1);return r(v,{children:[e(f,{show:t,setShow:n}),e(b,{source:ce}),e(A,{children:e(we,{})})]})}function ve(){return e(k,{children:r(R,{children:[e(u,{path:"/",element:e(X,{})}),e(u,{path:"/experience",element:e(_,{})}),e(u,{path:"/contact_info",element:e(fe,{})}),e(u,{path:"/demonstration",element:e(le,{})})]})})}S.render(e(E.StrictMode,{children:e(ve,{})}),document.getElementById("root"));

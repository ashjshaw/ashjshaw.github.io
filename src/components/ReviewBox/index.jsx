import { useState, Fragment } from "react";
import arrow from "../../images//reviewimages/reviewarrow.svg";
import {
  LeftArrow,
  RightArrow,
  ReviewContentWrapper,
  ReviewWrapper,
  ReviewName,
  ReviewText,
  ReviewStars,
  ReviewDiv
} from "./Reviewbox.css";

export default function ReviewBox() {
  const [current, setCurrent] = useState(0);

  function nextReview() {
    return setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  }
  function prevReview() {
    return setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  }
  return (
    <ReviewWrapper>
      <h3> Reviews: </h3>
      <ReviewContentWrapper>
        <LeftArrow src={arrow} onClick={prevReview} />
        <RightArrow src={arrow} onClick={nextReview} />
        <Review text={reviews[current].text} name={reviews[current].name}
              stars={reviews[current].stars} />
      </ReviewContentWrapper>
    </ReviewWrapper>
  );
}

const reviews = [{
    text: "Hands down my second favourite son",
    name: "- My Mum (mother of two)",
    stars: 5,
},
{
    text: "Oooo he's a good lad",
    name: "- Grandma Anne",
    stars: 5,
},
  {
    text: "Will you leave me alone while I do my ironing",
    name: "- Warren Perkins.esq",
    stars: 3,
  },
  {
    text: "This is who I meant would never give you up or let you down",
    name: "- Rick Astley (No relation)",
    stars: 5,
},
{
    text: "Beer on the table,<br/> Ashley speaks using his hands,<br/> the beer falls",
    name: "- Scouse Dan",
    stars: 3,
},
{
    text: "Designs better websites than me",
    name: "- Conor Jones (Designed 0 Websites)",
    stars: 4,
}
];
const Review = ({ text, name, stars }) => {
  return (
    <ReviewDiv>
      <ReviewText dangerouslySetInnerHTML={{__html:text}}></ReviewText>
      <ReviewName>{name}</ReviewName>
      <ReviewStars>{Starsfunc(stars)}</ReviewStars>
    </ReviewDiv>
  );
};

function Starsfunc(count) {
  let output = "";
  for (let i = 0; i < count; i++) {
    output += "⭐";
  }
  return output;
}

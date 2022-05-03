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
    text: "Review Example 1",
    name: "- Review 1",
    stars: 1,
},
{
  text: "Review Example 2",
  name: "- Review 2",
  stars: 2,
},
  {
    text: "Review Example 3",
    name: "- Review 3",
    stars: 3,
  },
  {
    text: "Review Example 4",
    name: "- Review 4",
    stars: 4,
},
{
  text: "Review Example 5",
  name: "- Review 5",
  stars: 5,
},
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

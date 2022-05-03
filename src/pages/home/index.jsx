import { FlexBox } from "../../components/FlexBox.css";
import {
  HomeMainSection,
  HomeAboutMeDiv,
} from "../../components/MainSection.css";
import Nav from "../../components/Nav";
import TitleBar from "../../components/TitleBar";
import Me from "../../images/Me.png";
import { useState } from "react";
import ReviewBox from "../../components/ReviewBox";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Nav show={show} setShow={setShow} />

      <FlexBox show={show} setShow={setShow} colour="#8194A6">
        <TitleBar />

        <HomeMainSection>
          <HomeAboutMeDiv>
                <h3 colour="white">About me</h3>
                <br />
                <p>
                  I am a 23 year old aspiring front end software developer from
                  Glossop
                </p>
                <br />
                <p>
                  I pride myself on my good communication skills, organisation
                  and punctuality, being able to work as part of a team or
                  independently. I am an honest and trustworthy individual who
                  has a passion to work hard at all things to the best of my
                  ability and to be reliable when coping under pressure.
                </p>
             
          </HomeAboutMeDiv>
          <img src={Me} />
        </HomeMainSection>
        <ReviewBox />
      </FlexBox>
    </div>
  );
}

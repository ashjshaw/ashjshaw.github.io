import { FlexBox } from "../../components/FlexBox.css";
import {
  HomeMainSection,
  HomeAboutMeDiv,
} from "../../components/MainSection.css";
import Nav from "../../components/Nav";
import TitleBar from "../../components/TitleBar";
import Me from "../../images/Me.png";
import Glosme from "../../images/Glosme.png"
import { useState } from "react";
import ReviewBox from "../../components/ReviewBox";

export default function Home() {
  const [show, setShow] = useState(false);
  const [gloss, setGloss] = useState(true);
  return (
    <div>
      <Nav show={show} setShow={setShow} />

      <FlexBox show={show} setShow={setShow} colour="#8194A6">
        <button onClick={() => setGloss(!gloss)}>
          {gloss ? <p>For Glossop Folk</p> : <p>For English</p>}
        </button>
        <TitleBar gloss={gloss} setGloss={setGloss} />

        <HomeMainSection>
          <HomeAboutMeDiv gloss={gloss} setGloss={setGloss}>
            {gloss ? (
              <>
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
              </>
            ) : (
              <>
                <h3 colour="white">Ya Reet</h3>
                <br />
                <p>
                  I am a young fella from God's own back garden who reckons himself
                  half decent with computers and that.
                </p>
                <br />
                <p>
                  I reckon I've got a fair gift o't gab, decent at sorting
                  myself out and always turn up when I'm supposed to. I don't
                  talk chuff, am not light-fingered and put in a hard days
                  graft. I can work wi other folk or on me sen and I don't start
                  sweating when't muck hits the fan.
                </p>
              </>
            )}
          </HomeAboutMeDiv>
          <img src={gloss ? Me : Glosme} />
        </HomeMainSection>
        <ReviewBox />
      </FlexBox>
    </div>
  );
}

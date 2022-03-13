import { FlexBox } from "../../components/FlexBox.css";
import { ExperienceMainSection } from "../../components/MainSection.css";
import Nav from "../../components/Nav";
import Image from "../../components/Image";
import experienceimage from "../../images/experienceimage.png";
import { useState } from "react";
export default function Experience() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Image source={experienceimage}/>
      <Nav show={show} setShow={setShow}/>
      <FlexBox show={show}>
      <ExperienceMainSection>
        <h1>Coding Experience </h1>
        <p>Responsive Web Design Certification (HTML and CSS)</p>
        <p>JavaScript Algorithms and Data Structures Certification (Javascript)</p>
        <p><small>Certifications can be found <a href='https://www.freecodecamp.org/fcc5c7c9632-98c5-41a5-812b-f8891f70292f'>here</a></small></p>
        <br/>
        <h1>Previous Employment</h1>
        <p>Barclays Bank - 4PP Manchester (2019-Present)</p>
        <p>William Hill PLC - Glossop (2016-2019)</p>
        <p>J W Mettrick and Son Ltd – Glossop (2014-2016) </p>
        <br/>
        <h1>Education</h1>
        <p>Glossopdale Sixth Form (September 2014 - June 2016)</p>
        <p>A-levels: B History; C Geography; D Law; Merit Level 3 BTEC IT Certificate.</p>
        <p>Glossopdale Community College (September 2009 – July 2014)</p>
        <p>10 GCSEs, grade A-C, including Maths, English and Science</p>
        <br/>
        <small>Please see CV for more info</small>
      </ExperienceMainSection>
      </FlexBox>
    </div>
  );
}
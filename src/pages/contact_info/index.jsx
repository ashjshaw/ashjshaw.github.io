import { FlexBox } from "../../components/FlexBox.css";
import Image from "../../components/Image";
import contactimage from "../../images/contactimage.png";
import Nav from "../../components/Nav";
import { useState } from "react";
import ContactCard from "../../components/ContactCard";

export default function ContactInfo() {
  const [show, setShow] = useState(false)
  
  return (
    <>
      <Nav show={show} setShow={setShow}/>
      <Image source={contactimage} />
      <FlexBox>
      <ContactCard/>
      </FlexBox>
    </>
  );
}

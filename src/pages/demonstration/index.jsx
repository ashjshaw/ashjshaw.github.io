import { CodeFlexBox } from "../../components/FlexBox.css";
import Nav from "../../components/Nav";
import Image from "../../components/Image";
import demonstrationimage from "../../images/demonstrationimage.png";
import { useState } from "react";
import RomanNumeralConverter from "../../components/RomanNumeralConverter";
import ToDoList from "../../components/ToDoList";


export default function Demonstration() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Image source={demonstrationimage} />
      <Nav show={show} setShow={setShow} />
      <CodeFlexBox show={show}>
      <RomanNumeralConverter/>
      <ToDoList/>
      </CodeFlexBox>
    </div>
  );
}

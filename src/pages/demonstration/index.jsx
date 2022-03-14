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
      <div className="link-div">
        <h1>Websites</h1>
      <a href='https://codepen.io/ash-shaw/pen/MWELNZG' target='_blank'>Technical documentation page(Codepen)</a>
      <br/>
      <a href='https://codepen.io/ash-shaw/pen/MWEzEjW' target='_blank'>Survey form(Codepen)</a>
      <br/>
      <a href='https://codepen.io/ash-shaw/pen/ExwyPyJ' target='_blank'>Tribute page(Codepen)</a>
      <br/>
      </div>
      </CodeFlexBox>
    </div>
  );
}

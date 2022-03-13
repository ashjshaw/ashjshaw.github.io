import { useState } from "react";
import { RomanNumeralWrapper } from "./RomanNumeralConverter.ccs";

export default function RomanNumeralConverter() {
  const [numer, setNumer] = useState("");

  function Converter(num) {

    if (num < 1 || num > 3999) {
      return "Please enter a number between 1 - 3999";
    };

    let conv = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = "";
  
    for (let i in conv) {
      while (num >= conv[i]) {
        result += i;
        num -= conv[i];
      }
    }
    return result;
  }

  return <RomanNumeralWrapper>
  <h1>Roman Numeral Converter</h1>
  <input type='text' placeholder='Example: 21 will output XXI'value={numer} onChange={(e) => setNumer(e.target.value)}/>
  <p>{Converter(numer)}</p>
  </RomanNumeralWrapper>;
}



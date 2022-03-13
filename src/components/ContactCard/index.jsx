import { CardWrapper, CardImage, CardFooter, CardEmailButton, CardAddress } from "./ContactCard.css";
import cardimage from '../../images/Me.png';
import Email from '../../images/Email.png';

export default function ContactCard() {
  return <CardWrapper>
      <CardImage src={cardimage}/>
      <h4>Ashley Shaw</h4>
      <p className = 'undertext'>Frontend Developer</p>
      <CardEmailButton href='mailto:ashshaw17@gmail.com'><img src={Email}/>Email</CardEmailButton>
      <CardAddress>
      <p>Address: 7 Wiltshire Drive</p>
      <p>Glossop</p>
      <p>Derbyshire</p>
      <p>SK13 8SQ</p>
      </CardAddress>
      <CardFooter><a href='tel:07803432177'>Telephone: 07803432177</a></CardFooter>
  </CardWrapper>;
}

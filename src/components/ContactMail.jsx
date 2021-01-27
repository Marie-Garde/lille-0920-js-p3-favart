import contact from "../assets/Contact/Contact.jpg";
import {
  Back,
  Background,
  Formulaire,
  Label,
  Input,
  Textarea,
  Button,
} from "../styled-components/ContactMail.jsx";

import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_q3jbdzm",
      "template_stdceyl",
      e.target,
      "user_NKYLcqZwiFms9AL3RjBZO"
    );
    e.target.reset();
  }

  return (
    <Back>
      <Background src={contact} />
      <Formulaire className="contact-form" onSubmit={sendEmail}>
        <Label>Email</Label>
        <Input type="email" name="user_email" required />
        <Label>Message</Label>
        <Textarea name="message" required />
        <Button type="submit" value="Send">
          Envoyer
        </Button>
      </Formulaire>
    </Back>
  );
}

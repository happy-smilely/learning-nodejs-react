import React, { FunctionComponent, useState } from "react";
import {
  Container,
  EmailInbox,
  EmailContainer,
  EmailInput,
  EmailTextBox,
  EmailButton,
  ButtonContainer,
} from "./styles/styled";
import { IContactPageProps } from "./types/types";
import { sendEmailToMe } from "./services/emailServices";

const ContactPage: FunctionComponent<IContactPageProps> = ({ themeState, dimensions }) => {
  const [userMessage, setUserMessage] = useState({
    to: "To: HEO JAEHYUCK",
    from: "",
    subject: "",
    message: "",
  });

  const onChangeText = (e: React.ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    const targetID = e.target.id;
    setUserMessage({ ...userMessage, [targetID]: element.value });
  };

  const sendEmailClick = async () => {
    console.log("SEnding message");
    await sendEmailToMe(userMessage.from, userMessage.subject, userMessage.message);
    console.log("seent message");
  };

  return (
    <Container themeState={themeState}>
      {dimensions.width > 500 ? (
        <>
          <EmailInbox themeState={themeState}>No new emails :(</EmailInbox>
        </>
      ) : null}
      <EmailContainer themeState={themeState}>
        <EmailInput id="to" value={userMessage.to} />
        <EmailInput
          id="from"
          value={userMessage.from}
          placeholder={"Please enter your email.. "}
          onChange={onChangeText}
          autoFocus={true}
        />
        <EmailInput id="subject" value={userMessage.subject} placeholder={"Add subject"} onChange={onChangeText} />
        <EmailTextBox
          id="message"
          value={userMessage.message}
          placeholder={"Type your name / message here.."}
          onChange={onChangeText}
        />
        <ButtonContainer>
          <EmailButton onClick={sendEmailClick} themeState={themeState}>
            send
          </EmailButton>
        </ButtonContainer>
      </EmailContainer>
    </Container>
  );
};

export default ContactPage;

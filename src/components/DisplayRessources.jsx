import React, { useState, useEffect } from "react";
import aperçu from "../assets/Documents/placeholder.png";
import axios from "axios";
import {
  DivCard,
  FlexBox,
  FlexBox1,
  FlexBox2,
  H1,
  P,
  Img,
  Text,
  Name,
  Job,
  Company,
} from "../styled-components/DisplayRessources";

export default function RessourcePage() {
  const [ressources, setRessources] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:3001/ressources`,
    }).then((res) => {
      setRessources(res.data);
      setLoading(false);
    });
  }, [setRessources]);

  return (
    <FlexBox>
      <FlexBox1>
        <Text>
          <Name>Surname</Name>
          <Job>Function</Job>
          <Company>Company</Company>
        </Text>
      </FlexBox1>
      <FlexBox2>
        {ressources.map((doc, i) => (
          <DivCard key={i}>
            <H1>{doc.title}</H1>
            <P>{doc.description}</P>
            <P>Supprimer</P>
          </DivCard>
        ))}
      </FlexBox2>
    </FlexBox>
  );
}

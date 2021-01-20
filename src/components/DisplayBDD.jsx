import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  FlexBox,
  FlexBox1,
  FlexBox2,
  Name,
  Job,
  Company,
  Text,
  Card,
  FlexText,
  CardText,
  CardBdd,
} from "../styled-components/DisplayBDD";

export default () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:3001/client`,
    }).then((res) => {
      setClients(res.data);
      setLoading(false);
    });
  }, [setClients]);

  return (
    <FlexBox>
      <FlexBox1>
        <Text>
          <Name>Name</Name>
          <Job>Function</Job>
          <Company>Company</Company>
        </Text>
      </FlexBox1>
      <FlexBox2>
        <div>
          {loading && <p>it's loading</p>}
          {!loading && (
            <>
              {clients.map((client, i) => (
                <Card>
                  <FlexText>
                    <CardText>Prénom : </CardText>
                    <CardBdd key={i}>{client.name}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Nom : </CardText>
                    <CardBdd key={i}>{client.surname}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Email : </CardText>
                    <CardBdd key={i}>{client.email}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Téléphone : </CardText>
                    <CardBdd key={i}>{client.phone}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Métier : </CardText>
                    <CardBdd key={i}>{client.job}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Nom de la structure : </CardText>
                    <CardBdd key={i}>{client.structure_name}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Type de structure : </CardText>
                    <CardBdd key={i}>{client.structure_type}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Domaine de la structure : </CardText>
                    <CardBdd key={i}>{client.structure_field}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Domaine d'activité : </CardText>
                    <CardBdd key={i}>{client.job_field}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Territoire : </CardText>
                    <CardBdd key={i}>{client.territory}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Ses envies : </CardText>
                    <CardBdd key={i}>{client.wishes}</CardBdd>
                  </FlexText>
                  <FlexText>
                    <CardText>Site internet : </CardText>
                    <CardBdd key={i}>{client.website}</CardBdd>
                  </FlexText>
                </Card>
              ))}
            </>
          )}
        </div>
      </FlexBox2>
    </FlexBox>
  );
};

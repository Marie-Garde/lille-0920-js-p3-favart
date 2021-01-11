import { FormCheckbox } from "shards-react";

import {
  FlexBox,
  FlexBox1,
  FlexBox2,
  P,
  Formulaire,
  DivLabel,
  Label,
  Input,
  StyledButton,
  Textarea,
  CheckBox,
} from "../styled-components/Inscription";

export default function Inscription() {
  return (
    <FlexBox>
      <FlexBox1></FlexBox1>
      <FlexBox2>
        <P>
          Avant d’accéder à l’espace client, veuillez renseigner ces champs :
        </P>
        <Formulaire>
          <fieldset>
            <DivLabel>
              <Label>Lastname *</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Lastname"
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Firstname *</Label>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Firstname"
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Métier *</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Nom de la structure *</Label>
              <Input
                type="text"
                name="Structure name"
                id="Structurename"
                placeholder="Nom de la structure"
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Type de la structure *</Label>
              <Input
                type="text"
                name="Structure name"
                id="Structurename"
                placeholder="Type de la structure"
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Domaine de la structure *</Label>
              <Input
                type="text"
                name="Structure name"
                id="Structurename"
                placeholder="Domaine de la structure"
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Votre domaine d'activité</Label>
              <Textarea
                type="text"
                name="message"
                id="message"
                placeholder="Votre domaine"
              />
            </DivLabel>
            <DivLabel>
              <Label>Participe : </Label>
              <CheckBox>
                <FormCheckbox inline>Haut-de-France</FormCheckbox>
                <FormCheckbox inline>Ile-de-France</FormCheckbox>
                <FormCheckbox inline>Grand Est</FormCheckbox>
                <FormCheckbox inline>Normandie</FormCheckbox>
                <FormCheckbox inline>National</FormCheckbox>
              </CheckBox>
            </DivLabel>

            <StyledButton type="submit" value="Send" />
          </fieldset>
        </Formulaire>
      </FlexBox2>
    </FlexBox>
  );
}

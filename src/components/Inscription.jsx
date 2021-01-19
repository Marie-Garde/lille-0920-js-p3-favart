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
  DivLabelCheckBox,
  TextareaAutre,
  TextareaEnvies,
  DivLabelText,
  InputSite,
  LabelCheckBox,
} from "../Styled-components/Inscription";

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
              <Label>Prénom *</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Prénom"
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Nom *</Label>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Nom"
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
                placeholder="Domaine d'activité"
              />
            </DivLabel>
            <DivLabelCheckBox>
              <LabelCheckBox>Votre territoire d'actions </LabelCheckBox>
              <CheckBox>
                <FormCheckbox inline>Haut-de-France</FormCheckbox>
                <FormCheckbox inline>Ile-de-France</FormCheckbox>
                <FormCheckbox inline>Grand Est</FormCheckbox>
                <FormCheckbox inline>Normandie</FormCheckbox>
                <FormCheckbox inline>National</FormCheckbox>
              </CheckBox>
            </DivLabelCheckBox>
            <DivLabelText>
              <Label>Autre, précisez</Label>
              <TextareaAutre
                type="text"
                name="precisez"
                id="message"
                placeholder="Autre, précisez"
              />
            </DivLabelText>
            <DivLabelText>
              <Label>Vos envies</Label>
              <TextareaEnvies
                type="text"
                name="envies"
                id="message"
                placeholder="Vos envies"
              />
            </DivLabelText>
            <DivLabelText>
              <Label>Votre site internet</Label>
              <InputSite
                type="text"
                name="Site internet"
                id="SiteInternet"
                placeholder="Votre site internet"
              />
            </DivLabelText>
            <StyledButton type="submit" value="Envoyer" />
          </fieldset>
        </Formulaire>
      </FlexBox2>
    </FlexBox>
  );
}

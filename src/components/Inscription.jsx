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
            <StyledButton type="submit" value="Send" />
          </fieldset>
        </Formulaire>
      </FlexBox2>
    </FlexBox>
  );
}

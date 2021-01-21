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
} from "../styled-components/Inscription";

export default function Inscription() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "POST",
      url: `http://localhost:3001/client`,
    }).then((res) => {
      setClients(res.data);
      setLoading(false);
    });
  }, [setClients]);




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
                value={value.name}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Nom *</Label>
              <Input
                type="text"
                name="surname"
                id="surname"
                placeholder="Nom"
                value={value.surname}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Email *</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={value.email}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Téléphone *</Label>
              <Input
                type="number"
                name="phone"
                id="phone"
                placeholder="Numéro de téléphone"
                value={value.phone}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Mot de passe *</Label>
              <Input
                type="text"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={value.password}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Mot de passe *</Label>
              <Input
                type="text"
                name="password2"
                id="password2"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Métier *</Label>
              <Input
                type="text"
                name="job"
                id="job"
                placeholder="Métier"
                value={value.job}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Nom de la structure *</Label>
              <Input
                type="text"
                name="structure_name"
                id="structure_name"
                placeholder="Nom de la structure"
                value={value.structure_name}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Type de la structure *</Label>
              <Input
                type="text"
                name="structure_type :"
                id="structure_type :"
                placeholder="Type de la structure"
                value={value.structure_type}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Domaine de la structure *</Label>
              <Input
                type="text"
                name="structure_field"
                id="structure_field"
                placeholder="Domaine de la structure"
                value={value.structure_field}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Votre domaine d'activité</Label>
              <Textarea
                type="text"
                name="job_field"
                id="job_field"
                placeholder="Domaine d'activité"
                value={value.job_field}
                onChange={handleChange}
              />
            </DivLabel>
            <DivLabel>
              <Label>Votre territoire d'action</Label>
              <Textarea
                type="text"
                name="territory"
                id="territory"
                placeholder="Votre territoire d'action"
                value={value.territory}
                onChange={handleChange}
              />
            </DivLabel>
            <DivLabelText>
              <Label>Vos envies</Label>
              <TextareaEnvies
                type="text"
                name="wishes"
                id="wishes"
                value={value.wishes}
                onChange={handleChange}
                placeholder="Vos envies"
              />
            </DivLabelText>
            <DivLabelText>
              <Label>Votre site internet</Label>
              <InputSite
                type="text"
                name="website"
                id="website"
                value={value.website}
                onChange={handleChange}
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

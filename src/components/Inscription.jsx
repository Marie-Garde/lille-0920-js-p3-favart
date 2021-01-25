import useForm from "./InscriptionSignUp.jsx";
import validateInfo from "./ValidateInfo";

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
  TextareaEnvies,
  DivLabelText,
  InputSite,
} from "../styled-components/Inscription";

export default function Inscription() {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);
  return (
    <FlexBox>
      <FlexBox1></FlexBox1>
      <FlexBox2>
        <P>
          Avant d’accéder à l’espace client, veuillez renseigner ces champs :
        </P>
        <Formulaire onSubmit={handleSubmit}>
          <fieldset>
            <DivLabel>
              <Label>Prénom *</Label>
              <Input
                type="text"
                name="username"
                id="name"
                placeholder="Prénom"
                value={values.username}
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
                value={values.surname}
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
                value={values.email}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Téléphone *</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="Numéro de téléphone"
                value={values.phone}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Mot de passe *</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </DivLabel>
            <DivLabel>
              <Label>Mot de passe *</Label>
              <Input
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirmer le mot de passe"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </DivLabel>
            <DivLabel>
              <Label>Métier *</Label>
              <Input
                type="text"
                name="job"
                id="job"
                placeholder="Métier"
                value={values.job}
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
                value={values.structure_name}
                onChange={handleChange}
                required
              />
            </DivLabel>
            <DivLabel>
              <Label>Type de la structure *</Label>
              <Input
                type="text"
                name="structure_type"
                id="structure_type"
                placeholder="Type de la structure"
                value={values.structure_type}
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
                value={values.structure_field}
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
                value={values.job_field}
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
                value={values.territory}
                onChange={handleChange}
              />
            </DivLabel>
            <DivLabelText>
              <Label>Vos envies</Label>
              <TextareaEnvies
                type="text"
                name="wishes"
                id="wishes"
                value={values.wishes}
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
                value={values.website}
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

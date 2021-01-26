export default function validateInfo(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Un mot de passe est requis";
  } else if (values.password.lenght < 8) {
    errors.password = "Le mot de passe est trop court (8 charactéres minimums)";
  }
  if (values.password2 !== values.password) {
    errors.password = "Les mots de passes doivent être identiques";
  }
  return errors;
}

import notfound from "../Assets/imagenotfound.jpeg";

import {
  Card,
  CardText,
  CardImg,
  Title,
  Text,
  Liste,
} from "../Styled-components/Agissons.jsx";

export default function Agissons() {
  return (
    <>
      <Card>
        <CardText>
          <Title>
            Droit à l’expérimentation : MOBILISER le droit à l’expérimentation
            territoriale
          </Title>
          <Text>
            pour lever les freins réglementaires associés à la mise en œuvre des
            solutions à impact et changer les règles du jeu (réglementaire,
            économique, juridique et financier). Favart, pionnier du droit à
            l’expérimentation, à travers une méthodologie qui permet :
          </Text>
          <Liste>
            <li>
              Un cadre juridique et administratif maîtrisé pour les porteurs de
              projets et les collectivités territoriales en lien avec le projet
              de loi 3D (Décentralisation, Différentiation, Déconcentration)
            </li>
            <li>
              Une implication ministérielle favorable aux expérimentations
            </li>
            <li>Un délai suffisant pour dégager des résultats probants</li>
            <li>Une évaluation pour définir les critères de succès </li>
          </Liste>
        </CardText>
        <CardImg src={notfound}></CardImg>
      </Card>
    </>
  );
}

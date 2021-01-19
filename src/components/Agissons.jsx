import experimentation from "../Assets/Agissons/experimentation.jpg";
import communauté from "../Assets/Agissons/communauté.jpg";
import economique from "../Assets/Agissons/economique.jpg";
import juridique from "../Assets/Agissons/juridique.png";

import {
  P,
  Card,
  CardText,
  CardImg,
  Title,
  IdeeForte,
  Text,
  Liste,
  Card2,
  CardText2,
  CardImg2,
  Title2,
  IdeeForte2,
  Text2,
  Liste2,
  Card3,
  CardText3,
  CardImg3,
  Title3,
  IdeeForte3,
  Text3,
  Liste3,
  Card4,
  CardText4,
  CardImg4,
  Title4,
  IdeeForte4,
  Text4,
  Liste4,
} from "../Styled-components/Agissons.jsx";

export default function Agissons() {
  return (
    <>
      <P>Mettre en œuvre les solutions de rupture à fort impact sociétal</P>
      <Card>
        <CardText>
          <Title>Droit à l’expérimentation</Title>
          <IdeeForte>
            Mettre en œuvre les solutions de rupture à fort impact sociétal par
            la mobilisation du droit à l’expérimentation territoriale.
          </IdeeForte>
          <Text>
            Nous changeons les règles du jeu (réglementaire, économique,
            juridique et financier) afin de lever les freins entravant le
            développement des solutions à impact à travers une méthodologie
            éprouvée. Cela permet :
          </Text>
          <Liste>
            <li>
              De sécuriser un cadre juridique et administratif pour les porteurs
              de projets et les collectivités territoriales en lien avec le
              projet de loi 3D (Décentralisation, Différentiation,
              Déconcentration)
            </li>
            <li>
              Une implication ministérielle favorable aux expérimentations
            </li>
            <li>Un délai suffisant pour dégager des résultats probants</li>
            <li>Une évaluation pour définir les critères de succès </li>
          </Liste>
        </CardText>
        <CardImg src={experimentation}></CardImg>
      </Card>
      <Card2>
        <CardText2>
          <Title2>Communauté d’action</Title2>
          <IdeeForte2>
            S’autoriser le droit à l’expérimentation territoriale avec les
            acteurs de proximité par l’engagement et l’animation de nouvelles
            communautés d’action.
          </IdeeForte2>
          <Text2>
            Pour les territoires en mobilisant les acteurs publics, privés,
            associatifs, citoyens.
          </Text2>
          <Liste2>
            <li>Stratégie d’alliance territoriale</li>
            <li>Communauté de l’improbable</li>
            <li>Multi acteurs</li>
            <li>Multi compétences</li>
            <li>Ambition partagée</li>
          </Liste2>
        </CardText2>
        <CardImg2 src={communauté}></CardImg2>
      </Card2>
      <Card3>
        <CardText3>
          <Title3>Modèle économique à impact</Title3>
          <IdeeForte3>
            Construire l’alliance de l’impact sociétal et de la performance
            économique.
          </IdeeForte3>
          <Text3>
            Pour favoriser la création d’utilité sociétale et permettre une
            triple performance économique, sociale et écologique.
          </Text3>
          <Liste3>
            <li>Modèle économique à impact</li>
            <li>Coût évités et empreinte territoriale des solutions</li>
            <li>Inclusive Tokenized Economy</li>
          </Liste3>
        </CardText3>
        <CardImg3 src={economique}></CardImg3>
      </Card3>
      <Card4>
        <CardText4>
          <Title4>Outils juridiques et financiers</Title4>
          <IdeeForte4>
            Déployer des solutions juridiques et financières hybrides et
            innovantes.
          </IdeeForte4>
          <Text4>
            Pour financer l’expérimentation et l’essaimage des nouvelles
            solutions sur les territoires.
          </Text4>
          <Liste4>
            <li>Contrat à impact</li>
            <li>Entreprise/société à mission</li>
            <li>Fonds de Pérennité Économique</li>
            <li>Fonds d’Innovation Sociale</li>
            <li>Tokenized Impact Bonds</li>
          </Liste4>
        </CardText4>
        <CardImg4 src={juridique}></CardImg4>
      </Card4>
    </>
  );
}

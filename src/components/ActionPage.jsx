import {
  DivCards,
  DivInfos,
  DivCardMiddle,
  Button,
  H1,
  H2,
  H4,
  P,
  Ul,
  Li,
  Card,
  Container,
  ImgContainer,
  CardFlex,
  DivMain,
  H2MiddleCard,
  DivCenter,
  PContact,
  ImgLogo,
  DivLogo,
} from "../styled-components/ActionPage";
import geffroy from "../assets/ActionImg/Geffroy.jpeg";
import marsac from "../assets/ActionImg/Marsac.jpeg";
import linkedin from "../assets/icons/linkedin.png";

export default function ActionPage() {
  return (
    <DivMain>
      <DivInfos>
        <DivCards>
          <H2>En savoir plus sur nos interventions</H2>
          <P>
            Vous souhaitez avoir accès au centre de ressources Favart :
            présentation institutionnelle, retours d’expériences, présentation
            détaillée de nos 4 ingénieries, ...
          </P>
        </DivCards>
        <DivCardMiddle>
          <H2MiddleCard>Agissons ensemble</H2MiddleCard>
          <Ul>
            <Li>
              - Contribuer à nos missions aux Appels à Contributions ouverts sur
              nos engagements actuels et aux Appels à Manifestation d’Intérêt
            </Li>
            <Li>
              - Appels à Projets portés par nos partenaires et d’autres acteurs
              engagés
            </Li>
            <Li>- Engager une action commune avec Favart</Li>
            <Li>- Solliciter l’engagement de Favart dans vos dynamiques</Li>
          </Ul>
        </DivCardMiddle>
        <DivCards>
          <H2>Echangeons ensemble</H2>
          <P>
            Vous souhaitez échanger avec nous d’un projet, d’un enjeu, d’une
            idée. Contactez-nous et prenons le temps de partager ce qui vous
            anime.
          </P>
        </DivCards>
      </DivInfos>

      <DivCenter>
        <Button>Nous rejoindre</Button>
      </DivCenter>
      <H1>Notre équipe</H1>

      <CardFlex>
        <Card>
          <ImgContainer src={geffroy} alt="#" />
          <Container>
            <H4>Yoann Geffroy</H4>
            <P>Directeur-Fondateur</P>
            <P>
              Yoann est fondateur et directeur de Favart depuis 2009. <br />{" "}
              Expert de l’innovation sociale et du développement de projets à
              fort impact sociétal, Yoann intervient dans la mobilisation du
              droit à l’expérimentation territorial, la construction de nouveaux
              modèles économiques basés sur les coûts évités et l’ingénierie des
              outils juridiques hybrides en faveur de projets à fort impact
              (Apprentis d’Auteuil, Foncière Chênelet, Malakoff Humanis,
              Fondation Rexel …).
            </P>
            <DivLogo>
                <a href="https://www.linkedin.com/in/favart/ ">
                <ImgLogo src={linkedin} alt="logo linkedin" />
                </a>
            </DivLogo>
          </Container>
        </Card>

        <Card>
          <ImgContainer src={marsac} alt="#" />
          <Container>
            <H4>Marssac Barthélémy</H4>
            <P>Responsable Hauts-de-France</P>
            <P>
              Barthélémy a rejoint Favart en 2017 en tant que responsable des
              activités dans les Hauts-de-France pour y développer des solutions
              à impact. Diplômé du Master in Management de l’ESCEM
              Tours-Poitiers. <br /> Il dispose de huit années d'expériences
              professionnelles avec une double compétence : Audit Financier
              (audit financier Deloitte, contrôle de gestion et analyse
              financière Johnson &amp; Johnson) et Innovation Sociétale.
              Barthélémy intervient notamment sur les phases de construction des
              communautés d’acteurs innovantes et d’identification de l’impact
              territorial des projets. <br /> Au sein de Favart, il contribue à
              différents projets de l'Économie Sociale et Solidaire (ESS) et
              d’entrepreneuriat social, et est personnellement impliqué en tant
              que bénévole auprès de plusieurs associations et initiatives
              citoyennes.
            </P>
            <DivLogo>
                <a href="https://www.linkedin.com/in/barthelemymarsac/ ">
                <ImgLogo src={linkedin} alt="logo linkedin" />
                </a>
            </DivLogo>
          </Container>
        </Card>
      </CardFlex>

      <H1>Nous contacter</H1>
      <div>
        <PContact>
          Lorem ipssum Leo fusce lectus, consectetur augue etiam conubia sapien
          nisi turpis. Natoque maecenas nibh enim facilisi odio sapien risus
          fringilla natoque. Congue porta volutpat non hac parturient rutrum
          nisi in curae;. Nec tempus iaculis vel vehicula congue sociosqu
          consequat adipiscing aliquam. Ut fusce varius natoque blandit curae;
          hac sociis aptent aliquet. Arcu; euismod potenti integer montes primis
          iaculis porttitor semper mollis. Posuere lobortis fermentum lorem ut
          quam primis curae; lectus suscipit. Accumsan pellentesque cursus velit
          mi venenatis ante risus felis ante.
        </PContact>

        <DivCenter>
          <Button>Rendez-vous flash</Button>
        </DivCenter>
      </div>
    </DivMain>
  );
}

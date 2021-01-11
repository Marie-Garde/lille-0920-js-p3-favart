import React from "react";
import {
  H1Left,
  ContainerWhy,
  ImgWhy,
  PWhy,
  H2Title,
  PTitle,
  H1Right,
  ContainerWhom,
  ImgWhom,
  PWhom,
  Body,
  PMap,
  Map,
  List,
  Testing
} from "../Styled-components/MainStyle";

export default function MainPage() {
  return (
    <Body>
      <H1Left>Pourquoi FAVART ?</H1Left>
      <ContainerWhy>
        <ImgWhy
          src="https://images.unsplash.com/photo-1562569517-22bcc82b5dd4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="Représentants de l'entreprise FAVART"
        ></ImgWhy>
        <PWhy>
          <h3>Ce que les crises nous apprennent :</h3>
          <List>
            <li>
            Il n’y a aucune création de valeur durable dans un environnement économique, social et environnemental totalement dégradé.
            </li>
            <br/>
            <li>
            Aucun des outils économiques, juridiques et financiers actuels n’est adapté à la résolution des crises sociale, environnementale et sanitaire actuelles et à venir
            </li>
          </List>
        Le monde d’avant la crise de 2020 favorise la création de valeur marchande et les activités humaines permettant de maximiser la marge des produits-services (valeur d’échange) avec des processus de production délocalisés, immatériels et mondialisés, sans se préoccuper de la valeur d’usage (utilité sociale).
        dès l'apparition de cette crise, le monde “d’après” à mis la priorité sur les activités ayant la plus forte valeur d’usage : notamment la santé, le logement, l’alimentation, l’éducation, et la mise en œuvre de processus de production et de distribution relocalisés, matériels et de proximité.

        </PWhy>
      </ContainerWhy>

      <H2Title>Notre raison d’être</H2Title>

      <PTitle>
      Face à la gravité des problèmes sociaux et environnementaux avec des conséquences déjà irréversibles, il ne s’agit plus d’adapter à la marge le système de production, consommation, protection sociale mais de changer de paradigme en transformant fondamentalement les règles du jeu économique, juridique et financier.
      <br/><br/>
      Favart contribue au changement de paradigme afin de renverser les contraintes à partir desquelles sont organisées les activités humaines : Passer d’une approche systémique dans laquelle le système financier domine le système humain qui lui-même domine l’écosystème naturel, à une approche holistique dans laquelle le capital naturel nourrit le capital humain qui guide le capital financier.
      <br></br>
      Notre ambition est d’expérimenter et de développer des solutions de rupture favorisant le passage : <ul>
        <br></br>
        <li>De l’abondance à la frugalité</li>
        <br/>
        <li>De l’économie de la rareté et exclusive à l’économie du bien commun et inclusive</li>
        <br/>
        <li>Du pyramidal à l’horizontal et au collaboratif</li>
        <br/>
        <li>Du progrès au bien-être de chacune</li>
        </ul>

      </PTitle>

      <H1Right>Auprès de qui ?</H1Right>

      <ContainerWhom>
        <PWhom>
        Favart accompagne depuis 2009, l’amorçage et le développement de solutions concrètes et radicales capables de transformer la vie des habitants sur les territoires en répondant aux situations de fragilité des :
        <ul>
          <li>Personnes : précarité, exclusion</li>
          <br/>
          <li>Territoires : pauvreté, chômage, mal-logement</li>
          <br/>
          <li>Politiques publiques : éducation, action sociale, santé, sport</li>
        </ul>
        Les solutions que nous développons répondent à quatre principes :
        <ul>
          <li>Être non extractives en ne consommant aucune ressource rare</li>
          <br/>
          <li>Non propriétaires en permettant de rendre les produits-services créés accessibles au plus grand nombre</li>
          <br/>
          <li>Inclusives en rendant l'excellence accessible à ceux qui en ont le plus besoin</li>
          <br/>
          <li>Être pérenne à travers la recherche d’un profit qui maximise la valeur des capitaux naturels, humains et financiers</li>
        </ul>

        </PWhom>

        <ImgWhom
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57CPtbyMeYcowMud7zNR9YfejzAy0VKrx_Q&usqp=CAU"
          alt="Jonas Salk, inventeur du vaccin contre la polio (1ère cause de mortalité chez l’enfant au milieu du XXe siècle) a fait de ce vaccin un bien commun en refusant de le breveter : ”Il n’y a pas de brevet. Pourriez-vous breveter le soleil ?”"
        />
      </ContainerWhom>

      <Testing>"Changer la vie des personnes les plus fragiles.
Annihiler les situations de précarité sur les territoires."
</Testing>

      <H1Left>Avec qui ?</H1Left>

      <PMap>
      Mobiliser toutes les compétences disponibles au service des habitants des territoires. Les solutions que nous développons s’adresse aux :
      </PMap>

      <Map>
        <a href="https://placeholder.com">
          <img src="https://via.placeholder.com/816" alt="" />
        </a>
      </Map>
    </Body>
  );
}

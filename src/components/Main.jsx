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
        <li>de l’abondance à la frugalité</li>
        <br/>
        <li>de l’économie de la rareté et exclusive à l’économie du bien commun et inclusive</li>
        <br/>
        <li>du pyramidal à l’horizontal et au collaboratif</li>
        <br/>
        <li>du progrès au bien-être de chacune</li>
        </ul>

      </PTitle>

      <H1Right>Auprès de qui ?</H1Right>

      <ContainerWhom>
        <PWhom>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          voluptatum corrupti asperiores dolore ullam quo sunt ratione, aperiam
          at adipisci tenetur iure reprehenderit minus voluptatem iusto! Iusto
          laudantium ipsa architecto. Quaerat minus iure ullam quia dignissimos
          et aspernatur illum velit mollitia rerum consequatur, ipsa ipsum,
          culpa voluptatem. Accusamus unde repudiandae pariatur explicabo, modi
          at eos veritatis nulla dolore. Necessitatibus, possimus! Nesciunt
          totam repudiandae sit quia possimus iste ut quo fugit assumenda soluta
          corrupti tempora error fuga, vel molestiae perspiciatis blanditiis in
          suscipit id animi eveniet officiis beatae? Asperiores, quae
          praesentium. Quasi, laborum optio obcaecati illum laboriosam
          exercitationem, laudantium molestiae sequi adipisci fugit nulla
          repellendus pariatur minima. Modi, nihil corporis nobis cumque
          veritatis facilis ipsa fugit delectus cupiditate dolores eligendi
          dolore. Esse ea cupiditate ut, reiciendis accusamus rem temporibus
          dolorem deleniti eos quae eligendi libero consequatur delectus minus
          quod numquam mollitia? Consectetur, nulla recusandae asperiores
          adipisci pariatur odit tenetur eveniet quos.
        </PWhom>

        <ImgWhom
          src="https://www.sobizhub.org/images/lab%C3%A9lisation_FI_roubaix.jpg"
          alt="Présentation projet french impact"
        />
      </ContainerWhom>

      <H2Title>Lorem ipsum dolor set</H2Title>

      <PTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        est! Soluta, magni odio facilis provident quae ducimus perspiciatis
        tenetur ab! Consectetur praesentium maiores ut corporis ratione quae?
        Laudantium, amet commodi.Cum hic sit debitis eius dignissimos dolores
        quas illo, placeat, nam qui, id exercitationem. A sint ab asperiores
        voluptatibus? Quo repellat nulla natus nobis nostrum facilis earum
        assumenda velit eaque!
      </PTitle>

      <H1Left>Notre territorialité</H1Left>

      <PMap>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        architecto labore cupiditate perspiciatis quibusdam repellat distinctio
        deserunt voluptatibus harum, sed provident, quas quam neque facilis vel
        tempora hic. Necessitatibus, ullam? Impedit repellat commodi dolorem
        doloribus saepe asperiores quis praesentium expedita esse! Qui officia
        nemo placeat recusandae voluptatem! Mollitia omnis consectetur debitis
        voluptatibus! Tenetur, laudantium consequuntur hic eveniet eaque
        distinctio? Similique. Placeat sunt architecto expedita tempora officiis
        at quaerat distinctio aliquid aspernatur suscipit sed fugit, perferendis
        libero. Provident, quibusdam minus, sapiente fuga at rerum modi saepe
        neque enim sunt corporis eius.
      </PMap>

      <Map>
        <a href="https://placeholder.com">
          <img src="https://via.placeholder.com/816" alt="" />
        </a>
      </Map>
    </Body>
  );
}

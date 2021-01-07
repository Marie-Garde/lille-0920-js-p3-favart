import React from "react";
import HeaderMenu01 from "./Header/HeaderMenu01";
import HeaderBody01 from "./Header/HeaderBody01";
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
} from "../styled-components/MainStyle";

export default function MainPage() {
  return (
    <>
      <HeaderMenu01 />
      <HeaderBody01 />
      <Body>
        <H1Left>Pourquoi FAVART ?</H1Left>
        <ContainerWhy>
          <ImgWhy
            src="https://pbs.twimg.com/media/D7G9CRpWwAAUVCV.jpg"
            alt="Représentants de l'entreprise FAVART"
          ></ImgWhy>
          <PWhy>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis eveniet sit unde magnam magni consequuntur omnis
            blanditiis exercitationem aliquam officiis reprehenderit numquam
            quasi dolorum, eum quibusdam maiores nam quidem rem. Minima
            aspernatur sunt numquam tempora impedit architecto similique
            delectus fugiat maiores, quod, veniam sint a. Dolore expedita sit
            possimus. Fugit ducimus voluptatum soluta eum, consequatur rem
            officiis maiores velit aut. Accusamus nostrum, veritatis deserunt
            vero asperiores incidunt quidem maxime sunt optio fugit tempora
            aspernatur minima adipisci perspiciatis distinctio. In quibusdam,
            veritatis totam perspiciatis sequi accusamus omnis aut commodi quia
            quisquam. Quas ab minima adipisci libero rem veniam error dolor est
            ipsam saepe dicta, doloribus nulla corrupti voluptas culpa harum
            accusamus repudiandae perferendis enim architecto a quos magnam ad
            similique! Autem! Asperiores expedita exercitationem atque rem.
            Nihil harum fugit illum aliquid perferendis non, corrupti alias at
            laudantium magnam laborum dolorum, hic nam dolor mollitia amet. Quod
            ex atque facilis cupiditate dolorem?
          </PWhy>
        </ContainerWhy>

        <H2Title>Lorem ipsum dolet set</H2Title>

        <PTitle>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          doloremque obcaecati, nam facilis odio officia deserunt voluptate quam
          earum exercitationem. Ipsam itaque non doloremque quis placeat illo
          necessitatibus nesciunt aperiam.
        </PTitle>

        <H1Right>Auprès de qui ?</H1Right>

        <ContainerWhom>
          <PWhom>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            voluptatum corrupti asperiores dolore ullam quo sunt ratione,
            aperiam at adipisci tenetur iure reprehenderit minus voluptatem
            iusto! Iusto laudantium ipsa architecto. Quaerat minus iure ullam
            quia dignissimos et aspernatur illum velit mollitia rerum
            consequatur, ipsa ipsum, culpa voluptatem. Accusamus unde
            repudiandae pariatur explicabo, modi at eos veritatis nulla dolore.
            Necessitatibus, possimus! Nesciunt totam repudiandae sit quia
            possimus iste ut quo fugit assumenda soluta corrupti tempora error
            fuga, vel molestiae perspiciatis blanditiis in suscipit id animi
            eveniet officiis beatae? Asperiores, quae praesentium. Quasi,
            laborum optio obcaecati illum laboriosam exercitationem, laudantium
            molestiae sequi adipisci fugit nulla repellendus pariatur minima.
            Modi, nihil corporis nobis cumque veritatis facilis ipsa fugit
            delectus cupiditate dolores eligendi dolore. Esse ea cupiditate ut,
            reiciendis accusamus rem temporibus dolorem deleniti eos quae
            eligendi libero consequatur delectus minus quod numquam mollitia?
            Consectetur, nulla recusandae asperiores adipisci pariatur odit
            tenetur eveniet quos.
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
          architecto labore cupiditate perspiciatis quibusdam repellat
          distinctio deserunt voluptatibus harum, sed provident, quas quam neque
          facilis vel tempora hic. Necessitatibus, ullam? Impedit repellat
          commodi dolorem doloribus saepe asperiores quis praesentium expedita
          esse! Qui officia nemo placeat recusandae voluptatem! Mollitia omnis
          consectetur debitis voluptatibus! Tenetur, laudantium consequuntur hic
          eveniet eaque distinctio? Similique. Placeat sunt architecto expedita
          tempora officiis at quaerat distinctio aliquid aspernatur suscipit sed
          fugit, perferendis libero. Provident, quibusdam minus, sapiente fuga
          at rerum modi saepe neque enim sunt corporis eius.
        </PMap>

        <Map>
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/816" alt="" />
          </a>
        </Map>
      </Body>
    </>
  );
}

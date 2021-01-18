import {
    DivCard,
  FlexBox,
  FlexBox1,
  FlexBox2,
  H1,
  P,
  Img
} from "../styled-components/RessourcePage";

import documents from "../assets/Documents/Ressource";

export default function RessourcePage() {
  return (
    <FlexBox>
      <FlexBox1></FlexBox1>
      <FlexBox2>
        {documents.map((card) => (
          <DivCard>
            <a href={card.link}>
              <Img src={card.aperçu} alt="" />
            </a>
            <H1>{card.titre}</H1>
            <P>{card.resume}</P>
          </DivCard>
        ))}
      </FlexBox2>
    </FlexBox>
  );
}

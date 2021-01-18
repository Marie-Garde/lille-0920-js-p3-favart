import {
    DivCard,
  FlexBox,
  FlexBox1,
  FlexBox2,
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
              <img src={card.aperçu} alt="" />
            </a>
            <p>{card.titre}</p>
            <p>{card.resume}</p>
          </DivCard>
        ))}
      </FlexBox2>
    </FlexBox>
  );
}

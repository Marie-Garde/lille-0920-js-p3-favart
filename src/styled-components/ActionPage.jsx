import styled from "styled-components";

export const DivInfos = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DivCards = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  background-color: #2386c9;
  border-radius: 15px;
  color: white; ;
`;

export const DivCardMiddle = styled.div`
  background-color: #122239;
  width: 30%;
  border-radius: 15px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #122239;
  color: white;
  border: none;
  height: 10vh;
  width: 16vw;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 44vw;
  margin-top: 7vh;
  cursor: pointer;
  &:hover {
    color: grey;
    transition-duration: 500ms;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  color: #122239;
  font-size: 4rem;
  margin-left: 4vw;
  margin-top: 8vh;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

export const P = styled.p`
  font-size: 1.4rem;
  text-align: left;
  line-height: 4vh;
`;

export const Ul = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  padding-right: 4vw;
  line-height: 4vh;
`;
export const Li = styled.li`
  line-height: 4vh;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  padding: 2px 16px;
`;

export const ImgContainer = styled.img`
  width: 100%;
`;
export const CardFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

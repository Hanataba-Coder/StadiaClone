import styled from 'styled-components';

export const CardSectionContainer = styled.div`
  position: relative;
  padding: 0 1.5rem;
`;

export const CardGridWrapper = styled.div`
  display: grid;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 20px;

  @media screen and (max-width: 1025px) {
    max-width: 900px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  @media screen and (max-width: 640px) {
    max-width: 500px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;

export const CardTitleWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .titleCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 25%;

    & .logo {
      max-width: 20rem;
    }

    @media screen and (max-width: 1025px) {
      padding: 0 10%;
    }

    @media screen and (max-width: 640px) {
      padding: unset;
    }
  }
`;

export const Title = styled.h1``;

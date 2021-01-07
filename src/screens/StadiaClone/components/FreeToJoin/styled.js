import styled from 'styled-components';

export const PlayOnUsContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 20px;
  height: 30rem;
`;

export const ContentWrapper = styled.div`
  background-color: rgba(232, 234, 237, 0.329);
  padding: 1.5rem;
  height: 100%;
`;

export const GridWrapper = styled.div`
  max-width: 1300px;
  height: 100%;
  width: 50%;
  display: grid;
  padding: 40px 20px;
  // grid-template-columns: repeat(12, 1fr);
  grid-gap: 50px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    width: 100%;
  }
`;

export const DetailWrapper = styled.div`
  z-index: 1;
`;

export const ImageWrapper = styled.img`
  height: 100%;
  top: 0;
  right: 0;

  position: absolute;

  // @media screen and (max-width: 1025px) {
  //   height: 18.75rem;
  // }

  @media screen and (max-width: 750px) {
    height: 10rem;
    top: unset;
    right: 0;
    bottom: 0;
  }
`;

export const PlayOnUsTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;

  @media screen and (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

export const PlayOnUsText = styled.div`
  // color: #a8adb3;
  font-size: 16px;
  margin: 10px 0px;
`;

import styled from 'styled-components';

export const PlayOnUsContainer = styled.div`
  position: relative;
  padding: 0 1.5rem;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;

  background: rgba(32, 33, 36, 1);
`;

export const GridWrapper = styled.div`
  display: grid;
  padding: 40px 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const DetailWrapper = styled.div``;

export const ImageWrapper = styled.img`
  height: 17rem;
  width: 100%;
  object-fit: contain;

  @media screen and (max-width: 1025px) {
    height: 18.75rem;
  }

  @media screen and (max-width: 640px) {
    height: 10rem;
  }
`;

export const PlayOnUsTitle = styled.h1`
  color: #fff;
  font-weight: bold;
`;

export const PlayOnUsText = styled.div`
  color: #a8adb3;
  font-size: 16px;
  margin: 10px 0px;
`;

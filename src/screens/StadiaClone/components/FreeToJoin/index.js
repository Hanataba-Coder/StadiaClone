import React from 'react';
import {
  ContentWrapper,
  PlayOnUsContainer,
  GridWrapper,
  DetailWrapper,
  ImageWrapper,
  PlayOnUsTitle,
  PlayOnUsText,
} from './styled';
import { StadiaButton } from '../../../../components/ButtonElement';

const FreeToJoin = () => {
  return (
    <PlayOnUsContainer>
      <ContentWrapper>
        <GridWrapper>
          <DetailWrapper>
            <PlayOnUsTitle>The Stadia platform is free to join</PlayOnUsTitle>
            <PlayOnUsText>
              You don’t need special hardware or an invitation to play, just the
              screens and controllers you already have. You can purchase a
              variety of great games on the Stadia store and play them through
              Wi-Fi and wired internet connections.
            </PlayOnUsText>
          </DetailWrapper>
          <div></div>
        </GridWrapper>
      </ContentWrapper>
      <ImageWrapper
        src={
          'https://www.gstatic.com/stadia/gamers/landing_page/assets/beacon_hero.png'
        }
      />
    </PlayOnUsContainer>
  );
};

export default FreeToJoin;

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

const PlayOnUs = () => {
  return (
    <PlayOnUsContainer>
      <ContentWrapper>
        <GridWrapper>
          <DetailWrapper>
            <PlayOnUsTitle>Play On Us</PlayOnUsTitle>
            <PlayOnUsText>
              Get instant access to a collection of games with a 1 month Stadia
              Pro trial
            </PlayOnUsText>
            <StadiaButton
              onClick={() =>
                window.open('https://stadia.google.com/', '_blank')
              }
            >
              Try now
            </StadiaButton>
            <PlayOnUsText>$9.99/mo after trial, cancel anytime.</PlayOnUsText>
          </DetailWrapper>
          <ImageWrapper
            src={
              'https://www.gstatic.com/stadia/gamers/landing_page/assets/pro_hero_h_2x.png'
            }
          />
        </GridWrapper>
      </ContentWrapper>
    </PlayOnUsContainer>
  );
};

export default PlayOnUs;

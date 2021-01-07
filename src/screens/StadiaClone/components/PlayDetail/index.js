import React from 'react';
import {
  Container,
  GridWrapper,
  DetailWrapper,
  ImageWrapper,
  Title,
  Text,
} from './styled';
import { StadiaButton } from '../../../../components/ButtonElement';

const PlayDetail = () => {
  return (
    <Container>
      <GridWrapper>
        <ImageWrapper
          src={
            'https://www.gstatic.com/stadia/gamers/landing_page/assets/play_anywhere@2x.jpg'
          }
        />
        <DetailWrapper>
          <Title>Play instantly across your devices</Title>
          <Text>
            Play instantly with one click You choose the screens where your
            games live. Play on compatible laptops, desktops, phones, and
            tablets. It’s up to you. And to play on TVs, grab Stadia Premiere
            Edition, available now on the Google Store.
          </Text>
          <Text>
            Stadia controller and Google Chromecast Ultra may not be available
            for purchase in your country/region. Read more.
          </Text>
          <Text>
            An internet connection speed of 10 megabits per second (Mbps) or
            greater is the minimum recommended to use Stadia. See more tips and
            tricks on how to get the best gaming experience. Learn more
          </Text>
        </DetailWrapper>
      </GridWrapper>
    </Container>
  );
};

export default PlayDetail;

import React from 'react';
import CardSection from '../CardSection';
import { StadiaButton } from '../../../../components/ButtonElement';
import StadiaLogo from '../../../../assets/image/stadiaLogo.png';
import Aux from '../../../../components/Aux';
import PlayOnUs from '../PlayOnUs';
import PlayDetail from '../PlayDetail';
import FreeToJoin from '../FreeToJoin';
import PropertyCompare from '../PropertyCompare';

const featuredGames = [
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Cyberpunk_2077_300x400.jpg',
    title: 'Cyberpunk 2077',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Immortals_Fenyx_Rising_300x400.jpg',
    title: 'Immortals Fenyx Rising',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Humankind_300x400.jpg',
    title: 'HUMANKIND',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Pac_Man_Mega_Tunnel_Battle_300x400.jpg',
    title: 'PAC-MAN Mega Tunnel Battle',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Baldurs_Gate_3_300x400.jpg',
    title: "Baldur's Gate 3",
  },
];

const AboutSection = () => {
  return (
    <Aux>
      <PlayOnUs />
      <CardSection
        cards={featuredGames}
        title={
          <div>
            <h1>Get even more games</h1>
          </div>
        }
      />
      <PlayDetail />
      <FreeToJoin />
      <PropertyCompare />
    </Aux>
  );
};

export default AboutSection;

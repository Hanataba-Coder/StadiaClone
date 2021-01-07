import React from 'react';
import CardSection from '../CardSection';
import { StadiaButton } from '../../../../components/ButtonElement';
import StadiaLogo from '../../../../assets/image/stadiaLogo.png';
import Aux from '../../../../components/Aux';

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

const freeGames = [
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
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/AttackonTitan2_FinalBattle_1x.jpg',
    title: 'Attack on Titan 2: Final Battle',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Baldurs_Gate_3_300x400.jpg',
    title: 'Immortals Fenyx Rising',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Borderlands3_1x.jpg',
    title: 'Borderlands 3',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Destiny_2__The_Collection_1x.jpg',
    title: 'Destiny 2: The Collection',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/DRAGONBALLXENOVERSE2_1x.jpg',
    title: 'Dragon Ball Xenoverse 2',
  },
];

const moreGames = [
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Little_Nightmares_1x.jpg',
    title: 'Little Nightmares',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Metro_Exodus_1x.jpg',
    title: 'Metro Exodus',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/assassinscreed_odyssey_1x.jpg',
    title: 'Assassins Creed Odyssey',
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
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/AttackonTitan2_FinalBattle_1x.jpg',
    title: 'Attack on Titan 2: Final Battle',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Baldurs_Gate_3_300x400.jpg',
    title: 'Immortals Fenyx Rising',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Borderlands3_1x.jpg',
    title: 'Borderlands 3',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Destiny_2__The_Collection_1x.jpg',
    title: 'Destiny 2: The Collection',
  },
  {
    photo:
      'https://www.gstatic.com/stadia/gamers/landing_page/assets/games/DRAGONBALLXENOVERSE2_1x.jpg',
    title: 'Dragon Ball Xenoverse 2',
  },
];

const GameSection = () => {
  return (
    <Aux>
      <CardSection
        cards={featuredGames}
        title={
          <div>
            <h1>Featured games</h1>
          </div>
        }
      />
      <CardSection
        cards={freeGames}
        title={
          <div className="titleCard">
            <img className="logo" src={StadiaLogo} alt="stadia" />
            <h1>Play games in all their glory for free with Stadia Pro</h1>
            <span>
              Free games. More every month. Keep them as long as you’re a Stadia
              Pro member.1
            </span>
          </div>
        }
      />
      <CardSection
        cards={moreGames}
        title={
          <div className="titleCard">
            <StadiaButton
              onClick={() =>
                window.open('https://stadia.google.com/', '_blank')
              }
            >
              Try Stadia Pro free for 1 month
            </StadiaButton>
            <span>$9.99/mo after trial, cancel anytime.</span>
            <h1>More great games are waiting in the Stadia store</h1>
            <span>
              The games you buy go from screen… to screen… to screen.{' '}
              <a href="https://support.google.com/stadia/answer/9578631">
                Compatible
              </a>{' '}
              laptops and phones. TVs. You have what it takes.
            </span>
          </div>
        }
      />
    </Aux>
  );
};

export default GameSection;

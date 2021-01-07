import React from 'react';
import {
  StadiaHeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  Logo,
  TabWrapper,
} from './styled';
import StadiaLogo from '../../../../assets/image/stadiaLogo.png';
import { StadiaButton } from '../../../../components/ButtonElement';

const StadiaHeader = ({ tab, tabChanged }) => {
  return (
    <StadiaHeaderContainer>
      <HeaderWrapper>
        <LogoWrapper>
          {' '}
          <Logo src={StadiaLogo} />{' '}
        </LogoWrapper>
        <div className="onlyBigScreen">
          <TabWrapper
            style={{ color: tab === 1 ? 'red' : 'unset' }}
            onClick={() => tabChanged(1)}
          >
            About Stadia
          </TabWrapper>
          <TabWrapper
            style={{ color: tab === 2 ? 'red' : 'unset' }}
            onClick={() => tabChanged(2)}
          >
            Games
          </TabWrapper>
        </div>
        <div>
          <TabWrapper
            onClick={() => window.open('https://stadia.google.com/', '_blank')}
            style={{ color: 'red' }}
          >
            Sign in
          </TabWrapper>
          <StadiaButton
            onClick={() => window.open('https://stadia.google.com/', '_blank')}
            style={{ display: 'inline', fontSize: '.8em', padding: '.5em' }}
          >
            Try now
          </StadiaButton>
        </div>
      </HeaderWrapper>
      <HeaderWrapper
        style={{ justifyContent: 'center' }}
        className="smallScreen"
      >
        <div>
          <TabWrapper
            style={{ color: tab === 1 ? 'red' : 'unset' }}
            onClick={() => tabChanged(1)}
          >
            About Stadia
          </TabWrapper>
          <TabWrapper
            style={{ color: tab === 2 ? 'red' : 'unset' }}
            onClick={() => tabChanged(2)}
          >
            Games
          </TabWrapper>
        </div>
      </HeaderWrapper>
    </StadiaHeaderContainer>
  );
};

export default StadiaHeader;

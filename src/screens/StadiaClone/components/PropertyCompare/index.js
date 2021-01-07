import React from 'react';
import { Container, GridWrapper, DetailWrapper, Title, Text } from './styled';
import StadiaLogo from '../../../../assets/image/stadiaLogo.png';

const PropertyCompare = () => {
  return (
    <Container>
      <GridWrapper>
        <DetailWrapper style={{ padding: '0 40px' }}>
          <Title>Claim games for free with Stadia Pro</Title>
          <Text>
            You can get free games with Stadia Pro. Games are available the
            moment you subscribe, and every month you stay subscribed you get
            more free games.
          </Text>
        </DetailWrapper>
        <DetailWrapper>
          <div className="titleCard">
            <img className="logo" src={StadiaLogo} alt="stadia" />
          </div>
          <ul>
            <li>
              <div>
                Access to free games instantly, with more added every month
              </div>
            </li>
            <li>
              <div>Exclusive discounts</div>
            </li>
            <li>
              <div>Play in up to 4K HDR with 5.1 surround sound</div>
            </li>
          </ul>
        </DetailWrapper>
      </GridWrapper>
    </Container>
  );
};

export default PropertyCompare;

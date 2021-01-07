import React from 'react';
import { Card1Container, PhotoWrapper, CardDetail } from './styled';

const Card = ({ photo, title }) => {
  return (
    <Card1Container>
      <PhotoWrapper src={photo} />
      <CardDetail>{title}</CardDetail>
    </Card1Container>
  );
};

export default Card;

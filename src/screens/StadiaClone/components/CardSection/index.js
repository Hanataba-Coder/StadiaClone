import React from 'react';
import {
  CardGridWrapper,
  CardSectionContainer,
  CardTitleWrapper,
  Title,
} from './styled';
import Card from '../Card';

const CardSection = ({ cards, title }) => {
  return (
    <CardSectionContainer>
      <CardTitleWrapper>{title}</CardTitleWrapper>
      <CardGridWrapper>
        {cards &&
          cards.map((card) => <Card photo={card.photo} title={card.title} />)}
      </CardGridWrapper>
    </CardSectionContainer>
  );
};

export default CardSection;

import React from 'react';
import { FooterWrapper, Link, ContentWrapper } from './styled';
const StadiaFooter = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <Link href={'https://stadia.google.com/privacy'}>Privacy</Link>
        <Link href={'https://stadia.google.com/tos'}>Terms of Service</Link>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default StadiaFooter;

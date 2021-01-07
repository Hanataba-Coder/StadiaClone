import React, { useState } from 'react';
import Aux from '../../components/Aux';
import AboutSection from './components/AboutSection';
import GameSection from './components/GameSection';
import StadiaHeader from './components/StadiaHeader';
import StadiaFooter from './components/StadiaFooter';

const StadiaClone = () => {
  const [Tab, setTab] = useState(1);

  const onSetChangeTab = (tabNum) => {
    setTab(tabNum);
  };

  return (
    <Aux>
      <StadiaHeader tab={Tab} tabChanged={onSetChangeTab} />
      {Tab === 1 ? <AboutSection /> : Tab === 2 ? <GameSection /> : null}
      <StadiaFooter />
    </Aux>
  );
};

export default StadiaClone;

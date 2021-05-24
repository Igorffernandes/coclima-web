import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import FilterButton from 'components/FilterButton';

import IconTree from 'assets/icons/overviewTree.png';
import IconCarbon from 'assets/icons/overviewCarbon.png';
import fotoexemplo from 'assets/Images/fotoexemplo1.png';

import {
  Container,
  OptionsDiv,
  Header,
  Title,
  SubTitle,
  CardsDiv,
  TreeDiv,
  ValueDiv,
  Value,
  DescriptionDiv,
  Icon,
  DescriptionText,
  InfoValue,
  CarbonDiv,
  TextHeaderDiv,
  GeneralDiv,
  GeneralText,
  GeneralButton,
  PhotoGrid,
  PhotoPrevew,
} from './styles.js';

const containerStyle = {
  paddingLeft: '350px',
  width: '810px',
  height: '100vh',
};

const center = {
  lat: -25.387378,
  lng: -51.470726,
};

const Planting = () => {
  const [photos, setPhotos] = useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
  const [info, setInfo] = useState({
    three: 13,
    carbon: 1690,
    capital: 74000.32
  });

  return (
    <Container>
      <OptionsDiv>
        <Header>
          <TextHeaderDiv>
            <Title>Nossos plantios</Title>
            <SubTitle>Confira como estão as arvóres plantadas.</SubTitle>
          </TextHeaderDiv>
          <FilterButton />
        </Header>
        <CardsDiv>
          <TreeDiv>
            <ValueDiv>
              <Value>{info.three}</Value>
            </ValueDiv>
            <DescriptionDiv>
              <Icon iconPath={IconTree}/>
              <DescriptionText>Árvores plantadas</DescriptionText>
            </DescriptionDiv>
          </TreeDiv>
          <CarbonDiv>
            <ValueDiv>
              <Value>{info.carbon}</Value>
              <InfoValue>g</InfoValue>
            </ValueDiv>
            <DescriptionDiv>
              <Icon iconPath={IconCarbon}/>
              <DescriptionText>Carbono Compensado</DescriptionText>
            </DescriptionDiv>
          </CarbonDiv>
        </CardsDiv>
        <GeneralDiv>
          <GeneralText>Fotos</GeneralText>
          <GeneralButton>Ver Todas</GeneralButton>
        </GeneralDiv>
        <PhotoGrid>
          {photos.map(item => {
            return (
              <PhotoPrevew src={fotoexemplo}/>
            )
          })}
        </PhotoGrid>
        <GeneralDiv>
          <GeneralText>Dúvidas</GeneralText>
          <GeneralButton>saber mais</GeneralButton>
        </GeneralDiv>
      </OptionsDiv>
      <LoadScript googleMapsApiKey="AIzaSyCRtT4qyUroFx_iVdOmIQS9cbyD0Y2J6AQ">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default React.memo(Planting);

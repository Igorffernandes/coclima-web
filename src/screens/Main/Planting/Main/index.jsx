import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';

import Filter from 'components/Filter';

import IconTree from 'assets/icons/overviewTree.png';
import IconCarbon from 'assets/icons/overviewCarbon.png';
import circledicon from 'assets/icons/circledIcon.png';

import { fetchPlantations } from 'services/plantations';
import { fetchArchives } from 'services/archives.js';

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
  const [photos, setPhotos] = useState([])
  const [info, setInfo] = useState({
    trees: 0,
    carbon: 0,
  });
  const [loading, setLoading] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const fetchPlantationData = async () => {
    try {
      setLoading(true);
      let queryObject = {
      };
      if(selectedCompanies.length > 0){
        queryObject.company_id = selectedCompanies;
      }
      const plantationsData = await fetchPlantations(queryObject);
      setInfo(plantationsData);
    } catch(err){
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const fetchPhotos = async () => {
    try{
      let queryObject = {
        type: 'image',
      };
      if(selectedCompanies.length > 0){
        queryObject.company_id = selectedCompanies;
      }
      const archivesData = await fetchArchives(queryObject);
      setPhotos(archivesData);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPlantationData();
    fetchPhotos();
  }, []);

  const history = useHistory();

  return (
    <Container>
      <OptionsDiv>
        <Header>
          <TextHeaderDiv>
            <Title>Nossos plantios</Title>
            <SubTitle>Confira como estão as arvóres plantadas.</SubTitle>
          </TextHeaderDiv>
          <Filter 
            selectedCompanies={selectedCompanies} 
            setSelectedCompanies={setSelectedCompanies}
            closeCallback={async () => {
              fetchPhotos();
              fetchPlantationData();
            }}
          />
        </Header>
        <CardsDiv>
          <TreeDiv>
            <ValueDiv>
              <Value>{info?.trees || 0}</Value>
            </ValueDiv>
            <DescriptionDiv>
              <Icon iconPath={IconTree}/>
              <DescriptionText>Árvores plantadas</DescriptionText>
            </DescriptionDiv>
          </TreeDiv>
          <CarbonDiv>
            <ValueDiv>
              <Value>{info?.carbon || 0}</Value>
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
          <GeneralButton onClick={() => history.push('/photos')}>Ver Todas</GeneralButton>
        </GeneralDiv>
        <PhotoGrid>
          {photos.length > 0 && photos.map(item => {
            return (
              <PhotoPrevew src={`${item.data}`} />
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
          <>
            {info?.plantation?.length > 0 && info.plantation.map(item => 
            <Marker position={item.geolocation} icon={circledicon}/>)}
          </>
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default React.memo(Planting);

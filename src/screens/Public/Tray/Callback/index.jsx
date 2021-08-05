import React, { useEffect, useState } from 'react';

import coclimaLogo from '../../../../assets/Images/logoCoClima.png';
import colors from '../../../../styles/colors';
import { consumerKey } from '../../../../config/constants';
import { getStore } from '../../../../services/callback';
import Loader from "react-loader-spinner";

import Image1 from '../../../../assets/Images/image1.png'
import Image2 from '../../../../assets/Images/image2.png'
import Image3 from '../../../../assets/Images/image3.png'
import Image4 from '../../../../assets/Images/image4.png'
import image_item from '../../../../assets/Images/image_auth.png'

import Button from "@material-ui/core/Button";

import {
  Container,
  Logo,
  Header,
  Description,
  BulletDescription,
  DescriptionLink,
  Body,
  LeftContainer,
  RightContainer,
  Item,
  ImageItem,
  Pin,
  Image,
  ItemWithImage,
  LeftItemContainer,
  ImageLeft,
  Loading,
} from './styles';



const Callback = () => {
  const fullUrl = new URL(window.location.href);
  const url = fullUrl.searchParams.get("url");
  const store = fullUrl.searchParams.get("store") || null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('\n\n\n', fullUrl, store, '\n\n\n');
    if (store) {
      fetchStore();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchStore = async () => {
    const result = await getStore(store);

    if (result) {
      window.location.assign('/');
    }
  }

  const handleInstallApp = async () => {
    const callbackUrl = `${url}/auth.php?response_type=code&consumer_key=${consumerKey}&callback=https://parceiros.coclima.com/callback/tray/auth`;

    window.location.assign(callbackUrl);
  }

  return (
    <Container>
      {loading && 
      <Loading>
        <Loader
          type="TailSpin"
          color="#0EC164"
          height={100}
          width={100}
        />  
      </Loading>}
      <Header>
        <Logo src={coclimaLogo} />
        <Description><b>Aplicativo</b></Description>
      </Header>
      <Body>
        <LeftContainer>
          <ItemWithImage>
            <LeftItemContainer>
              <Item>
                <Pin />
                <Description>Transforme compras em árvores</Description>
              </Item>
              <Item>
                <Pin />
                <Description>Fidelize seus clientes</Description>
              </Item>
              <Item>
                <Pin />
                <Description>Mostre que você se importa</Description>
              </Item>
            </LeftItemContainer>
            <RightContainer>
              <ImageLeft src={image_item}/>
            </RightContainer>
          </ItemWithImage>
          <Description>Com o app Coclima, sua empresa <b>compensa a pegada de carbono</b> do seu e-commerce plantando árvores em parceria com comunidades locais.  A Coclima é um jeito fácil, barato e atraente de incluir a <b>agenda ESG</b> (Ambiente, Social e Governança) na sua empresa.</Description>
          <Description>Tudo isso <b>sem custos fixos</b> e com o <b>mínimo de impacto na exeperiência do usuário.</b></Description>
          <Description>E você ainda:</Description>
          <BulletDescription> • Tem acesso a relatórios de monitoramento de impacto;</BulletDescription>
          <BulletDescription> • Ganha o selo Carbono Zero para usar em toda sua comunicação;</BulletDescription>
          <BulletDescription> • Passa a fazer parte de uma comunidade de empresas e consumidores conscientes;</BulletDescription>
          <DescriptionLink onClick={() => window.open('https://coclima.com')}>Clique aqui para saber mais</DescriptionLink>
        </LeftContainer>
        <RightContainer>
          <ImageItem>
            <Image src={Image1}/>
            <Image src={Image2}/>
          </ImageItem>
          <ImageItem>
            <Image src={Image3}/>
            <Image src={Image4}/>
          </ImageItem>
        </RightContainer>
      </Body>
      <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: 10,
            color: colors.brancoDaMassa,
            borderRadius: 6,
            fontWeight: 'bold',
            fontFamily: 'Inter',
            paddingTop: 8,
            paddingBottom: 8,
            width: '30%',
            minWidth: 200,
            alignSelf: 'center',
          }}
          onClick={handleInstallApp}
        >
          Instale agora
        </Button>
    </Container>
  );
};

export default Callback;
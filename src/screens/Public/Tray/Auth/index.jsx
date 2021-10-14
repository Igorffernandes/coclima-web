import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import InputTextField from '../../../../components/InputTextField';
import coclimaLogo from '../../../../assets/Images/logoCoClima.png';
import colors from '../../../../styles/colors';
import { createAssociate } from '../../../../services/callback';
import { useToast } from '../../../../hooks/ToastContext';

import {
  Container,
  Logo,
  Description,
  FormItem,
  FormTitle,
  ContainerUp,
  ContainerDown,
  Spacer,
  FormLeft,
  FormRight,
  FinishButton,
} from './styles';

const Auth = () => {
  const fullUrl = new URL(window.location.href);
  const code = fullUrl.searchParams.get("code") || null;
  const api_address = fullUrl.searchParams.get("api_address") || null;
  const store = fullUrl.searchParams.get("store") || null;
  const { addToast } = useToast();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [cpfcnpj, setCpfcnpj] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [site, setSite] = useState('');

  const handleCreateAccount = async () => {
    if (password !== repeatPassword) {
      alert("As senhas devem ser iguais!");
      return;
    }

    const body = {
      username,
      email,
      name: company,
      password,
      cpfcnpj: cpfcnpj.replace(/\D/g, ''),
      street,
      number,
      city,
      state,
      cep: cep.replace(/\D/g, ''),
      phone: phone.replace(/\D/g, ''),
      site,
      store_id: store,
      code,
      api_address,
    }

    try {
      await createAssociate(body);

      addToast({
        type: 'success',
        title: `Cadastro efetuado com sucesso!`,
      });

      window.location.assign('/');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Ops algo deu errado',
        description: 'Tente novamente!',
      });
    }
  }

  return (
    <Container>
      <ContainerUp>
        <Logo src={coclimaLogo} />
        <Spacer />
        <Description> Solução ESG para lojas online. Sua loja compensa a pegada de carbono das transações com o plantio de árvores junto a comunidades locais. Inclui o selo Carbono Zero, acesso a relatórios de monitoramento de impacto  e material de comunicação e marketing.</Description>
        <Spacer />
        <Description><b>Cadastre-se para se integrar a nossa plataforma</b></Description>
      </ContainerUp>
      <ContainerDown>
        <FormLeft>
          <FormItem>
            <FormTitle>Seu Nome</FormTitle>
            <InputTextField
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Email</FormTitle>
            <InputTextField
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Senha</FormTitle>
            <InputTextField
              type={'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Repita a senha</FormTitle>
            <InputTextField
              type={'password'}
              value={repeatPassword}
              onChange={(event) => setRepeatPassword(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Empresa</FormTitle>
            <InputTextField
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>CPF ou CNPJ</FormTitle>
            <InputTextField
              value={cpfcnpj}
              onChange={(event) => setCpfcnpj(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Rua</FormTitle>
            <InputTextField
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
          </FormItem>
        </FormLeft>
        <FormRight>
          <FormItem>
            <FormTitle>Numero</FormTitle>
            <InputTextField
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Cidade</FormTitle>
            <InputTextField
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Estado</FormTitle>
            <InputTextField
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>CEP</FormTitle>
            <InputTextField
              mask={'99999-999'}
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Telefone</FormTitle>
            <InputTextField
              mask={'(99) 99999-9999'}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Site</FormTitle>
            <InputTextField
              value={site}
              onChange={(event) => setSite(event.target.value)}
            />
          </FormItem>
        </FormRight>
      </ContainerDown>
      <FinishButton
        variant="contained"
        color="primary"
        onClick={handleCreateAccount}
      >
        Finalizar Integração
      </FinishButton>
    </Container>
  );
};

export default Auth;

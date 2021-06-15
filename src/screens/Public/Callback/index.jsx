import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import InputTextField from '../../../components/InputTextField';
import coclimaLogo from '../../../assets/Images/logoCoClima.png';
import colors from '../../../styles/colors';
import { createAssociate } from '../../../services/callback';
import { useToast } from '../../../hooks/ToastContext';

import Button from "@material-ui/core/Button";

import {
  Container,
  Logo,
  Header,
  Description,
  FormItem,
  FormTitle,
  Form,
} from './styles';

const Callback = () => {
  const { addToast } = useToast();
  const location = useLocation();
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
  const [site, setSite] = useState('');
  const [apiAddress, setApiAddress] = useState(location.state.api_address);
  const [code, setCode] = useState(location.state.code);

  useEffect(() => {
    console.log(code, apiAddress);
  })

  const handleCreateAccount = async () => {
    const body = {
      username,
      email,
      name: company,
      cpfcnpj: cpfcnpj.replace(/\D/g, ''),
      street,
      number,
      city,
      state,
      cep: cep.replace(/\D/g, ''),
      phone: phone.replace(/\D/g, ''),
      site,
      code: '252d00beb0446664e29a53bbd87af1e41faed399b75a24d7b8a246ee247cff93',
      api_address: 'https://trayparceiros.commercesuite.com.br/web_api',
    }

    try {
      await createAssociate(body);
      addToast({
        type: 'success',
        title: `Cadastro efetuado com sucesso!`,
      });
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
      <Header>
        <Logo src={coclimaLogo} />
        <Description>Cadastre-se para se integrar a nossa plataforma</Description>
      </Header>
      <Form>
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
          <FormTitle>Empresa</FormTitle>
          <InputTextField
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </FormItem>
        <FormItem>
          <FormTitle>CPF ou CNPJ</FormTitle>
          <InputTextField
            mask={'999.999.999/9999-99'}
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
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: 20,
            color: colors.brancoDaMassa,
            borderRadius: 6,
            fontWeight: 'bold',
            fontFamily: 'Inter',
            paddingTop: 8,
            paddingBottom: 8,
            width: '100%',
            alignSelf: 'center',
          }}
          onClick={handleCreateAccount}
        >
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Callback;
import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import {createCompany} from 'services/companies';
import { useToast } from 'hooks/ToastContext';


const AddEmpresaModal = ({visible, onClose, handleButton}) => {
  const { addToast } = useToast();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpfcnpj, setCpfcnpj] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [cep, setCep] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')

  const createNewCompany = async () => {
    try{
      const newCompany = {
        name,
        email,
        cpfcnpj,
        street,
        number,
        city,
        state,
        cep,
        phone,
        site,
      }
      await createCompany(newCompany);
      handleButton();
    } catch(err){
      if(err.response?.data?.msg){
        addToast({
          type: 'error',
          title: `Error`,
          description: err.response.data.msg,
        });
      }
      console.log(err);
    } 
  }

  return  <BaseModal 
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Adicionar nova  empresa
                </Styled.TextTitle>
                <Styled.FormBox>
                  <Styled.FormDiv>
                    <Styled.FormDivCol>
                      <Styled.TextLabel>
                        Nome
                      </Styled.TextLabel>
                      <Styled.MaterialInput 
                        value={name}
                        onChange={(value) => setName(value.target.value)}
                        disableUnderline/>
                    </Styled.FormDivCol>
                    <Styled.FormDivCol>
                    <Styled.TextLabel>
                      Email
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={email}
                      onChange={(value) => setEmail(value.target.value)}
                      disableUnderline/>
                    </Styled.FormDivCol>
                  </Styled.FormDiv>
                  <Styled.FormDiv>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      CPFCNPJ
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={cpfcnpj}
                      onChange={(value) => setCpfcnpj(value.target.value)}
                      disableUnderline/>
                  </Styled.FormDivCol>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      Rua
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={street}
                      onChange={(value) => setStreet(value.target.value)}
                      disableUnderline/>
                    </Styled.FormDivCol>
                  </Styled.FormDiv>
                  <Styled.FormDiv>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      Numero
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={number}
                      onChange={(value) => setNumber(value.target.value)}
                      disableUnderline/>
                  </Styled.FormDivCol>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      Cidade
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={city}
                      onChange={(value) => setCity(value.target.value)}
                      disableUnderline/>
                    </Styled.FormDivCol>
                  </Styled.FormDiv>
                  <Styled.FormDiv>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      Estado
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={state}
                      onChange={(value) => setState(value.target.value)}
                      disableUnderline/>
                  </Styled.FormDivCol>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      CEP
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={cep}
                      onChange={(value) => setCep(value.target.value)}
                      disableUnderline/>
                    </Styled.FormDivCol>
                  </Styled.FormDiv>
                  <Styled.FormDiv>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      Telefone
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={phone}
                      onChange={(value) => setPhone(value.target.value)}
                      disableUnderline/>
                  </Styled.FormDivCol>
                  <Styled.FormDivCol>
                    <Styled.TextLabel>
                      Site
                    </Styled.TextLabel>
                    <Styled.MaterialInput 
                      value={site}
                      onChange={(value) => setSite(value.target.value)}
                      disableUnderline/>
                  </Styled.FormDivCol>
                  </Styled.FormDiv>
                </Styled.FormBox>
                <Styled.ViewButton onClick={createNewCompany}>
									<Styled.TextButton>
                    ADICIONAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

AddEmpresaModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    handleButton: PropTypes.func,
  }

export default AddEmpresaModal;
import BaseModal from 'components/BaseModal';
import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useDropzone } from 'react-dropzone';
import { editCompany, fetchCompany } from 'services/companies';
import { useToast } from 'hooks/ToastContext';

import { companyRoles } from 'config/constants';

const EditEmpresaModal = ({visible, onClose, companyID, handleButton}) => {
  const { addToast } = useToast();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpfcnpj, setCpfcnpj] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [complement, setComplement] = useState('')
  const [district, setDistrict] = useState('')
  const [cep, setCep] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState()

  useEffect(() => {
    fetchDataCompany();
  }, [companyID]);

  const fetchDataCompany = async () => {
    const result = await fetchCompany(companyID);

    setName(result.name);
    setEmail(result.email);
    setCpfcnpj(result.cpfcnpj);
    setStreet(result.street);
    setNumber(result.number);
    setCity(result.city);
    setState(result.state);
    setComplement(result.complement);
    setDistrict(result.district);
    setCep(result.cep);
    setPhone(result.phone);
    setSite(result.site);
    setRole(companyRoles.find(item => item.value === result.role).value);
    setImage(result.image);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
			reader.onload = () => {
			   setImage(reader.result)
				}
    })
    
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop, 
    accept: 'image/jpeg, image/png, image/jpg'
  })

  const createNewCompany = async () => {
    try{
      const newCompany = {
        name,
        email,
        cpfcnpj,
        street,
        number,
        complement,
        district,
        city,
        state,
        cep,
        phone,
        site,
        role,
        image,
      }

      await editCompany(newCompany, companyID);
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
                        Complemento
                      </Styled.TextLabel>
                      <Styled.MaterialInput 
                        value={complement}
                        onChange={(value) => setComplement(value.target.value)}
                        disableUnderline/>
                    </Styled.FormDivCol>
                  </Styled.FormDiv>
                  <Styled.FormDiv>
                    <Styled.FormDivCol>
                      <Styled.TextLabel>
                        Bairro
                      </Styled.TextLabel>
                      <Styled.MaterialInput 
                        value={district}
                        onChange={(value) => setDistrict(value.target.value)}
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
                  <Styled.FormDiv>
                    <Styled.FormDivCol>
                      <Styled.TextLabel>
                        Tipo de cadastro
                      </Styled.TextLabel>
                      <Styled.MaterialSelect
                        value={role}
                        onChange={(value) => setRole(companyRoles.find(item => item.value === value.target.value).value)}
                        disableUnderline>
                          {companyRoles.map(item => (
                            <option value={item.value}>{item.label}</option>
                          ))}
                      </Styled.MaterialSelect>
                    </Styled.FormDivCol>
                    <Styled.FormDivCol>
                      <Styled.TextLabel>
                        Carregue sua logo
                      </Styled.TextLabel>
                      <Styled.ArchiveBox {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <Styled.TextBody>
                            Arraste sua foto aqui ou clique para pesquisar!
                        </Styled.TextBody>
                      </Styled.ArchiveBox>
                    </Styled.FormDivCol>
                  </Styled.FormDiv>
                </Styled.FormBox>
                <Styled.ViewButton onClick={createNewCompany}>
									<Styled.TextButton>
                    EDITAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

EditEmpresaModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    companyID: PropTypes.number,
    handleButton: PropTypes.func,
  }

export default EditEmpresaModal;
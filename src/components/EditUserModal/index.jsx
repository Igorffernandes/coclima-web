import BaseModal from 'components/BaseModal';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { editUser, fetchUser } from 'services/users';
import Filter from 'components/Filter';
import { userRoles } from 'config/constants';

const AddUserModal = ({visible, onClose, userId, handleButton}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCompanies, setSelectedCompanies] = useState([])
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

  const fetchUserData = async () => {
    const result = await fetchUser(userId);

    setName(result.name)
    setEmail(result.email)
    setSelectedCompanies([result.company_id])
    setRole(result.role)
  }
  
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleAdicionar(){
    try{
      const newData = {
        name,
        email,
        role,
        company_id: selectedCompanies[0],
        password,
      }

      await editUser(newData, userId);

      handleButton();
    } catch(err) {
      console.log(err);
    }
  }

  return  <BaseModal
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Editar Usuário
                </Styled.TextTitle>
                <Styled.FormBox>
                  <Styled.CoordFormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Nome
                      </Styled.TextLabel>
                      <Styled.MaterialInput
                        value={name}
                        onChange={(value) => setName(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Email
                      </Styled.TextLabel>
                      <Styled.MaterialInputSmall
                        value={email}
                        onChange={(value) => setEmail(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                  </Styled.CoordFormBox>
                  <Styled.CoordFormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Tipo de Usuário
                      </Styled.TextLabel>
                      <Styled.MaterialSelect
                        value={role}
                        onChange={(value) => setRole(userRoles.find(item => item.value === value.target.value).value)}
                        disableUnderline>
                          {userRoles.map(item => (
                            <option value={item.value}>{item.label}</option>
                          ))}
                      </Styled.MaterialSelect>
                    </Styled.FormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Senha
                      </Styled.TextLabel>
                      <Styled.MaterialInputSmall 
                        value={password}
                        onChange={(value) => setPassword(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                    </Styled.CoordFormBox>
                  </Styled.FormBox>
                  <Styled.DivFilter>
                    <Filter
                      type={'company'}
                      value={'Empresa'}
                      selectedCompanies={selectedCompanies} 
                      setSelectedCompanies={setSelectedCompanies}
                      singleCompany={true}
                    />
                  </Styled.DivFilter>
                <Styled.ViewButton onClick={handleAdicionar}>
									<Styled.TextButton>
                    ADICIONAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

AddUserModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    handleButton: PropTypes.func,
  }

export default AddUserModal;
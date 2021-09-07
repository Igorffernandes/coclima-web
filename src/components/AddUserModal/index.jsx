import BaseModal from 'components/BaseModal';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { createUser } from 'services/users';
import Filter from 'components/Filter';
import { userRoles } from 'config/constants';
import { useToast } from '../../hooks/ToastContext.jsx';

const AddUserModal = ({visible, onClose, handleButton}) => {
  const { addToast } = useToast();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCompanies, setSelectedCompanies] = useState([])
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

  async function validateFields() {
    let message;

    if (name.length === 0) return 'Nome deve ser valido!';
    
    if (email.length === 0) return 'Email deve ser valido!';

    if (role.length === 0) return 'Tipo de Usuário deve ser valido!';

    if (password.length === 0) return 'Senha deve ser valido!';

    if (selectedCompanies.length === 0) return 'Empresa deve ser valido!';

    return null;
  }

  async function handleAdicionar(){
    const validate = await validateFields();

    if (validate) {
      addToast({
        type: 'error',
        title: 'Ops!',
        description: `${validate}`,
      });

      return false;
    }

    try{
      const newData = {
        name,
        email,
        role,
        company_id: selectedCompanies[0],
        password,
      }

      await createUser(newData);

      handleButton();
    } catch(err) {
      addToast({
        type: 'error',
        title: 'Ops!',
        description: `${err.message}`,
      });
    }
  }

  return  <BaseModal
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Adicionar novo Usuário
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

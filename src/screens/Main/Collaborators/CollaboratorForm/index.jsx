import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import Checkbox from '@material-ui/core/Checkbox';

import CreateView from 'components/CreateView';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import TextField from '@material-ui/core/TextField';
import fields from './fields';
import CustomButton from 'components/CustomButtons/Button';
import CardBody from 'components/Card/CardBody';
import { civilStateOptions } from 'config/constants';

import { useToast } from 'hooks/ToastContext';

import {
  createCollaborator,
  getCollaborator,
  editCollaborator,
} from 'services/collaborators';

import { FieldsContainer, ButtonDiv, ItemCheckDiv } from './styles';

const CollaboratorForm = () => {
  const { control, getValues, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);

  const history = useHistory();
  const { collaborator_id } = useParams();
  const { addToast } = useToast();

  const submitForm = async () => {
    try {
      setLoading(true);
      const values = getValues();
      values.civil_state = values.civil_state.value;
      values.fence = check;

      if (collaborator_id) {
        delete values.cpf;
        delete values.username;
        await editCollaborator(collaborator_id, values);
        addToast({
          type: 'success',
          title: `Sucesso`,
          description: 'Colaborador editado',
        });
      } else {
        await createCollaborator(values);
        addToast({
          type: 'success',
          title: `Sucesso`,
          description: 'Colaborador criado',
        });
      }
      return history.push('/collaborators');
    } catch (err) {
      console.log(err);
      addToast({
        type: 'error',
        title: `Erro`,
        description: 'Algo deu errado',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCollaboratorData = async () => {
      try {
        setLoading(true);
        const collaboratorData = await getCollaborator({ collaborator_id });
        fillValues(collaboratorData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (collaborator_id) {
      fetchCollaboratorData();
    }
  }, [collaborator_id]);

  const fillValues = (data) => {
    const civil_label = civilStateOptions.find(
      (item) => item.value === data.civil_state,
    );

    setCheck(data.CollaboratorsCompany.fence);

    setValue('cpf', data.cpf);
    setValue('rg', data.rg);
    setValue('username', data.username);
    setValue('name', data.name);
    setValue('email', data.email);
    setValue('phone', data.phone);
    setValue('pis_number', data.pis_number);
    setValue('civil_state', {
      value: data.civil_state,
      label: civil_label.label,
    });
    setValue('fence', data.CollaboratorsCompany.fence);
  };

  return (
    <CreateView loading={loading}>
      <GridContainer
        spacing={2}
        style={{ padding: 20, flex: 1 }}
        justify="center"
        alignItems="center"
      >
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h2>
                {collaborator_id ? 'Editar Colaborador' : `Criar Colaborador`}
              </h2>
            </CardHeader>
            <CardBody>
              <FieldsContainer>
                <GridContainer>
                  {fields.map((input) => (
                    <GridItem
                      xs={12}
                      sm={input.md}
                      md={input.md}
                      key={input.name}
                    >
                      <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => {
                          return input.mask ? (
                            <InputMask
                              value={value}
                              onChange={(event) => {
                                onChange(event?.target?.value);
                              }}
                              mask={input.mask}
                              onBlur={onBlur}
                            >
                              {() => (
                                <TextField
                                  InputLabelProps={{ shrink: true }}
                                  fullWidth
                                  label={input.label}
                                  margin={'normal'}
                                  inputProps={{
                                    readOnly:
                                      collaborator_id && !input.isEditable,
                                    disableUnderline:
                                      collaborator_id && !input.isEditable,
                                  }}
                                />
                              )}
                            </InputMask>
                          ) : input.name === 'civil_state' ? (
                            <>
                              <a>{input.label}</a>
                              <Select
                                options={civilStateOptions}
                                value={value}
                                onChange={(val) => onChange(val)}
                              />
                            </>
                          ) : input.name === 'fence' ? (
                            <ItemCheckDiv>
                              <Checkbox
                                checked={check}
                                onChange={() => setCheck(!check)}
                                color={'primary'}
                              />
                              <a>{input.label}</a>
                            </ItemCheckDiv>
                          ) : (
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              fullWidth
                              label={input.label}
                              margin={'normal'}
                              onChange={(event) => {
                                onChange(event?.target?.value);
                              }}
                              onBlur={onBlur}
                              value={value}
                              inputProps={{
                                readOnly: collaborator_id && !input.isEditable,
                                disableUnderline:
                                  collaborator_id && !input.isEditable,
                              }}
                            />
                          );
                        }}
                        name={input.name}
                        rules={input.rules}
                      />
                    </GridItem>
                  ))}
                </GridContainer>
              </FieldsContainer>
              <ButtonDiv>
                <CustomButton
                  variant="contained"
                  color="warning"
                  onClick={submitForm}
                >
                  {'Salvar'}
                </CustomButton>
              </ButtonDiv>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </CreateView>
  );
};

export default CollaboratorForm;

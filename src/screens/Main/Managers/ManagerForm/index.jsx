import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';

import CreateView from 'components/CreateView';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import TextField from '@material-ui/core/TextField';
import fields from './fields';
import CustomButton from 'components/CustomButtons/Button';
import CardBody from 'components/Card/CardBody';

import { useToast } from 'hooks/ToastContext';

import { createManager, getManager, editManager } from 'services/managers';

import { FieldsContainer, ButtonDiv } from './styles';

const ManagerForm = () => {
  const { control, getValues, setValue } = useForm();
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { manager_id } = useParams();
  const { addToast } = useToast();

  const submitForm = async () => {
    try {
      setLoading(true);
      const values = getValues();

      if (manager_id) {
        delete values.cpf;
        delete values.username;
        await editManager(manager_id, values);
        addToast({
          type: 'success',
          title: `Sucesso`,
          description: 'Gestor editado',
        });
      } else {
        await createManager(values);
        addToast({
          type: 'success',
          title: `Sucesso`,
          description: 'Gestor criado',
        });
      }
      return history.push('/managers');
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
    const fetchManagerData = async () => {
      try {
        setLoading(true);
        const managerData = await getManager({ manager_id });
        fillValues(managerData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (manager_id) {
      fetchManagerData();
    }
  }, [manager_id]);

  const fillValues = (data) => {
    setValue('cpf', data.cpf);
    setValue('username', data.username);
    setValue('name', data.name);
    setValue('email', data.email);
    setValue('phone', data.phone);
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
              <h2>{manager_id ? 'Editar Gestor' : `Criar Gestor`}</h2>
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
                          const showPassword =
                            input.name === 'password' && !!manager_id;
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
                                    readOnly: manager_id && !input.isEditable,
                                    disableUnderline:
                                      manager_id && !input.isEditable,
                                  }}
                                />
                              )}
                            </InputMask>
                          ) : (
                            !showPassword && (
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
                                  readOnly: manager_id && !input.isEditable,
                                  disableUnderline:
                                    manager_id && !input.isEditable,
                                }}
                              />
                            )
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

export default ManagerForm;

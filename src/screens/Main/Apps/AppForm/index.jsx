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

import { getApp, createApp, editApp } from 'services/apps';

import { FieldsContainer, ButtonDiv } from './styles';

const CollaboratorForm = () => {
  const { control, getValues, setValue } = useForm();
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { app_id } = useParams();
  const { addToast } = useToast();

  const submitForm = async () => {
    try {
      setLoading(true);
      const values = getValues();

      if (app_id) {
        delete values.cpf;
        delete values.username;
        await editApp(app_id, values);
        addToast({
          type: 'success',
          title: `Sucesso`,
          description: 'App editado',
        });
      } else {
        await createApp(values);
        addToast({
          type: 'success',
          title: `Sucesso`,
          description: 'App criado',
        });
      }
      return history.push('/apps');
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
    const fetchAppData = async () => {
      try {
        setLoading(true);
        const appData = await getApp({ app_id });
        fillValues(appData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (app_id) {
      fetchAppData();
    }
  }, [app_id]);

  const fillValues = (data) => {
    setValue('name', data.name);
    setValue('app_store_id', data.app_store_id);
    setValue('play_store_id', data.play_store_id);
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
              <h2>{app_id ? 'Editar App' : `Criar App`}</h2>
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
                            input.name === 'password' && !!app_id;
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
                                    readOnly: app_id && !input.isEditable,
                                    disableUnderline:
                                      app_id && !input.isEditable,
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
                                  readOnly: app_id && !input.isEditable,
                                  disableUnderline: app_id && !input.isEditable,
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

export default CollaboratorForm;

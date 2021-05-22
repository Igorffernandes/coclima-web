import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import { useToast } from 'hooks/ToastContext';

import CreateView from 'components/CreateView';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CustomButton from 'components/CustomButtons/Button';
import CardBody from 'components/Card/CardBody';

import {
  getPermissionsGroup,
  fetchPermissions,
  createPermissionsGroup,
  editPermissionsGroup,
} from 'services/permissionsGroup';

import { FieldsContainer, ButtonDiv, ItemCheckDiv } from './styles';

const ManagerForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [permissionsOptions, setPermissionsOptions] = useState([]);

  const history = useHistory();
  const { permission_group_id } = useParams();

  const { addToast } = useToast();

  useEffect(() => {
    const fetchPermissionsGroupForList = async () => {
      try {
        setLoading(true);
        const permissionsGroupData = await getPermissionsGroup({
          permission_group_id,
        });
        setName(permissionsGroupData.name);
        setPermissionsOptions(permissionsGroupData.permissions_array_ids);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchPermissionsForSelect = async () => {
      try {
        setLoading(true);
        const permissionsData = await fetchPermissions();
        setPermissionsOptions(
          permissionsData.map((item) => ({
            label: `${item.resource} ${item.verb}`,
            name: item.description,
            checked: false,
          })),
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (permission_group_id) {
      fetchPermissionsGroupForList();
    } else {
      fetchPermissionsForSelect();
    }
  }, [permission_group_id]);

  const submitForm = async () => {
    try {
      if (!name) {
        return addToast({
          type: 'error',
          title: `Erro`,
          description: 'Por favor, de um nome para o grupo',
        });
      }
      if (!permissionsOptions.some((item) => item.checked === true)) {
        return addToast({
          type: 'error',
          title: `Erro`,
          description: 'Por favor, selecione pelo menos uma permissão',
        });
      }
      if (permission_group_id) {
        await editPermissionsGroup(permission_group_id, {
          name,
          permissions_array_ids: permissionsOptions,
        });
      } else {
        await createPermissionsGroup({
          name,
          permissions_array_ids: permissionsOptions,
        });
      }
      addToast({
        type: 'success',
        title: `Sucesso`,
        description: 'Grupo de permissões adicionado!',
      });
      history.push('/permissions');
    } catch (err) {
      addToast({
        type: 'error',
        title: `Erro`,
        description: 'Algo deu errado ao salvar o grupo de permissões',
      });
    }
  };

  const handlePermissionsChange = (permissionId) => {
    const permissionsAux = permissionsOptions;
    permissionsAux[permissionId].checked = !permissionsAux[permissionId]
      .checked;

    setPermissionsOptions([...permissionsAux]);
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
                {permission_group_id
                  ? 'Editar Grupo de Permissões'
                  : `Criar Grupo de Permissões`}
              </h2>
            </CardHeader>
            <CardBody>
              <FieldsContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        label={'Nome do grupo'}
                        margin={'normal'}
                        onChange={(event) => {
                          setName(event?.target?.value);
                        }}
                        value={name}
                      />
                    </GridItem>
                  </GridItem>
                  {permissionsOptions.map(({ checked, name }, key) => (
                    <GridItem xs={3} sm={3} md={3} key={key}>
                      <ItemCheckDiv>
                        <Checkbox
                          checked={checked}
                          onChange={() => handlePermissionsChange(key)}
                          color={'primary'}
                        />
                        <h3>{name}</h3>
                      </ItemCheckDiv>
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

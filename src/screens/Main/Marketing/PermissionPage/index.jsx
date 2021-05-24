import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getPermissionsGroup,
  deactivatePermissionsGroup,
} from 'services/permissionsGroup';
import { useHistory } from 'react-router-dom';
import { useToast } from 'hooks/ToastContext';
import Checkbox from '@material-ui/core/Checkbox';

import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import ShowView from 'components/ShowView';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CustomButton from 'components/CustomButtons/Button';

import { EndButtons, ButtonsArea, ItemCheckDiv } from './styles';

const PermissionGroupPage = () => {
  const { permission_group_id } = useParams();
  const [permissionGroupData, setPermissionGroupData] = useState({});
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { addToast } = useToast();

  useEffect(() => {
    const fetchPermissionFromApi = async () => {
      try {
        setLoading(true);
        const permissionDataInfo = await getPermissionsGroup({
          permission_group_id,
        });
        setPermissionGroupData(permissionDataInfo);
      } catch (err) {
        addToast({
          type: 'error',
          title: `Erro`,
          description: 'Registro não encontrado',
        });
        history.push('/permissions');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (permission_group_id) {
      fetchPermissionFromApi();
    }
  }, [permission_group_id]);

  const onClickDeactivate = async () => {
    try {
      setLoading(true);
      await deactivatePermissionsGroup({ permission_group_id });
      addToast({
        type: 'success',
        title: `Sucesso`,
        description: 'Grupo de permissão desativado com sucesso',
      });
      return history.push('/permissions');
    } catch (err) {
      addToast({
        type: 'error',
        title: `Erro`,
        description: 'Algo deu errado ao desativar o grupo de permissão',
      });
    } finally {
      setLoading(false);
    }
  };

  const onClickEdit = () => {
    return history.push(`/permissions/edit/${permission_group_id}`);
  };

  const permissionsOptions = permissionGroupData.permissions_array_ids || [];

  return (
    <ShowView loading={loading}>
      <GridContainer
        spacing={2}
        style={{ padding: 20, flex: 1 }}
        justify="center"
        alignItems="center"
      >
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <EndButtons>
                <h2>{`Grupo de permissão: ${permissionGroupData.name}`}</h2>
                <EndButtons>
                  <ButtonsArea>
                    <CustomButton color="warning" onClick={onClickEdit}>
                      {'Editar'}
                    </CustomButton>
                  </ButtonsArea>
                  <ButtonsArea>
                    <CustomButton color="danger" onClick={onClickDeactivate}>
                      {'Desativar'}
                    </CustomButton>
                  </ButtonsArea>
                </EndButtons>
              </EndButtons>
            </CardHeader>
            <CardBody>
              <GridContainer>
                {permissionsOptions.map(({ checked, name }, key) => (
                  <GridItem xs={3} sm={3} md={3} key={key}>
                    <ItemCheckDiv>
                      <Checkbox checked={checked} color={'primary'} disabled />
                      <h3>{name}</h3>
                    </ItemCheckDiv>
                  </GridItem>
                ))}
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ShowView>
  );
};

export default PermissionGroupPage;

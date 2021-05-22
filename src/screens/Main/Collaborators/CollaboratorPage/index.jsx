import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  getCollaborator,
  deactivateCollaborator,
} from 'services/collaborators';
import { civilStateOptions } from 'config/constants';
import { useToast } from 'hooks/ToastContext';

import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import ShowView from 'components/ShowView';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import InputShow from 'components/InputShow';
import CustomButton from 'components/CustomButtons/Button';

import { EndButtons, ButtonsArea } from './styles';

import fields from './fields';

const CollaboratorPage = () => {
  const { collaborator_id } = useParams();
  const [collaboratorData, setCollaboratorData] = useState({});
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    const fetchCollaboratorFromApi = async () => {
      try {
        setLoading(true);
        const collaboratorDataInfo = await getCollaborator({ collaborator_id });
        fillValues(collaboratorDataInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (collaborator_id) {
      fetchCollaboratorFromApi();
    }
  }, [collaborator_id]);

  const fillValues = (data) => {
    const civil_label = civilStateOptions.find(
      (item) => item.value === data.civil_state,
    );

    const collaborator = {
      id: data.id,
      cpf: data.cpf,
      rg: data.rg,
      username: data.username,
      name: data.name,
      email: data.email,
      phone: data.phone,
      pis_number: data.pis_number,
      civil_state: {
        value: data.civil_state,
        label: civil_label.label,
      },
      fence: data.CollaboratorsCompany.fence,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    setCollaboratorData(collaborator);
  };

  const onClickDeactivate = async () => {
    try {
      setLoading(true);
      await deactivateCollaborator({ collaborator_id });
      addToast({
        type: 'success',
        title: `Sucesso`,
        description: 'Collaborador desativado com sucesso',
      });
      history.push('/collaborators');
    } catch (err) {
      addToast({
        type: 'error',
        title: `Erro`,
        description: 'Collaborador não pode ser desativado',
      });
    } finally {
      setLoading(false);
    }
  };

  const onClickEdit = () => {
    return history.push(`/collaborators/edit/${collaborator_id}`);
  };

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
                <h2>{`${collaboratorData?.name}`}</h2>
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
                {fields.map((item) => (
                  <GridItem xs={12} sm={12} md={item.md} key={item.id}>
                    <InputShow
                      label={item.label}
                      id={item.id}
                      value={
                        item.customFormat
                          ? item.customFormat(
                              collaboratorData[item.objectIndex] || '',
                            )
                          : collaboratorData[item.objectIndex] || ''
                      }
                    />
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

export default CollaboratorPage;

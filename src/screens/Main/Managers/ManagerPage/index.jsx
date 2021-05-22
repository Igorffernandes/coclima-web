import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getManager, deactivateManager } from 'services/managers';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

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

const ManagerPage = () => {
  const { manager_id } = useParams();
  const [managerData, setManagerData] = useState({});
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const fetchManagerFromApi = async () => {
      try {
        setLoading(true);
        const managerDataInfo = await getManager({ manager_id });
        setManagerData(managerDataInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (manager_id) {
      fetchManagerFromApi();
    }
  }, [manager_id]);

  const onClickDeactivate = async () => {
    try {
      setLoading(true);
      await deactivateManager({ manager_id });
      toast.success('Gestor desativado com sucesso');
      history.push('/managers');
    } catch (err) {
      toast.error('Algo deu errado na desativação do gestor');
    } finally {
      setLoading(false);
    }
  };

  const onClickEdit = () => {
    return history.push(`/managers/edit/${manager_id}`);
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
                <h2>{`${managerData?.name}`}</h2>
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
                              managerData[item.objectIndex] || '',
                            )
                          : managerData[item.objectIndex] || ''
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

export default ManagerPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApp, deactivateApp } from 'services/apps';
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

const AppPage = () => {
  const { app_id } = useParams();
  const [appData, setAppData] = useState({});
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const fetchAppFromApi = async () => {
      try {
        setLoading(true);
        const appDataInfo = await getApp({ app_id });
        setAppData(appDataInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (app_id) {
      fetchAppFromApi();
    }
  }, [app_id]);

  const onClickDeactivate = async () => {
    try {
      setLoading(true);
      await deactivateApp({ app_id });
      toast.success('APP desativado com sucesso');
      history.push('/apps');
    } catch (err) {
      toast.error('Algo deu errado na desativação do APP');
    } finally {
      setLoading(false);
    }
  };

  const onClickEdit = () => {
    return history.push(`/apps/edit/${app_id}`);
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
                <h2>{`${appData?.name}`}</h2>
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
                          ? item.customFormat(appData[item.objectIndex] || '')
                          : appData[item.objectIndex] || ''
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

export default AppPage;

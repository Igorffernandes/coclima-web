import React, { useEffect, useState } from 'react';
import { fetchApps } from 'services/apps';

import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import ShowView from 'components/ShowView';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import Checkbox from '@material-ui/core/Checkbox';
import CustomButton from 'components/CustomButtons/Button';

import { updateArrayIds, getUpdateArrayIds } from 'services/apps';
import { useToast } from 'hooks/ToastContext';

import { EndButtons, ItemCheckDiv, ButtonDiv } from './styles';

const BlockedAppsPage = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchedApps, setFetchedApps] = useState(false);

  const { addToast } = useToast();

  useEffect(() => {
    const fetchAppsFromApi = async () => {
      try {
        setLoading(true);
        const appsFetch = await fetchApps();

        setAppsData(
          appsFetch.map((item) => ({
            label: `${item.name}`,
            id: item.id,
            checked: false,
          })),
        );
        setFetchedApps(true);
      } catch (err) {
        console.log(err, 'fetchAppsFromApi');
      } finally {
        setLoading(false);
      }
    };
    fetchAppsFromApi();
  }, []);

  useEffect(() => {
    const fetchBlockedAppsFromApi = async () => {
      try {
        setLoading(true);
        const dataToBeMapped = await getUpdateArrayIds();
        updateApps(dataToBeMapped);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (fetchedApps) {
      fetchBlockedAppsFromApi();
    }
  }, [fetchedApps]);

  const updateApps = (arrayApps) => {
    const auxArr = appsData;
    auxArr.forEach((item) => {
      if (arrayApps.includes(item.id)) {
        item.checked = true;
      }
    });

    setAppsData([...auxArr]);
  };

  const handlePermissionsChange = (appId) => {
    const auxArr = appsData;
    auxArr[appId].checked = !appsData[appId].checked;

    setAppsData([...auxArr]);
  };

  const submitForm = async () => {
    try {
      await updateArrayIds({ apps_id_array: appsData });
      addToast({
        type: 'success',
        title: `Sucesso`,
        description: 'Lista de Apps bloqueados atualizada',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: `Erro`,
        description: 'Não conseguimos atualizar sua lista de apps bloqueados',
      });
      console.log(err);
    }
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
                <h2>{`Apps Bloqueados`}</h2>
              </EndButtons>
            </CardHeader>
            <CardBody>
              <GridContainer>
                {appsData.map(({ checked, label }, key) => (
                  <GridItem xs={12} sm={12} md={6} key={key}>
                    <ItemCheckDiv>
                      <Checkbox
                        checked={checked}
                        onChange={() => handlePermissionsChange(key)}
                        color={'primary'}
                      />
                      <h3>{label}</h3>
                    </ItemCheckDiv>
                  </GridItem>
                ))}
              </GridContainer>
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
    </ShowView>
  );
};

export default BlockedAppsPage;

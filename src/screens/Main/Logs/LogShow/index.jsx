import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLog } from 'services/logs';

import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import ShowView from 'components/ShowView';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import InputShow from 'components/InputShow';

import { EndButtons } from './styles';
import { maskAction } from './utils';

import fields from './fields';

const CompanyPage = () => {
  const { log_id } = useParams();
  const [logData, setLogData] = useState({});
  const [loading, setLoading] = useState(false);

  // const history = useHistory();

  useEffect(() => {
    const fetchLogFromApi = async () => {
      try {
        setLoading(true);
        const logDataInfo = await fetchLog(log_id);
        setLogData(logDataInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (log_id) {
      fetchLogFromApi();
    }
  }, [log_id]);

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
                <h2>{`${maskAction(logData?.action || '   ')}`}</h2>
              </EndButtons>
            </CardHeader>
            <CardBody>
              {!loading && (
                <GridContainer>
                  {fields.map((item) => (
                    <GridItem xs={12} sm={12} md={item.md} key={item.id}>
                      <InputShow
                        label={item.label}
                        id={item.id}
                        value={
                          item.customFormat
                            ? item.customFormat(
                                logData[item.objectIndex] || '   ',
                              )
                            : logData[item.objectIndex] || ''
                        }
                      />
                    </GridItem>
                  ))}
                </GridContainer>
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ShowView>
  );
};

export default CompanyPage;

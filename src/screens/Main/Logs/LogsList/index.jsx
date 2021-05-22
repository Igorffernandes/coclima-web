import React, { useState, useEffect } from 'react';
import Table from 'components/Table';

import { fetchLogs } from 'services/logs';
import { columns } from './utils';
import { useHistory } from 'react-router-dom';

import ListContainer from 'components/ListView';

const CompanyList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLogsData = async () => {
      try {
        setLoading(true);
        const logsData = await fetchLogs();
        setData(logsData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLogsData();
  }, []);

  const history = useHistory();

  return (
    <ListContainer loading={loading}>
      <div style={{ maxWidth: '100%', alignSelf: 'flex-end' }}>
        {!loading && (
          <Table
            data={data}
            columns={columns}
            title={'Logs'}
            actions={[
              {
                icon: 'check',
                tooltip: 'Ver Log',
                onClick: (event, rowData) => {
                  history.push(`/logs/${rowData.id}`);
                },
              },
            ]}
          />
        )}
      </div>
    </ListContainer>
  );
};

export default CompanyList;

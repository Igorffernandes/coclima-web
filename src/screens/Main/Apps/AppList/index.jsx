import React, { useState, useEffect } from 'react';
import Table from 'components/Table';

import { fetchApps } from 'services/apps';
import { columns } from './utils';
import { useHistory } from 'react-router-dom';

import ListContainer from 'components/ListView';

const CollaboratorsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCollaboratorsData = async () => {
      try {
        setLoading(true);
        const collaboratorsData = await fetchApps();
        setData(collaboratorsData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCollaboratorsData();
  }, []);

  const history = useHistory();

  const handleNewEntry = () => {
    return history.push('/apps/create');
  };

  return (
    <ListContainer loading={loading}>
      <div style={{ maxWidth: '100%', alignSelf: 'flex-end' }}>
        {!loading && (
          <Table
            data={data}
            columns={columns}
            title={'Apps'}
            handleNewEntry={handleNewEntry}
            handleNewEntryText={'Criar App'}
            actions={[
              {
                icon: 'check',
                tooltip: 'Ver App',
                onClick: (event, rowData) => {
                  history.push(`/apps/${rowData.id}`);
                },
              },
              {
                icon: 'edit',
                tooltip: 'Editar App',
                onClick: (event, rowData) => {
                  history.push(`/apps/edit/${rowData.id}`);
                },
              },
            ]}
          />
        )}
      </div>
    </ListContainer>
  );
};

export default CollaboratorsList;

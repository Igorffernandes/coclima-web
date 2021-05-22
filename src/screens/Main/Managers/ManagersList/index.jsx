import React, { useState, useEffect } from 'react';
import Table from 'components/Table';

import { fetchManagers } from 'services/managers';
import { columns } from './utils';
import { useHistory } from 'react-router-dom';

import ListContainer from 'components/ListView';

const ManagersList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchManagersData = async () => {
      try {
        setLoading(true);
        const managersData = await fetchManagers();
        setData(managersData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchManagersData();
  }, []);

  const history = useHistory();

  const handleNewEntry = () => {
    return history.push('/managers/create');
  };

  return (
    <ListContainer loading={loading}>
      <div style={{ maxWidth: '100%', alignSelf: 'flex-end' }}>
        {!loading && (
          <Table
            data={data}
            columns={columns}
            title={'Gestores'}
            handleNewEntry={handleNewEntry}
            handleNewEntryText={'Criar Gestor'}
            actions={[
              {
                icon: 'check',
                tooltip: 'Ver Gestor',
                onClick: (event, rowData) => {
                  history.push(`/managers/${rowData.id}`);
                },
              },
              {
                icon: 'edit',
                tooltip: 'Editar Gestor',
                onClick: (event, rowData) => {
                  history.push(`/managers/edit/${rowData.id}`);
                },
              },
            ]}
          />
        )}
      </div>
    </ListContainer>
  );
};

export default ManagersList;

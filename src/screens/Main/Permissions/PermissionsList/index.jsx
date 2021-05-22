import React, { useState, useEffect } from 'react';
import Table from 'components/Table';

import { fetchPermissionsGroup } from 'services/permissionsGroup';
import { columns } from './utils';
import { useHistory } from 'react-router-dom';

import ListContainer from 'components/ListView';

const PermissionsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPermissionsGroupData = async () => {
      try {
        setLoading(true);
        const permissionsGroupData = await fetchPermissionsGroup();
        setData(permissionsGroupData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPermissionsGroupData();
  }, []);

  const history = useHistory();

  const handleNewEntry = () => {
    return history.push('/permissions/create');
  };

  return (
    <ListContainer loading={loading}>
      <div style={{ maxWidth: '100%', alignSelf: 'flex-end' }}>
        {!loading && (
          <Table
            data={data}
            columns={columns}
            title={'Grupos de Permissões'}
            handleNewEntry={handleNewEntry}
            handleNewEntryText={'Criar grupo de permissão'}
            actions={[
              {
                icon: 'check',
                tooltip: 'Ver Permissão',
                onClick: (event, rowData) => {
                  history.push(`/permissions/${rowData.id}`);
                },
              },
              {
                icon: 'edit',
                tooltip: 'Editar Permissão',
                onClick: (event, rowData) => {
                  history.push(`/permissions/edit/${rowData.id}`);
                },
              },
            ]}
          />
        )}
      </div>
    </ListContainer>
  );
};

export default PermissionsList;

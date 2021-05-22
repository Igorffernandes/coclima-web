import React, { useState, useEffect } from 'react';
import Table from 'components/Table';

import { fetchCollaborators } from 'services/collaborators';
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
        const collaboratorsData = await fetchCollaborators();
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
    return history.push('/collaborators/create');
  };

  return (
    <ListContainer loading={loading}>
      <div style={{ maxWidth: '100%', alignSelf: 'flex-end' }}>
        {!loading && (
          <Table
            data={data}
            columns={columns}
            title={'Colaboradores'}
            handleNewEntry={handleNewEntry}
            handleNewEntryText={'Criar Colaborador'}
            actions={[
              {
                icon: 'check',
                tooltip: 'Ver Colaborador',
                onClick: (event, rowData) => {
                  history.push(`/collaborators/${rowData.id}`);
                },
              },
              {
                icon: 'edit',
                tooltip: 'Editar Colaborador',
                onClick: (event, rowData) => {
                  history.push(`/collaborators/edit/${rowData.id}`);
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

import React from 'react';

export const columns = [
  { title: 'ID', field: 'id' },
  { title: 'Usuário', field: 'user_name' },
  {
    title: 'Ação',
    field: 'action',
    // eslint-disable-next-line react/display-name
    render: (rowData) => renderActionRowData(rowData),
  },
  { title: 'Realizado em', field: 'created_at', type: 'datetime' },
];

const translateVerb = (verb) => {
  const verbObject = {
    GET: 'Visualizou',
    POST: 'Criou',
    DELETE: 'Deletou',
    PUT: 'Editou',
    PATCH: 'Editou',
  };
  return verbObject[verb] || 'Ação não mapeada';
};

const translateResource = (resource) => {
  const resourceObject = {
    users: 'Usuários',
    managers: 'Gestores',
    companies: 'Empresas',
  };
  const resourceString =
    resourceObject[resource.split('/')[1]] || 'recurso não mapeado';

  return `${resourceString}${
    resource.split('/')[2] ? `  ID: ${resource.split('/')[2]}` : ''
  }`;
};

export const renderActionRowData = (rowData) => {
  const { action } = rowData;
  const [verb, at, resource] = action.split(' ');
  console.log(at);
  return <p>{`${translateVerb(verb)} em ${translateResource(resource)}`}</p>;
};

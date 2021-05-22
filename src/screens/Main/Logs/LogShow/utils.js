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

export const maskAction = (action) => {
  const [verb, , resource] = action.split(' ');
  return `${translateVerb(verb)} em ${translateResource(resource)}`;
};

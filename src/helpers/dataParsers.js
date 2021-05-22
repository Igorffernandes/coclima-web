export const parseCompanyToCreate = (values) => {
  const {
    city,
    complement,
    country,
    cpf_cnpj,
    district,
    email,
    name,
    phone,
    residential_number,
    state,
    street,
    zipcode,
  } = values;

  return {
    cpf_cnpj,
    email,
    name,
    phone,
    address: {
      city,
      complement,
      country,
      district,
      residential_number,
      state,
      street,
      zipcode,
    },
  };
};

export const parseCompanyToEdit = (values) => {
  const {
    city,
    complement,
    country,
    district,
    email,
    name,
    phone,
    residential_number,
    state,
    street,
    zipcode,
  } = values;

  return {
    email,
    name,
    phone,
    address: {
      city,
      complement,
      country,
      district,
      residential_number,
      state,
      street,
      zipcode,
    },
  };
};

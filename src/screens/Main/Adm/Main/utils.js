import React from 'react';

import TableButton from 'components/TableButton';

export const columns = [
  { title: 'Empresa', field: 'company' },
  { title: 'Email', field: 'email' },
  { render: rowData => <div><TableButton title={'Editar email'} onClick={() => console.log('EDITAR EMAIL')}/></div>},
  { render: rowData => <div><TableButton title={'Excluir'} onClick={() => console.log('Excluir')}/></div>},
];

export const fakeData = [
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  },
  {
    company: '99app',
    email: 'viniciuspbl96@gmail.com',
  }
]
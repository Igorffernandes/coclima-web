/* eslint-disable react/display-name */
import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import colors from 'styles/colors';

import MaterialTable, { MTableToolbar } from 'material-table';
import CustomButton from 'components/CustomButtons/Button';
import FilterButton from 'components/FilterButton';
import TableAddButton from 'components/TableAddButton';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Visibility from '@material-ui/icons/Visibility';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { TableHeaderDiv, TableTitle, SubHeaderDiv, CustomHeaderContainer, CustomHeaderColumnName } from './styles';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Visibility {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const PAGESIZE = 50;

const UsersList = ({
  title,
  columns,
  data,
  actions,
}) => {
  const pageSize = useMemo(
    () => (data.length > PAGESIZE ? PAGESIZE : data.length),
    [data],
  );

  return (
    <>
    <TableHeaderDiv>
          <SubHeaderDiv>
            <TableTitle>{title}</TableTitle>
            <FilterButton onClick={() => console.log('filtro')}/>
          </SubHeaderDiv>
          <TableAddButton />
        </TableHeaderDiv>
    <MaterialTable
      columns={columns}
      icons={tableIcons}
      data={data}
      actions={actions}
      options={{
        pageSize: pageSize,
        search: false,
        headerStyle: {
          backgroundColor: colors.verdeDaMassa,
          color: '#FFF',
          position: 'sticky',
          top: 0,
          borderLeftRadius: '2px',
        },
        toolbar: false,
      }}
      components={{
        Container: props => <div {...props}></div>
      }}
    />
    </>
  );
};

UsersList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array,
  handleNewEntry: PropTypes.func,
  handleNewEntryText: PropTypes.string,
};

export default UsersList;

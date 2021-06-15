import React, { useState, useEffect } from 'react';
import Menu from '@material-ui/core/Menu';

import FilterButton from 'components/FilterButton';
import FilterItem from 'components/FilterItem';

import { fetchCompanies } from 'services/companies';

const Filter = ({ selectedCompanies, setSelectedCompanies, closeCallback, singleCompany }) => {

  const [companies, setCompanies] = useState([]);

  const baixarCompanias = async () => {
    try {
      const companias = await fetchCompanies();
      setCompanies(companias);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    baixarCompanias();
  }, [])

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    if(closeCallback){
      await closeCallback();
    }
    setAnchorEl(null);
  };

  const onPressSelectedItem = (id) => {
    if(selectedCompanies.length > 0 && selectedCompanies.find(a => a === id)){
      const prevArr = selectedCompanies.filter(item => item !== id);
      setSelectedCompanies(prevArr);
    } else {
      if(singleCompany === true){
        setSelectedCompanies([id]);
      } else {
        const a = [...selectedCompanies, id];
        setSelectedCompanies(a);
      }
    }
  }

  return(
    <>
      <FilterButton onClick={handleClick} filterLength={selectedCompanies?.length}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {companies.length > 0 && companies.map(item => 
          <FilterItem 
            name={item.name} 
            onPressSelectedItem={() => onPressSelectedItem(item.id)}
            active={selectedCompanies.length > 0 && selectedCompanies.find(a => a === item.id)}
          />  
          )}
      </Menu>
    </>
  )
}

export default Filter;
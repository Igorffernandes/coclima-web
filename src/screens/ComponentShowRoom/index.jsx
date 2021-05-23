import React from 'react';

import GridContainer from 'components/Grid/GridContainer';
import ShowView from 'components/ShowView';

import Logo from 'components/Logo';
import Badge from 'components/Badge';
import SideBarIcon from 'components/SideBarIcon';

import LineChart from 'components/LineChart';

const ComponentShowRoom = ({}) => {
  return(
    <ShowView>
      <GridContainer
        spacing={2}
        style={{ padding: 20, flex: 1 }}
        justify="center"
        alignItems="center"
      >
        <div>
          <h1>TESTE DE COMPONENTES</h1>
          <h2>
            Logo
          </h2>
          <Logo type='full' />
          <Logo type='leaf' />
          <Logo type='circled' />
          <Logo type='circledMobileIcon' />

          <h2>
            Material Badge
          </h2>
          <Badge text={'Pedra de Crack'} />

          <h2>SideBar Icons</h2>
          <SideBarIcon iconName={'plantio'} active/>
          <SideBarIcon iconName={'plantio'}/>
          <SideBarIcon iconName={'dashboard'} active/>
          <SideBarIcon iconName={'dashboard'}/>
          <SideBarIcon iconName={'marketing'} active/>
          <SideBarIcon iconName={'marketing'}/>
          <SideBarIcon iconName={'adm'} active/>
          <SideBarIcon iconName={'adm'}/>
        </div>
        <h2>GRAFICOS</h2>
        <LineChart />
      </GridContainer>
    </ShowView>
  )
}

export default ComponentShowRoom;
import React from 'react';

import GridContainer from 'components/Grid/GridContainer';
import ShowView from 'components/ShowView';

import Logo from 'components/Logo';
import Badge from 'components/Badge';

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
          <Logo />

          <h2>
            Material Badge
          </h2>
          <Badge text={'Pedra de Crack'} />
        </div>
      </GridContainer>
    </ShowView>
  )
}

export default ComponentShowRoom;
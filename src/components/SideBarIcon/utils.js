import adm from 'assets/icons/SideBar/adm.png';
import admActive from 'assets/icons/SideBar/admActive.png';

import plantio from 'assets/icons/SideBar/plantio.png';
import plantioActive from 'assets/icons/SideBar/plantioActive.png';

import marketing from 'assets/icons/SideBar/marketing.png';
import marketingActive from 'assets/icons/SideBar/marketingActive.png';

import dashboard from 'assets/icons/SideBar/dashboard.png';
import dashboardActive from 'assets/icons/SideBar/dashboardActive.png';

export const getIconUrl = (iconString, active) => {
  switch(iconString) {
    case 'adm':
      if(active)
        return admActive;
      return adm;

    case 'plantio':
      if(active)
        return plantioActive;
      return plantio;

    case 'marketing':
      if(active)
        return marketingActive;
      return marketing;

    case 'dashboard':
      if(active)
        return dashboardActive;
      return dashboard

  }
}
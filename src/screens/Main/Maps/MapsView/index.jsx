import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  paddingLeft: '250px',
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -25.387378,
  lng: -51.470726,
};

const MapsView = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCRtT4qyUroFx_iVdOmIQS9cbyD0Y2J6AQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapsView);

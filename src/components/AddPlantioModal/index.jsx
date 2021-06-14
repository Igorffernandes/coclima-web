import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import { createPlantations } from 'services/plantations';

const AddPlantioModal = ({visible, onClose, handleButton, companyID}) => {
  const [date, setDate] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [trees, setTrees] = useState('')

  async function handleAdicionar(){
    try{
      const newData = {
        date,
        geolocation: {lat, lng},
        trees,
        company_id: companyID,
      }
      await createPlantations(newData);
      handleButton();
    } catch(err) {
      console.log(err)
    }
  }

  return  <BaseModal 
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Adicionar novo plantio
                </Styled.TextTitle>
                <Styled.FormBox>
                  <Styled.TextLabel>
                    Data
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={date}
                    onChange={(value) => setDate(value.target.value)}
                    disableUnderline/>
                  <Styled.TextLabel>
                    Árvores
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={trees}
                    onChange={(value) => setTrees(value.target.value)}
                    disableUnderline/>
                  <Styled.CoordFormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Latitude
                      </Styled.TextLabel>
                      <Styled.MaterialInputSmall 
                        value={lat}
                        onChange={(value) => setLat(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Longitude
                      </Styled.TextLabel>
                      <Styled.MaterialInputSmall 
                        value={lng}
                        onChange={(value) => setLng(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                    </Styled.CoordFormBox>
                </Styled.FormBox>
                <Styled.ViewButton onClick={handleAdicionar}>
									<Styled.TextButton>
                    ADICIONAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

AddPlantioModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    handleButton: PropTypes.func,
    companyID: PropTypes.number,
  }

export default AddPlantioModal;
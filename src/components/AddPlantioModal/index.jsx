import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import { createPlantations } from 'services/plantations';
import Filter from 'components/Filter';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt-BR';

const AddPlantioModal = ({visible, onClose, handleButton}) => {
  registerLocale('pt', pt) 
  const [date, setDate] = useState(new Date());
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [trees, setTrees] = useState('')
  const [selectedCompanies, setSelectedCompanies] = useState([])

  async function handleAdicionar(){
    try{
      const newData = {
        date,
        geolocation: {lat: Number(lat), lng: Number(lng)},
        trees,
        company_id: selectedCompanies[0],
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
                  <Styled.DateDiv>
                    <DatePicker 
                      locale="pt"
                      dateFormat="dd/MM/yyyy" 
                      selected={date} 
                      onChange={(date) => setDate(date)} />
                  </Styled.DateDiv>
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
                  <Styled.DivFilter>
                    <Filter 
                      selectedCompanies={selectedCompanies} 
                      setSelectedCompanies={setSelectedCompanies} 
                      singleCompany={true}
                    />
                  </Styled.DivFilter>
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
  }

export default AddPlantioModal;
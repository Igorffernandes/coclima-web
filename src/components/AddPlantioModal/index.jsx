import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

const AddPlantioModal = ({visible, onClose, handleButton}) => {
  const [name, setName] = useState('')
  const [coord, setCoord] = useState('')

  function handleChangeCoord(value){
    setCoord(value.target.value)
  }

  function handleChangeName(value){
    setName(value.target.value)
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
                    Nome
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={name}
                    onChange={handleChangeName}
                    disableUnderline/>
                  <Styled.TextLabel>
                    Coodernadas
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={coord}
                    onChange={handleChangeCoord}
                    disableUnderline/>
                </Styled.FormBox>
                <Styled.ViewButton onClick={handleButton}>
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
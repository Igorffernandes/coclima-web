import BaseModal from 'components/BaseModal';
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { editPlantation, fetchPlantation } from 'services/plantations';
import { deleteArchive } from 'services/archives';
import { uploadPhoto } from 'services/archives';
import Filter from 'components/Filter';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt-BR';
import { useDropzone } from 'react-dropzone';

const EditPlantioModal = ({visible, onClose, plantationId, handleButton}) => {
  registerLocale('pt', pt)
  const [date, setDate] = useState(new Date());
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [trees, setTrees] = useState('')
  const [repasse, setRepasse] = useState('')
  const [selectedCompanies, setSelectedCompanies] = useState([])
  const [selectedPartners, setSelectedPartners] = useState([])
  const [archive, setArchive] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
			reader.onload = () => {
        setArchive(archive => [...archive, {base64: reader.result, path: file.path, type: 'image'}]);
      }
    })
  }, []);

  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({onDrop, 
    accept: 'image/*'
  });

  const formatRepasse = (value) => {
    const repasse = value.replace('.', ',');

    return `R$ ${repasse}`;
  }

  const fetchPlantationData = async () => {
    const plantations = await fetchPlantation(plantationId);
    const result = plantations.dataValues;

    if (plantations.archives.length > 0) {
      let list = [];
      plantations.archives.map((item) => {
        list.push({base64: item.data, path: '', type: item.type, id: item.id})
      })

      setArchive(list);
    }


    setDate(new Date(result.date));
    setLat(result.geolocation.lat);
    setLng(result.geolocation.lng);
    setTrees(result.trees);
    if (plantations.repasse) {
      setRepasse(formatRepasse(plantations.repasse))
    }
    setSelectedCompanies([result.company_id])
    setSelectedPartners([result.partner_id])
  }

  useEffect(() => {
    fetchPlantationData();
  }, [])

  async function handleEdit(){
    let valueRepasse = '';
    if (repasse.length > 0) {
      const aux = repasse.replace(/[^\d,]/g, '');
      valueRepasse = aux.replace(',', '.'); 
    }

    try{
      const newData = {
        date,
        geolocation: {lat: Number(lat), lng: Number(lng)},
        trees,
        company_id: selectedCompanies[0],
        partner_id: selectedPartners[0],
        repasse: valueRepasse
      }

      await editPlantation(newData, plantationId);

      let list = [];
      archive.map((item) => {
        if (!item.id) {
          list.push(item);
        }
      })

      const data = {
        data: list,
        company_id: selectedCompanies[0],
        partner_id: selectedPartners[0],
        plantation_id: plantationId,
      }

      await uploadPhoto(data);

      handleButton();
    } catch(err) {
      console.log(err);
    }
  }

  const handleDeletePhoto = async (file) => {
    if (file.id) {
      try {
        await deleteArchive(file.id);
      }catch (err) {
        console.log(err)
      }
    }

    const newArchive = archive.filter(item => item !== file);

    setArchive(newArchive);
  }

  return  <BaseModal
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Editar plantio
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
                      onChange={(date) => console.log(date)} />
                  </Styled.DateDiv>
                  <Styled.CoordFormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Árvores
                      </Styled.TextLabel>
                      <Styled.MaterialInput
                        value={trees}
                        onChange={(value) => setTrees(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Repasse
                      </Styled.TextLabel>
                      <Styled.MaterialInputSmall
                        value={repasse}
                        onChange={(value) => setRepasse(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                  </Styled.CoordFormBox>
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
                      type={'company'}
                      value={'Empresa'}
                      selectedCompanies={selectedCompanies} 
                      setSelectedCompanies={setSelectedCompanies}
                      singleCompany={true}
                    />
                    <Filter
                      type={'partner'}
                      value={'Parceiro'}
                      selectedCompanies={selectedPartners} 
                      setSelectedCompanies={setSelectedPartners}
                      singleCompany={true}
                    />
                  </Styled.DivFilter>
                  <Styled.ViewContainer>
                    {archive.length === 0 ? 
                    (
                      <Styled.ArchiveBox {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        <Styled.FileIcon />
                        <Styled.TextBody>
                          Arraste e solte aqui as fotos dos plantios
                        </Styled.TextBody>
                      </Styled.ArchiveBox>
                    ) : 
                    (
                      <Styled.ImageViewer>
                        {
                          archive.map(file => (
                            <Styled.ViewItem>
                              <Styled.ImageLoaded src={file.base64}/>
                              <Styled.FileItemTrash onClick={() => handleDeletePhoto(file)} />
                            </Styled.ViewItem>
                            )
                          )
                        }
                      </Styled.ImageViewer>
                    )}
                  </Styled.ViewContainer>
                   {archive.length > 0 && <Styled.ArchiveButton {...getRootProps({className: 'dropzone'})}>
                      <input {...getInputProps()} />
                      <Styled.TextBody>
                        Arraste e solte aqui as fotos dos plantios
                      </Styled.TextBody>
                    </Styled.ArchiveButton>}
                <Styled.ViewButton onClick={handleEdit}>
									<Styled.TextButton>
                    SALVAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

EditPlantioModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    handleButton: PropTypes.func,
  }

export default EditPlantioModal;
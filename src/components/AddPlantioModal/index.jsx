import BaseModal from 'components/BaseModal';
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { createPlantations, fetchTreesCompanies } from 'services/plantations';
import { uploadPhoto } from 'services/archives';
import Filter from 'components/Filter';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt-BR';
import { useDropzone } from 'react-dropzone';
import { useToast } from '../../hooks/ToastContext.jsx'

const AddPlantioModal = ({visible, onClose, handleButton}) => {
  registerLocale('pt', pt)
  const { addToast } = useToast();
  const [date, setDate] = useState(new Date());
  const [dateRepasse, setDateRepasse] = useState(new Date());
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [trees, setTrees] = useState('');
  const [repasse, setRepasse] = useState('');
  const [treeValue, setTreeValue] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [archive, setArchive] = useState([]);
  const [treesLeft, setTreesLeft] = useState(0);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
			reader.onload = () => {
        setArchive(archive => [...archive, {base64: reader.result, path: file.path, type: 'image'}]);
      }
    })
  }, [])

  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({onDrop, 
    accept: 'image/*'
  })

  useEffect(() => {
    const fetchTrees = async () => {
      if (treeValue.length > 0) {
        const { data } = await fetchTreesCompanies(selectedCompanies[0]);
        const aux = treeValue.replace(/[^\d,]/g, '');
        const treeValueFormated = aux.replace(',', '.');  
        const treesCount = data / treeValueFormated;
        const treeSome = Number(trees) > 0 ? treesCount - Number(trees) : treesCount;
        setTreesLeft(treeSome >= 0 ? Math.trunc(treeSome) : 0);
      }
    }

    if (selectedCompanies.length > 0) {
      fetchTrees();
    }
  }, [selectedCompanies, trees, treeValue]);

  async function validateFields() {
    let message;

    if (date.length === 0) return 'A data deve ser valido!';

    if (dateRepasse.length === 0) return 'A data de repasse deve ser valido!';

    if (treeValue.length === 0) return 'O valor da arvore deve ser valido!';

    if (lat.length === 0) return 'A Latitude deve ser valido!';
    
    if (lng.length === 0) return 'A Longitude deve ser valido!';

    if (trees.length === 0) return 'Quantidade de arvores deve ser valido!';

    if (repasse.length === 0) return 'O valor do repasse deve ser valido!';

    if (selectedCompanies.length === 0) return 'Empresa deve ser valido!';

    if (selectedPartners.length === 0) return 'Parceiro deve ser valido!';

    return null;
  }

  async function handleAdicionar(){
    const validate = await validateFields();

    if (validate) {
      addToast({
        type: 'error',
        title: 'Ops!',
        description: `${validate}`,
      });

      return false;
    }

    let valueRepasse = '';
    let treeValueFormated = '';
    if (repasse.length > 0) {
      const aux = repasse.replace(/[^\d,]/g, '');
      valueRepasse = aux.replace(',', '.'); 
    }

    if (treeValue.length > 0) {
      const aux = treeValue.replace(/[^\d,]/g, '');
      treeValueFormated = aux.replace(',', '.');
    }

    try{
      const newData = {
        date,
        date_repasse: dateRepasse,
        geolocation: {lat: Number(lat), lng: Number(lng)},
        trees,
        company_id: selectedCompanies[0],
        partner_id: selectedPartners[0],
        repasse: valueRepasse,
        tree_value: treeValueFormated,
      }

      const result = await createPlantations(newData);

      const data = {
        data: archive,
        company_id: selectedCompanies[0],
        partner_id: selectedPartners[0],
        plantation_id: result.id,
      }

      await uploadPhoto(data);

      handleButton();
    } catch(err) {
      console.log(err);
    }
  }

  const handleDeletePhoto = async (file) => {
    const newArchive = archive.filter(item => item !== file);

    setArchive(newArchive);
  }

  return  <BaseModal
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Adicionar novo plantio
                </Styled.TextTitle>
                <Styled.FormBox>
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
                  <Styled.CoordFormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Data Plantio
                      </Styled.TextLabel>
                      <Styled.DateDiv>
                        <DatePicker
                          locale="pt"
                          dateFormat="dd/MM/yyyy"
                          selected={date}
                          onChange={(date) => setDate(date)} />
                      </Styled.DateDiv>
                    </Styled.FormBox>
                    <Styled.FormBox>
                      {treeValue && selectedCompanies.length > 0 && `Esta empresa tem ${treesLeft} arvores em haver`}
                    </Styled.FormBox>
                  </Styled.CoordFormBox>
                  <Styled.CoordFormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Data Repasse
                      </Styled.TextLabel>
                      <Styled.DateDiv>
                        <DatePicker
                          locale="pt"
                          dateFormat="dd/MM/yyyy"
                          selected={dateRepasse}
                          onChange={(date) => setDateRepasse(date)} />
                      </Styled.DateDiv>
                    </Styled.FormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Valor da Árvore
                      </Styled.TextLabel>
                      <Styled.MaterialInput
                        value={treeValue}
                        onChange={(value) => setTreeValue(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                  </Styled.CoordFormBox>
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

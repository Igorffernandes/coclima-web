const play_store_id = {
  label: 'Play Store ID',
  rules: {
    required: true,
  },
  md: 6,
  name: 'play_store_id',
  isEditable: true,
};

const app_store_id = {
  label: 'App Store ID',
  rules: {
    required: true,
  },
  md: 6,
  name: 'app_store_id',
  isEditable: true,
};

const name = {
  label: 'Nome do APP',
  rules: {
    required: true,
  },
  name: 'name',
  md: 12,
  isEditable: true,
};

const fields = [name, play_store_id, app_store_id];

export default fields;

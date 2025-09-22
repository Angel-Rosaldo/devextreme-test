import Form, { Item } from 'devextreme-react/form';

const GuestsForm = () => {
  const formData = {
    guests: 2,
  };

  return (
    <Form formData={formData}>
      <Item dataField="guests" editorType="dxNumberBox" label={{ text: 'Número de huéspedes' }} />
    </Form>
  );
};

export default GuestsForm;

import Form, { Item } from 'devextreme-react/form';

const AdditionalForm = () => {
  const formData = {
    requests: '',
  };

  return (
    <Form formData={formData}>
      <Item dataField="requests" editorType="dxTextArea" label={{ text: 'Solicitudes especiales' }} />
    </Form>
  );
};

export default AdditionalForm;

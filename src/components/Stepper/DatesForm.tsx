import Form, { Item } from 'devextreme-react/form';

const DatesForm = () => {
  const formData = {
    checkIn: new Date(),
    checkOut: new Date(),
  };

  return (
    <Form formData={formData}>
      <Item dataField="checkIn" editorType="dxDateBox" label={{ text: 'Check-in' }} />
      <Item dataField="checkOut" editorType="dxDateBox" label={{ text: 'Check-out' }} />
    </Form>
  );
};

export default DatesForm;

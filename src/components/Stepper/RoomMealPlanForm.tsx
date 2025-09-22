import Form, { Item } from 'devextreme-react/form';

const RoomMealPlanForm = () => {
  const formData = {
    roomType: 'Estándar',
    mealPlan: 'Desayuno incluido',
  };

  return (
    <Form formData={formData}>
      <Item
        dataField="roomType"
        editorType="dxSelectBox"
        label={{ text: 'Tipo de habitación' }}
        editorOptions={{ items: ['Estándar', 'Suite', 'Deluxe'] }}
      />
      <Item
        dataField="mealPlan"
        editorType="dxSelectBox"
        label={{ text: 'Plan de comidas' }}
        editorOptions={{ items: ['Sin comidas', 'Desayuno incluido', 'Todo incluido'] }}
      />
    </Form>
  );
};

export default RoomMealPlanForm;

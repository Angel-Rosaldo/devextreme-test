import { useState } from 'react';
import Stepper from 'devextreme-react/stepper';
import DatesForm from './DatesForm';
import GuestsForm from './GuestsForm';
import RoomMealPlanForm from './RoomMealPlanForm';
import AdditionalForm from './AdditionalForm';
import Confirmation from './Confirmation';
import '../../styles/styles.css';

const StepperForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const steps = ['Fechas', 'Huéspedes', 'Habitación y comidas', 'Solicitudes', 'Confirmación'];

  const renderStep = () => {
    switch (selectedIndex) {
      case 0:
        return <DatesForm />;
      case 1:
        return <GuestsForm />;
      case 2:
        return <RoomMealPlanForm />;
      case 3:
        return <AdditionalForm />;
      case 4:
        return <Confirmation />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Stepper
        selectedIndex={selectedIndex}
        onItemClick={(e) => setSelectedIndex(e.itemIndex)}
        items={steps.map((text) => ({ text }))}
      />

      <div className="step-content">
        {renderStep()}
      </div>
    </div>
  );
};

export default StepperForm;

// Component imports
import WizardStepper from '../../components/Steppers/WizardStepper';
import WizardStepperSrc from '../../components/Steppers/WizardStepper.jsx?raw';
import ReceiptCheckout from '../../components/Steppers/ReceiptCheckout';
import ReceiptCheckoutSrc from '../../components/Steppers/ReceiptCheckout.jsx?raw';
import StampedForm from '../../components/Steppers/StampedForm';
import StampedFormSrc from '../../components/Steppers/StampedForm.jsx?raw';
import DOSSetup from '../../components/Steppers/DOSSetup';
import DOSSetupSrc from '../../components/Steppers/DOSSetup.jsx?raw';

export const stepperComponents = [
  {
    name: 'WizardStepper',
    component: WizardStepper,
    code: WizardStepperSrc,
  },
  {
    name: 'ReceiptCheckout',
    component: ReceiptCheckout,
    code: ReceiptCheckoutSrc,
  },
  {
    name: 'StampedForm',
    component: StampedForm,
    code: StampedFormSrc,
  },
  {
    name: 'DOSSetup',
    component: DOSSetup,
    code: DOSSetupSrc,
  },
];

export default stepperComponents;

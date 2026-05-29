// Component imports
import SignupBasic from '../../components/Signup/SignupBasic';
import SignupBasicSrc from '../../components/Signup/SignupBasic.jsx?raw';
import SignupSocial from '../../components/Signup/SignupSocial';
import SignupSocialSrc from '../../components/Signup/SignupSocial.jsx?raw';
import SignupMultiStep from '../../components/Signup/SignupMultiStep';
import SignupMultiStepSrc from '../../components/Signup/SignupMultiStep.jsx?raw';
import SignupSplit from '../../components/Signup/SignupSplit';
import SignupSplitSrc from '../../components/Signup/SignupSplit.jsx?raw';
import SignupMinimal from '../../components/Signup/SignupMinimal';
import SignupMinimalSrc from '../../components/Signup/SignupMinimal.jsx?raw';

export const signupComponents = [
  {
    name: 'SignupBasic',
    component: SignupBasic,
    code: SignupBasicSrc,
  },
  {
    name: 'SignupSocial',
    component: SignupSocial,
    code: SignupSocialSrc,
  },
  {
    name: 'SignupMultiStep',
    component: SignupMultiStep,
    code: SignupMultiStepSrc,
  },
  {
    name: 'SignupSplit',
    component: SignupSplit,
    code: SignupSplitSrc,
  },
  {
    name: 'SignupMinimal',
    component: SignupMinimal,
    code: SignupMinimalSrc,
  },
];

export default signupComponents;

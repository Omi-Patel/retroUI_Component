import SignInPage from '../../components/SignIn/SignInPage';
import SignInPageSrc from '../../components/SignIn/SignInPage.jsx?raw';
import TerminalSignIn from '../../components/SignIn/TerminalSignIn';
import TerminalSignInSrc from '../../components/SignIn/TerminalSignIn.jsx?raw';
import ArcadeSignIn from '../../components/SignIn/ArcadeSignIn';
import ArcadeSignInSrc from '../../components/SignIn/ArcadeSignIn.jsx?raw';
import LibraryCardSignIn from '../../components/SignIn/LibraryCardSignIn';
import LibraryCardSignInSrc from '../../components/SignIn/LibraryCardSignIn.jsx?raw';

export const signinComponents = [
  {
    name: 'SignInPage',
    component: SignInPage,
    code: SignInPageSrc,
  },
  {
    name: 'TerminalSignIn',
    component: TerminalSignIn,
    code: TerminalSignInSrc,
  },
  {
    name: 'ArcadeSignIn',
    component: ArcadeSignIn,
    code: ArcadeSignInSrc,
  },
  {
    name: 'LibraryCardSignIn',
    component: LibraryCardSignIn,
    code: LibraryCardSignInSrc,
  },
];

export default signinComponents;

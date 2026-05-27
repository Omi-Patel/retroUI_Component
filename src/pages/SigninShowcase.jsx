import { ComponentShowcasePage } from '../components/showcase';
import { signinComponents } from '../data/components/signin';

export default function SigninShowcase() {
  return (
    <ComponentShowcasePage
      components={signinComponents}
      title="Sign In"
      description="Pixel-perfect, nostalgic sign-in form designs for your modern web applications."
      folder="SignIn"
    />
  );
}

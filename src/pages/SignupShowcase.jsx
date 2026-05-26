import { ComponentShowcasePage } from '../components/showcase';
import { signupComponents } from '../data/components/signup';

export default function SignupShowcase() {
  return (
    <ComponentShowcasePage
      components={signupComponents}
      title="Sign Up"
      description="Pixel-perfect, nostalgic sign-up form designs for your modern web applications."
      folder="Signup"
    />
  );
}

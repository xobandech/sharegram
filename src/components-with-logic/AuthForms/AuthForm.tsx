import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  return (
    <div className="flex max-sm:block">
      <LogInForm />
      <RegisterForm />
    </div>
  );
};

export default AuthForm
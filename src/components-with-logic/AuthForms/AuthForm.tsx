import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  return (
    <div className="flex flex-col">
      <LogInForm />
      <RegisterForm />
    </div>
  );
};

export default AuthForm
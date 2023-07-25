import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  return (
    <div className="max-sm:mb-10">
      <LogInForm />
      <RegisterForm />
    </div>
  );
};

export default AuthForm
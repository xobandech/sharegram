import LogInForm from "@/components-with-logic/AuthForms/LogInForm";
import RegisterForm from "@/components-with-logic/AuthForms/RegisterForm";
const AuthPage = () => {
  return (
    <div>
      <h1>Register or Login</h1>
      <div className="flex flex-col justify-around">
        <LogInForm />
        <RegisterForm />
      </div>
    </div>
  );
};

export default AuthPage;

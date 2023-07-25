import AuthForm from "@/components-with-logic/AuthForms/AuthForm";
import AboutApp from "../../components/AboutApp";
const AuthPage = () => {
  return (
    <div className="flex flex-col items-center mt-10 sm:flex-row sm:justify-center">
      <div className="hidden max-sm:block">
        <AuthForm />
      </div>
      <AboutApp />
      <div className="max-sm:hidden">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;

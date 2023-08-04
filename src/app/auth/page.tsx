import AuthForm from "@/components-with-logic/AuthForms/AuthForm";
import AboutApp from "../../components/AboutApp";
const AuthPage = () => {
  return (
    <div className="flex flex-col items-center mt-10 md:flex-row md:justify-center">
      <div className="hidden max-md:block">
        <AuthForm />
      </div>
      <AboutApp />
      <div className="max-md:hidden">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;

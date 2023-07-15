import { handleRegistration } from "./LoginServerFunctions";
const RegisterForm = () => {
  return (
    <form className="flex " action={handleRegistration}>
      <header>Registration</header>
      <label htmlFor="username">Username</label>
      <input className="text-black" type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input className="text-black" type="text" name="password" />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input className="text-black" type="text" name="confirmPassword" />
      <button
        type="submit"
        className="outline outline-2 outline-white bg-[#443]"
      >
        Sign up
      </button>
    </form>
  );
};

export default RegisterForm
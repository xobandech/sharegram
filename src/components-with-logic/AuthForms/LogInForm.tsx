import { handleLogin } from "./LoginServerFunctions";
const LogInForm = () => {
  return (
    <form action={handleLogin} className="">
      <header>Login</header>
      <label htmlFor="username">Username</label>
      <input className="text-black" type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input className="text-black" type="text" name="password" />
      <button
        type="submit"
        className="outline outline-2 outline-white bg-[#443]"
      >
        Log in
      </button>
    </form>
  );
};

export default LogInForm;

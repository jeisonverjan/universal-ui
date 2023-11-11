function LoginForm() {
  return (
    <form className="flex h-full w-full flex-col justify-center items-start bg-slate-800 rounded-xl px-4 py-2 z-10 gap-2">
      <div className="relative flex items-center">
        <div className="w-4 h-4 bg-blue-400 rounded-full absolute left-[4px]"></div>
        <div className="w-6 h-6 bg-blue-200 rounded-full absolute -z-10 animate-pulse"></div>

        <h1 className="text-blue-400 font-bold text-4xl ml-10">Login</h1>
      </div>
      <p className="text-slate-300 text-lg">
        Login now and get full access to our app.
      </p>

      <label htmlFor="" className="custom-input">
        <input type="text" required />
        <span>UserName</span>
      </label>
      <label htmlFor="" className="custom-input">
        <input type="password" required />
        <span>Password</span>
      </label>
      <button className="w-full bg-blue-400 text-white font-bold p-3 rounded-xl hover:bg-blue-500">
        Submit
      </button>
      <p className="text-center text-slate-200 w-full">
        Already have not an acount ?{" "}
        <a
          href="#"
          className="text-blue-400 border-b-[1px] border-blue-400 hover:text-blue-500"
        >
          SignUp
        </a>{" "}
      </p>
    </form>
  );
}

export default LoginForm;

import { SubmitHandler, useForm } from 'react-hook-form';
import LandingImg from '../images/Finn Food.png';
import * as authen from '../service/auth';
import { useContext, useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, watch } = useForm<authen.UserLoginProps>();
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<Boolean>(false);
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const onSubmit: SubmitHandler<authen.UserLoginProps> = async (data: any) => {
    const userForm = {
      email: data.email,
      password: data.password,
    };
    try {
      const userlogin = await authen.login(userForm);
      localStorage.setItem('user', JSON.stringify(userlogin.data));
      loginUser(userlogin.data);
      navigate('/');
      console.log(userlogin);
    } catch (err) {
      setErrorMessage(true);
      console.log('login', err);
    }
  };
  useEffect(() => {
    setErrorMessage(false);
  }, [watch('email')]);
  return (
    <div>
      <div className="bg-lime-400/30 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen px-6">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                <img
                  alt={''}
                  height="250"
                  width="250"
                  src={LandingImg} // change to suit your needs
                  className="object-cover h-auto bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
                />

                <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-4xl text-center font-extrabold text-green-500 ">
                    Login
                  </h3>
                  <div className="px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-green-500">
                        Email
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm rounded-full text-gray-500 border border-green-500 appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        {...register('email')}
                      />
                    </div>
                    <div className="mb-4 ">
                      <div className="relative  container mx-auto">
                        <label className="block mb-2 text-sm font-bold text-green-500">
                          Password
                        </label>
                        <input
                          {...register('password')}
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          className="w-full px-3 py-2 mb-3 text-sm rounded-full text-gray-500 border border-green-500 appearance-none focus:outline-none focus:shadow-outline"
                        />

                        <button
                          type="button"
                          className="absolute inset-y-0 mt-4 right-0 flex items-center px-4 text-green-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:text-green-500 hover:bg-white border-2 border-green-500 focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    {errorMessage && (
                      <div>
                        <h1 className="text-rose-500">* Please try again</h1>
                      </div>
                    )}
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                      <p
                        className="inline-block text-sm text-green-400 align-baseline hover:text-green-500"
                        onClick={() => {
                          window.location.replace('/register');
                        }}
                      >
                        Don't have an account? Register!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

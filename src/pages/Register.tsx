import AvatarImg from '../3d-avatar-woman.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as authen from '../service/auth';
import { useEffect, useState } from 'react';
type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
const Register = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userForm = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };
    try {
      await authen.register(userForm);
    } catch (err) {
      console.log('register', err);
    }
  };
  return (
    <div className="bg-lime-400/20 p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-screen px-6">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <img
                alt={''}
                height="250"
                width="250"
                src={AvatarImg} // change to suit your needs
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
              />

              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-4xl text-center font-extrabold text-green-500 ">
                  Be part of Finn-Food
                </h3>
                <div className="px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-green-500">
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm text-gray-500  rounded-full border border-green-500 appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        {...register('first_name')}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-green-500">
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-500 border border-green-500 rounded-full appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        {...register('last_name')}
                      />
                    </div>
                  </div>
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
                    <label className="block mb-2 text-sm font-bold text-green-500">
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-green-500 border border-green-500 rounded-full  appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      {...register('password')}
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:text-green-500 hover:bg-white border-2 border-green-500 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <p
                      className="inline-block text-sm text-green-400 align-baseline hover:text-green-500"
                      onClick={() => window.location.replace('/login')}
                    >
                      Already have an account? Login!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

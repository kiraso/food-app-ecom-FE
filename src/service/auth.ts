import axios, { AxiosResponse } from 'axios';
export interface UserDetailProps {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
}

export interface UserLoginProps {
    email:String,
    password:String,
}


export async function register(UserDetailProps:UserDetailProps): Promise<AxiosResponse<any>> {
    return axios.post('http://localhost:4001/register',{...UserDetailProps},);
  }

export async function login(UserLoginProps:UserLoginProps): Promise<AxiosResponse<any>> {
    return axios.post('http://localhost:4001/login',{...UserLoginProps});
  }
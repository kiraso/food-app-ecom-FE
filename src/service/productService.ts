import axios, { AxiosResponse } from 'axios';
export interface ProductListProps {
    prod_desc: string;
    prod_name: string;
    prod_price: number;
    updated_at: string;
    _id:string;
  }

export async function getProductList(): Promise<AxiosResponse<any>> {
    return axios.get('http://localhost:4001/products');
  }


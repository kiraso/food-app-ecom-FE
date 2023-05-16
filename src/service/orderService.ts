import axios, { AxiosResponse } from "axios";
export interface OrderListProps {
    order_name: string;
    order_price: number;
    order_qty: number;
    order_type:number;

  }

export async function insertOrderList(orderList:OrderListProps): Promise<AxiosResponse<any>> {
    return axios.post('http://localhost:4001/cartlist',{...orderList});
  }

export async function getOrderList(): Promise<AxiosResponse<any>> {
    return axios.get('http://localhost:4001/cartlist')}
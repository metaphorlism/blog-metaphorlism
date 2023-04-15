import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

async function fetchData(props: AxiosRequestConfig) {
  return axios({
    ...props,
    baseURL: process.env.API_SERVER,
    method: props.method || "GET",
  });
}

export async function getBlog(id: number) {
  return fetchData({ url: `/todos/${id}` }).then(
    (res: AxiosResponse<{ title: string; id: number }>) => {
      return res.data;
    }
  );
}

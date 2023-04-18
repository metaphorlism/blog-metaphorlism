import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

async function fetchData(props: AxiosRequestConfig) {
  return axios({
    ...props,
    baseURL: process.env.API_SERVER,
    method: props.method || "GET",
  });
}

// export async function getBlog(id: number) {
//   return fetchData({ url: `/todos/${id}` }).then(
//     (res: AxiosResponse<{ title: string; id: number }>) => {
//       return res.data;
//     }
//   );
// }

export async function getBlog(id: number) {
  return fetchData({
    url: `/ds2egk1ut/raw/upload/v1681706923/blog_markdowns/154f3360-4b58-4610-98c8-c77b97646fa9.md`,
  }).then((res: AxiosResponse<string>) => {
    return res.data;
  });
}

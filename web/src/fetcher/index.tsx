import useSWR from "swr"
import { API_URL } from "../config/config"

// import {} from
export interface FetchType {
  url: string;
  method?: "GET" | "POST";
  body?: BodyInit | null | undefined
}

// const fetcher = ({body,method,url}: FetchType) => fetch( API_URL + url, { method, body }).then(res => res.json())
export const fetcher = (input: FetchType) =>  fetch(input.url, input).then(res => {
  return res.json()
})
const useFetcher = (url: string,fetcherI: typeof fetcher) => {
  const {data, error} = useSWR(url, fetcherI )
  return {
    data: data?.data,
    isError: error || (data?.resultCode === -1),
    loading: !data && !error
  }
}

export default useFetcher
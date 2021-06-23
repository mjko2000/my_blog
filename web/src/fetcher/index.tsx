import useSWR from "swr"
import { API_URL } from "../config/config"

// import {} from
export interface FetchType {
  url: string;
  method?: "GET" | "POST";
  body?: BodyInit | null | undefined
}

export const fetcher = (input: FetchType) =>  fetch(input.url, {...input, headers: {"locale": "vi"}}).then(res => {
  console.log("fetching")
  return res.json()
})
const useFetcher = (url: string,fetcherI: typeof fetcher) => {
  const {data, error} = useSWR(url,{ revalidateOnReconnect: true, fetcher: fetcherI } )
  return {
    data: data?.data,
    isError: error || (data?.resultCode === -1),
    loading: !data && !error
  }
}

export default useFetcher
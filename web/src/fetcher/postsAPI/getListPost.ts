import useSWR from "swr"
import useFetcher, { fetcher } from ".."
import { API_URL } from "../../config/config"
export const useListPostAPI = () => {
  const url = `${API_URL}posts/getListPost`
  return useFetcher(url,() => fetcher({url}))
}
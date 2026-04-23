import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {

  let headers: any = {}

  const token = useCookie('XSRF-TOKEN')

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string
  }

  headers['Accept'] = 'application/json'


  // because this api called is made on the server. Use to ensure that the user data persist after page refresh 
  if (process.server) {
    headers = {

      ...headers,
      ...useRequestHeaders(["referer", "cookie"])
    }
  }
  const config = useRuntimeConfig();
  return useFetch(`${config.public.apiBase}/${path}`, {

    credentials: "include",
    watch: false,
    ...options,

    headers: {
      ...headers,
      ...options?.headers
    }
  });


  return  [
    ''
  ]
}

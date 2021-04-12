import axios, { AxiosResponse, AxiosError } from "axios";

/**
 * Manages all requests to the API.
 */
export class BaseHttpService {
  protected async get(url: string, options = {}): Promise<AxiosResponse> {
    return axios.get(`${url}`, options);
  }
}

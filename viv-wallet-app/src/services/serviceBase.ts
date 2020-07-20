import axios, { AxiosInstance } from "axios";
import { BACKEND_BASE_URL, REQUEST_TIMEOUT_MS } from "@/config/constants";
import { getToken } from "x4b-ui";

export class ServiceBase {
    protected http: AxiosInstance;

    constructor(http?: AxiosInstance, route = "/users") {
        this.http =
            http ||
            axios.create({
                baseURL: `${BACKEND_BASE_URL}${route}`,
                timeout: REQUEST_TIMEOUT_MS,
                headers: { Authorization: `Bearer ${getToken()}` },
                withCredentials: true
            });
    }
}

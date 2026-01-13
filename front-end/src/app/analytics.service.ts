import { Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";


@Injectable({providedIn: 'root'})
export class AnalyticsServices {
  private axios_instance: AxiosInstance | null = null;

  constructor() {
    this.axios_instance = axios.create({
      baseURL:  'http://127.0.0.1:8000/api',
    });
  }

  async getStatsMonth() {
    try {
      const result = await this.axios_instance?.get("analytics/");
      return result!.data;
    } catch (err: Error | any) {
      return { err: err || err.msg };
    }
  }
}

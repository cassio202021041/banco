import axios, { AxiosInstance } from "axios";
import { Injectable } from "@angular/core";

export interface IExpense {
  name: string;
  ammount: number;
  method: "credit_card" | "debit_card" | "card" | "pix" | "money";
  date: string;
  category: null | string;
  due_date: null | string;
  hasInstallments: boolean;
  installments: null | number;
}

@Injectable({providedIn: 'root'})
export class ExpensesServices {
  private axios_instance: AxiosInstance | null = null;

  constructor() {
    this.axios_instance = axios.create({
      baseURL:  'http://127.0.0.1:8000/api',
    });
  }

  async getExpenses() {
    try {
      const result = await this.axios_instance?.get("expenses/");
      return result!.data;
    } catch (err: Error | any) {
      return { err: err || err.msg };
    }
  }

  async getExpense(id: string) {
    try {
      const result = await this.axios_instance?.get(`expenses/${id}`);
      return result;
    } catch (err: Error | any) {
      return { err: err || err.msg };
    }
  }

  async registerExpense(expense: IExpense) {
    try {
      const result = await this.axios_instance?.post("expenses/",
        expense
      );
      return result;
    } catch (err: Error | any) {
      return { err: err || err.msg };
    }
  }

  async updateExpense(id: string, expense: IExpense) {
    try {
      const result = await this.axios_instance?.patch(`expenses/${id}`, {
        expense
      });
      return result;
    } catch (err: Error | any) {
      return { err: err || err.msg };
    }
  }

  async deleteExpense(id: string) {
    try {
      const result = await this.axios_instance?.delete(`expenses/${id}`);
      return result;
    } catch (err: Error | any) {
      return { err: err || err.msg };
    }
  }
}

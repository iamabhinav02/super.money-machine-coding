export type IExpenseType = "INCOME" | "EXPENSE";

export interface IExpense {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: IExpenseType;
}

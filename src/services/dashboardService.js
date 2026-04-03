import Record from "../models/Record.js";

export const getSummary = async (userId) => {
  const records = await Record.find({ createdBy: userId });

  let income = 0,
    expense = 0;

  records.forEach((r) => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
  };
};
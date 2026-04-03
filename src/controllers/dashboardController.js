import Record from "../models/Record.js";

// SUMMARY
export const summary = async (req, res) => {
  const records = await Record.find({ createdBy: req.user.id });

  let income = 0,
    expense = 0;

  records.forEach((r) => {
    r.type === "income" ? (income += r.amount) : (expense += r.amount);
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
  });
};

// CATEGORY TOTALS
export const categoryTotals = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { createdBy: req.user.id } },
    { $group: { _id: "$category", total: { $sum: "$amount" } } },
  ]);

  res.json(data);
};

// MONTHLY TRENDS
export const trends = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { createdBy: req.user.id } },
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$amount" },
      },
    },
    { $sort: { "_id": 1 } },
  ]);

  res.json(data);
};

// RECENT
export const recent = async (req, res) => {
  const data = await Record.find({ createdBy: req.user.id })
    .sort({ createdAt: -1 })
    .limit(5);

  res.json(data);
};
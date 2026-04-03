import Record from "../models/Record.js";

// CREATE
export const create = async (req, res, next) => {
  try {
    const { amount, type } = req.body;

    if (!amount || !type)
      return res.status(400).json({ message: "Missing fields" });

    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
};

// GET (FILTERING)
export const getAll = async (req, res, next) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = { createdBy: req.user.id };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const records = await Record.find(filter).sort({ createdAt: -1 });

    res.json(records);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const update = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!record)
      return res.status(404).json({ message: "Record not found" });

    res.json(record);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const remove = async (req, res, next) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
};
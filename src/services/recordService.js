export const updateRecord = async (id, data) => {
  return await Record.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteRecord = async (id) => {
  return await Record.findByIdAndDelete(id);
};
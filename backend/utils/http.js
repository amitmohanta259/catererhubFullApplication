export const asyncHandler = fn => (req, res) =>
  Promise.resolve(fn(req, res)).catch(err => {
    console.error(err);
    res.status(500).json({ error: err.message || "Server error" });
  });

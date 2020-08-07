module.exports = {
  errorRes(
    res,
    errMsg = "failed operation",
    statusCode = 500,
    data = undefined
  ) {
    return res.status(statusCode).json({
      success: false,
      error: errMsg,
      data,
    });
  },

  successRes(res, data = undefined, statusCode = 200) {
    return res.status(statusCode).json({ success: true, data });
  },
};

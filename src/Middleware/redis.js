const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/helper");

module.exports = {
  clearDataRedis: (req, res, next) => {
    client.flushall((err, data) => {
      console.log(data);
    });
    next();
  },
  // MENU
  getMenuItemRedis: (req, res, next) => {
    const { page, limit, sort, asc_desc } = req.query;
    client.get(`getmenu:${JSON.stringify(req.query)}`, (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, JSON.parse(data));
      } else {
        console.log("Data not available");
        next();
      }
    });
  },
  getItemByNameRedis: (req, res, next) => {
    const { name } = req.query;
    client.get(`searchname:${JSON.stringify(req.query)}`, (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, JSON.parse(data));
      } else {
        console.log("Data not available");
        next();
      }
    });
  },
  getMenuIdRedis: (req, res, next) => {
    const { id } = req.params;
    client.get(`getmenuid:${JSON.stringify(req.params)}`, (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not available");
        next();
      }
    });
  },

  // CATEGORY
  getCategoryItemRedis: (req, res, next) => {
    client.get("getcategoryitem", (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  getCategoryIdRedis: (req, res, next) => {
    const { id } = req.params;
    client.get(`getcategoryid:${JSON.stringify(req.params)}`, (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  // HISTORY
  getAllHistoryRedis: (req, res, next) => {
    client.get("gethistory", (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  getHistoryIdRedis: (req, res, next) => {
    const { id } = req.params;
    client.get(`gethistoryid:${JSON.stringify(req.params)}`, (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not ready");
        next();
      }
    });
  },
  getTodayTotalRedis: (req, res, next) => {
    client.get("gettodaytotal", (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  getTotalThisYearRedis: (req, res, next) => {
    client.get("totalthisyear", (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  getRecentOrdersRedis: (req, res, data) => {
    client.get("recentorder", (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next;
      }
    });
  },
  chartKickRedis: (req, res, next) => {
    client.get("chart", (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  // ORDERS
  getAllOrderRedis: (req, res, next) => {
    client.get("getorders", (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  getOrderIdRedist: (req, res, next) => {
    const { id } = req.params;
    client.get(`getorderid:${JSON.stringify(req.params)}`, (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
  getOrderThisWeekRedist: (req, res, next) => {
    const { id } = req.params;
    client.get(`getordersweek`, (err, data) => {
      if (!err && data != null) {
        return helper.response(res, 200, "Data is ready", JSON.parse(data));
      } else {
        console.log("Data not found");
        next();
      }
    });
  },
};
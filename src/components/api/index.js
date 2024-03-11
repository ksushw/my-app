import { _getResponseData } from "../../utils/get-response-data";
import { errorHandler } from "../../utils/erorHandler";
import MD5 from "crypto-js/md5";

errorHandler();

const correctPassword = () => {
  var now = new Date();
  return MD5(
    `Valantis_${now.getFullYear()}${
      now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1
    }${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}`
  ).toString();
};

export async function getIds(offset, limit) {
  return await fetch(" http://api.valantis.store:40000/", {
    method: "POST",
    headers: {
      "X-Auth": correctPassword(),
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      action: "get_ids",
      params: { offset: offset, limit: limit },
    }),
  })
    .then(_getResponseData)
    .then((data) => {
      return data.result;
    });
}

export async function getFilteredIds(param, value) {
  return await fetch("http://api.valantis.store:40000/", {
    method: "POST",
    headers: {
      "X-Auth": correctPassword(),
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      action: "filter",
      params: { [param]: value },
    }),
  })
    .then(_getResponseData)
    .then((data) => {
      return data.result;
    });
}

export async function getItems(items) {
  return await fetch(" http://api.valantis.store:40000/", {
    method: "POST",
    headers: {
      "X-Auth": correctPassword(),
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      action: "get_items",
      params: { ids: items },
    }),
  })
    .then(_getResponseData)
    .then((data) => {
      return data.result;
    });
}

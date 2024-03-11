import { _getResponseData } from "../../utils/get-response-data";
import { errorHandler } from "../../utils/erorHandler";

errorHandler();

export async function getIds(offset, limit) {
  return await fetch(" http://api.valantis.store:40000/", {
    method: "POST",
    headers: {
      "X-Auth": "cb5e6110eb5056353103b42e740db829",
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
      "X-Auth": "cb5e6110eb5056353103b42e740db829",
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
      "X-Auth": "cb5e6110eb5056353103b42e740db829",
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

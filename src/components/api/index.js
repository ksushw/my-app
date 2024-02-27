import { _getResponseData } from "../../utils/get-response-data";

export async function getIds(offset, limit) {
  return await fetch(" http://api.valantis.store:40000/", {
    method: "POST",
    headers: {
      "X-Auth": "30fec2904fe148b7fe7cc5eeb3df9d6e",
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

export async function getItems(items) {
  return await fetch(" http://api.valantis.store:40000/", {
    method: "POST",
    headers: {
      "X-Auth": "30fec2904fe148b7fe7cc5eeb3df9d6e",
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

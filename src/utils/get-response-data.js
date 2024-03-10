export const _getResponseData = (res) => {
  if (!res.ok) {
    console.error(`Ошибка: ${res.status}`);
  }
  return res.json();
};

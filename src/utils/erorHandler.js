export async function errorHandler() {
  const { fetch } = window;
  window.fetchAuth = async (...args) => {
    let [link, config] = args;
    let response = await fetch(link, config);
    if (!response.ok) {
      console.error(`Ошибка: ${response.status}`);
      response = await fetch(link, {
        ...config,
      });
    }
    return response;
  };
}

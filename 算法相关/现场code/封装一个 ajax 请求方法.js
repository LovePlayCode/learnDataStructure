/**
 * 请使用 fetch 封装一个 request 方法，支持 GET 和 POST 请求，并具有超时功能。
 */
function myFetch(url, options, timeout) {
  const { body } = options ?? {};
  if (typeof body === "object" && body !== null) {
    try {
      const jsonStr = JSON.stringify(body);
      options.body = jsonStr;
    } catch (error) {}
  }
  return new Promise((res, rej) => {
    let id = setTimeout(() => {
      rej("error");
    }, timeout);
    fetch(url, options)
      .then((response) => {
        clearTimeout(id);
        if (!response.ok) {
          rej(new Error(`HTTP 错误！状态：${response.status}`));
        }

        return response.json();
      })
      .then((res) => {
        res({
          success: "true",
          data: res,
        });
      });
  });
}

/**
 * 用useReducer实现一个useState
 */

/**
 * 封装一个 ajax 请求方法
描述：请使用 fetch 封装一个 request 方法，支持 GET 和 POST 请求，并具有超时功能。
 */

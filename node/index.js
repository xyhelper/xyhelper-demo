import { ChatGPTUnofficialProxyAPI } from "chatgpt";

async function example() {
  const api = new ChatGPTUnofficialProxyAPI({
    accessToken: "xyhelper-nodejs-test",
    apiReverseProxyUrl: "https://freechat.xyhelper.cn/backend-api/conversation",
  });

  const res = await api.sendMessage("Hello World!");
  console.log(res.text);
}

example();
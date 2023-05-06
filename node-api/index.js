const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "sk-xxxxxxxxxx",
  basePath: "https://openai-api-proxy.xyhelper.cn/v1"
});

const openai = new OpenAIApi(configuration);

async function main() {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "讲个睡前故事"}],
  });

  console.log(completion.data.choices[0].message);
}

main(); // 调用异步函数

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ChatPromptTemplate } from "@basproul/core/prompts";

export async function POST() {
  const name = "Bob";
  const objectName = "chair";
  const myImage = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAA";
  const myUrl = "https://www.example.com/image.png";
  const template = ChatPromptTemplate.fromMessages([
    ["system", "You are an AI assistant named {name}"],
    [
      "human",
      [
        {
          type: "image_url",
          image_url: "data:image/jpeg;base64,{myImage}",
        },
        {
          type: "text",
          text: "What is in this object {objectName}",
        },
        {
          type: "image_url",
          image_url: {
            url: "{myUrl}",
            detail: "high",
          },
        },
      ],
    ],
  ]);
  const messages = await template.formatMessages({
    name,
    objectName,
    myImage,
    myUrl,
  });

  return new Response(JSON.stringify(messages), {
    status: 200,
  });
}

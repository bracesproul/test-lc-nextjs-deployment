// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ChatPromptTemplate } from "@basproul/core/prompts";
import { HumanMessage, SystemMessage } from "@basproul/core/messages";

type Data = {
  name: string;
};

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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
        {
          type: "image_url",
          image_url: {
            path: "/Users/bracesproul/bracesproul-old/bracesproul/Desktop/zoomed_out_pfp.png",
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

  console.log(messages);

  const newSystemMessage = new SystemMessage("You are an AI assistant named Bob");
  const newHumanMessage = new HumanMessage({
    content: [
      {
        type: "image_url",
        image_url: {
          url: `data:image/jpeg;base64,${myImage}`,
        },
      },
      {
        type: "text",
        text: `What is in this object ${objectName}`,
      },
      {
        type: "image_url",
        image_url: {
          url: `${myUrl}`,
          detail: "high",
        },
      },
    ],
  });

  if (messages[0] === newSystemMessage && messages[1] === newHumanMessage) {
    console.log("great success, they match!")
  }
  
  if (messages[0] !== newSystemMessage) {
    console.log("newSystemMessage does not match")
    console.log(JSON.stringify(messages[0], null, 2));
    console.log(JSON.stringify(newSystemMessage, null, 2));
  }

  if (messages[1] !== newHumanMessage) {
    console.log("newHumanMessage does not match")
    console.log(JSON.stringify(messages[1], null, 2));
    console.log(JSON.stringify(newHumanMessage, null, 2));
  }

  return new Response('Hello, Next.js!', {
    status: 200,
  })
}

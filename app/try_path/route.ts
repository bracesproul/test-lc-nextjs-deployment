// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ChatPromptTemplate } from "@basproul/core/prompts";
import path from 'path'

export async function POST() {
  const agentPath = path.resolve('./public', "agent.png");

  const template = ChatPromptTemplate.fromMessages([
    [
      "human",
      [
        {
          type: "image_url",
          image_url: {
            path: agentPath,
            detail: "high",
          },
        },
      ],
    ],
  ]);
  const messages = await template.formatMessages({});

  return new Response(JSON.stringify(messages), {
    status: 200,
  });
}

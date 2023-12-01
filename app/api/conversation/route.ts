import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configiration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configiration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    console.log(messages);
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!configiration.apiKey)
      return new NextResponse("OpenAI API key not configured", { status: 500 });

    if (!messages)
      return new NextResponse("Message is required", { status: 400 });

    const response = await openai.createChatCompletion({
      messages,
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

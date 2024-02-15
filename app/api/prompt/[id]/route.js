const { default: Prompt } = require("@models/prompt");
const { connectToDB } = require("@utils/database");

export const GET = async ({ params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findByID(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

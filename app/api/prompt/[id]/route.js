const { default: Prompt } = require("@models/prompt");
const { connectToDB } = require("@utils/database");

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findByID(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  // passing new stuff through request
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();
    // find the specific prompt via ID
    const existingPrompt = await Prompt.findByID(params.id);

    if (!existingPrompt) return new Response("Prompt not found", { status: 404 });
    // overriding starts here
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    // save
    await existingPrompt.save();

    // return a readable version of the data we collected
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    new Response("Cannot edit file", { status: 505 });
  }
};

const { Schema, model, models, default: mongoose } = require("mongoose");

const PromptSchema = new Schema({
  creator: {
    // this is the type to required the user's ID
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;

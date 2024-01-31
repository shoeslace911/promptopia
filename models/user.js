import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: "String",
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
    match: [
      /^(?=[a-zA-Z0-9\s()]{6,25}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9\s()]+(?<![_.])$/,
      "Username invalid, it should contain 6-25 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

//the reason why it's "if-ed" its so that it only triggers once and only when needed
const User = models.User || model("User", UserSchema);

export default User;

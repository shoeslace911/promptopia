const { Schema, model, models } = require("mongoose");

const UserSchema = {
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
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
};

//the reason why it's "if-ed" its so that it only triggers once and only when needed
const User = model.User || model("User", UserSchema);

export default User;

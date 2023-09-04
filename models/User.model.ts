import { models, model, Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "The Name Is Required"],
  },

  email: {
    type: String,
    required: [true, 'The E-mail Is Required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'The Password Is Required'],
  },
});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
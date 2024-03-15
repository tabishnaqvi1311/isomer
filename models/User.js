import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: String,
    password: String,
    newAcc: Boolean,
    role: String,
})

const User = models.User || model("User", UserSchema);

export default User;
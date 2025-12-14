import User from "../models/user.model.js"
import UrlModel from "../models/shortUrl.model.js"

export const findUserByEmail = async(email) => {
    return await User.findOne({email});
}
export const findUserByEmailUser = async (email) => {
  const normalizedEmail = email.trim().toLowerCase();
  return await User.findOne({ email: normalizedEmail });
}

export const findUserById = async(id) => {
    return await User.findById(id);
    
}
export const findUserByEmailByPassword = async (email) => {
    return await User.findOne({email} ).select('+password')   
}

export const createUser = async (name, email, password) => {
    const newUser = new User({name, email, password})
    await newUser.save()
    return newUser
}
export const getAllUserUrlsDao = async (id) => {
    // console.log("Looking for URLs of user:", id);
    const urls = await UrlModel.find({user:id });
    // console.log("Found URLs: ", urls);
    return urls;
};


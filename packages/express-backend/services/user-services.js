import User from '../models/user.js';

export async function findAllUsers() {
  return await User.find();
}

export async function findUserByName(name) {
  return await User.find({ name });
}

export async function findUserByJob(job) {
  return await User.find({ job });
}

export async function findUserByNameAndJob(name, job) {
  return await User.find({ name, job });
}

export async function findUserById(id) {
  return await User.findById(id);
}

export async function deleteUserById(id) {
  return await User.findByIdAndDelete(id);
}

export async function createUser(data) {
  const user = new User(data);
  return await user.save();
}


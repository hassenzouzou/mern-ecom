import userModel from "../models/userModel";

interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "User already exists!", statusCode: 404 };
  }

  const newUser = new userModel({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  await newUser.save();

  return { data: newUser, statusCode: 200 };
};

interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { error: { message: "Incorrect email or password" } };
  }

  const passwordMatch = password === findUser.password;
  if (passwordMatch) {
    return findUser;
  }

  return { error: { message: "Incorrect email or password" } };
};

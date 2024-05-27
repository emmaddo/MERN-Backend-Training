import User from '../../Models/User/user';

export const createUser = async (userData: any) => {
  try {
    const { firstName, lastName, username, email, password } = userData;
    const user = new User({ firstName, lastName, username, email, password });
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

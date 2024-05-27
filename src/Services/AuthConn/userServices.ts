import User from '../../Models/User/user';

export const findUserByEmail = async (email: string) => {
  return User.findOne({ email });
};

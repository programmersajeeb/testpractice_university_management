import { IUser } from './users.interface';
import { User } from './users.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);

  //   autogeneraetd incremetn id
  //   default password

  if (!createUser) {
    throw new Error('failed to create user');
  }
  return createdUser;
};

export default {
  createUser,
};

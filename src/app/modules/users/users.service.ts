import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { geenrateUser } from './user.utils';
import { IUser } from './users.interface';
import { User } from './users.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //   autogeneraetd incremetn id
  const id = await geenrateUser();
  user.id = id;
  //   default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'failed to create user');
  }
  return createdUser;
};

export default {
  createUser,
};

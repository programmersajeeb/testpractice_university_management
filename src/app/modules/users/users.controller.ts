import { Request, Response } from 'express';
import usersService from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body();
    const result = await usersService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'Successfully create user',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create the user',
    });
  }
};

export default { createUser };

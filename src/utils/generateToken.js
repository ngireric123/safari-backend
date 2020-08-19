import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = user => {
  const token = JWT.sign(
    {
      payload: {
        id: user.id,
      },
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );
  return token;
};

export default generateToken;

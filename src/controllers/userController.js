import models from '../database/models';
import responseUtil from '../utils/responseUtil';
import strings from '../utils/stringsUtil';
import hashPassword from '../utils/hashPassword';
import generateToken from '../utils/generateToken';

export default class UserController {
  static signup({ body: { userName, email, password } }, res) {
    const user = models.Users.build({
      userName,
      email,
      password: hashPassword(password)
    });

    user.save().then(user => {
      const token = generateToken(user);
      console.log(user);

      return responseUtil(res, 201, strings.users.success.SIGNUP_SUCCESS, {
        user_id: user.id,
        userName: user.userName,
        email: user.email,
        gender: user.gender,
        created_at: user.createdAt.toString(),
        updated_at: user.updatedAt.toString(),
        token,
      });
    });
  }
}

import models from '../database/models';
import responseUtil from './responseUtil';

const verifyUserExist = (res, property, message) => {
  models.Users.count({
    where: property
  }).then(count => {
    if (count > 0) {
      return responseUtil(res, 409, message);
    }
  });
};

export default verifyUserExist;

import User from '../models/User';

class Auth {
  static isAuthorized(role) {
    return (req, res, next) => {
      if(role !== req.user.role) return res.status(400).send({ err: 'Unauthorized action!' });
      next();
    }
  }
}


export default Auth;

import User from '../models/User';

class Auth {
  static isAuthorized(role) {
    return (req, res, next) => {
      console.log('CUSER',req.user);
      if(!req.user) return res.status(403).send({ err: 'Unauthorized action!' });
      if(role !== req.user.role) return res.status(400).send({ err: 'Unauthorized action!' });
      next();
    }
  }

  static userExist(req, res, next) {
    console.log(req.user);
    if(!req.user) return res.status(403).send({ err: 'No user.'})
    next();
  }
}


export default Auth;

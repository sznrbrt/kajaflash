import {get, post, ajax} from "jquery";

module.exports = {
  authenticate() {
    // Checked if logged in
    get("//localhost:3000/data/user/profile")
      .done(( data , status, x) => {
        if(data.charAt(0) === '<') return this.onChange(false);
        else return this.onChange(true)
      })
      .fail(() => {
        console.log('Not logged in.');
        this.onChange(false)
      });
  },

  login(email, password) {
    if(!email || !password) return this.onChange(false)
    let credentials = {'email': email, 'password': password};
    post( "//localhost:3000/data/auth/local/login", credentials)
      .done((data , status) => {
        this.onChange(true);
      })
      .fail(() => {
        this.onChange(false)
      });
  },

  register(userObj, cb) {
    post( "//localhost:3000/data/auth/local/register", userObj)
      .done(function( data ) {
        // Logged in
        cb()
      });
  },

  getToken() {
    // gets token from localstorage - will this work?
    return localStorage.token
  },

  logout(cb) {
    // deletes token, calls callback
    delete localStorage.token
    if (cb) cb()
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {

  }
}

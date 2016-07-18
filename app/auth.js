import {get, post, ajax} from "jquery";

module.exports = {
  authenticate() {
    // Checked if logged in
    ajax({
      url: "//localhost:3000/data/user/profile",
      method: "GET",
      xhrFields: {
        withCredentials: true
      },
      async: true,
      crossDomain: true,
      "cache-control": "no-cache"
    })
    .done((data , status, x) => {
      console.log(typeof data);
      console.log(data);
      if(typeof data === 'string' && data.charAt(0) === '<') return this.onChange(false);
      else return this.onChange(true)
    })
    .fail(() => {
      console.log('Not logged in.');
      this.onChange(false)
    });
  },

  login(email, password, cb) {
    if(!email || !password) return this.onChange(false)
    let credentials = {'email': email, 'password': password};
    ajax({
      url: "//localhost:3000/data/auth/local/login",
      data: credentials,
      method: "POST",
      xhrFields: {
        withCredentials: true
      }
    })
    .done((data , status) => {
      console.log(data);
      this.onChange(true);
      cb(true)
    })
    .fail(() => {
      this.onChange(false)
    });

    // post( "//localhost:3000/data/auth/local/login", credentials)
    //   .done((data , status) => {
    //     this.onChange(true);
    //   })
    //   .fail(() => {
    //     this.onChange(false)
    //   });
  },

  register(name, email, password) {
    let newUser = { "name": name, "email": email, "password": password};
    console.log(newUser);
    ajax({
      url: "//localhost:3000/data/auth/local/register",
      method: "POST",
      xhrFields: {
        withCredentials: true
      },
      async: true,
      crossDomain: true,
      data: newUser,
      "cache-control": "no-cache"
    })
    .done((data , status, x) => {
      console.log('Registered.');
    })
    .fail(() => {
      console.log('Fail.');
    });
  },

  getToken() {
    // gets token from localstorage - will this work?
    return localStorage.token
  },

  logout(cb) {
    ajax({
      url: "//localhost:3000/data/auth/local/logout",
      method: "DELETE",
      xhrFields: {
        withCredentials: true
      }
    })
    .done((data , status) => {
      this.onChange(false);
      cb(true);
    })
    .fail(() => {
      this.onChange(true)
    });
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {

  }
}

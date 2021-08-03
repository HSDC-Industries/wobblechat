import Cookies from "js-cookie";
class Auth {
  constructor() {
    this.authenticated = true;
  }

  //   login(cb) {
  //     // Get username and password, make fetch request.
  //     // If w
  //     this.authenticated = true;
  //     cb();
  //   }

  //   logout(cb) {
  //     this.authenticated = false;
  //     cb();
  //   }

  isAuthenticated() {
    const loggedIn = Cookies.get("loggedIn");
    return !!loggedIn;
  }
}

export default new Auth();

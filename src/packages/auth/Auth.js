export default function (Vue) {
  Vue.auth = {
    getToken() {
      return localStorage.getItem('token');
    },
    isAuthenticated() {
      let token = this.getToken();

      if (!token) {
        return false;
      }
      return true;
    }
  }
}
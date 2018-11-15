export default {
  authenticateUser(state, payload) {
    state.auth.apiToken = payload.token
    state.auth.user = payload.user
    state.auth.signedIn = true
  },
  signInError(state){
    state.auth.signInError = true;
  },
  signedUp(state){
    state.auth.signedUp = true;
  },
  signUpError(state){
    state.auth.signUpError = true;
  },
  clearAuthData(state){
    state.auth.apiToken = null,
    state.auth.user = null
  },
  clearUserData(state){
    state.data.rides = []
  },
  fetchUserRides(state, payload){
    state.data.rides = payload.data
  },
  addRide(state, ride){
    state.data.rides.push(ride)
  },
  deleteRide(state, index){
    state.data.rides.splice(index, 1)
  },
  showErrorAlert(state){
    state.alerts.showErrorAlert = true
    setTimeout(() => {
      state.alerts.showErrorAlert = false
    }, 3000);
  },
  showSuccessAlert(state){
    state.alerts.showSuccessAlert = true
    setTimeout(() => {
      state.alerts.showSuccessAlert = false
    }, 3000);
  },
  serverResponsError(state){
    state.serverData.serverResponsError = true
  }
}
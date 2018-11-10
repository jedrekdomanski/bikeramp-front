import { map, sum, sumBy, orderBy } from 'lodash'

export default {
  signedUp: state => {
    return state.auth.signedUp;
  },
  signUpError: state => {
    return state.auth.signUpError;
  },
  signedIn: state => {
    return state.auth.apiToken !== null;
  },
  current_user: state => {
    let user = state.auth.user
    return !state.auth.user ? false : user.email
  },
  userRides: state => {
    let rides = state.data.rides
    let ridesSortedByDate = orderBy(rides, ['date'], ['asc'])
    return ridesSortedByDate
  },
  token: state => {
    return state.auth.apiToken;
  },
  showErrorAlert: state => {
    return state.alerts.showErrorAlert;
  },
  weeklyTotals: state => {
    let rides = state.data.rides
    let total_distance = sumBy(rides, 'distance')
    let total_price = sumBy(rides, 'price')
    
    return { 
      total_distance: total_distance,
      total_price: total_price
    }
  }
};
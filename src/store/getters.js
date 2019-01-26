import { sum, sumBy, orderBy } from 'lodash'

export default {
  signedIn: state => {
    return state.auth.apiToken !== null;
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
  showSuccessAlert: state => {
    return state.alerts.showSuccessAlert;
  },
  weeklyTotals: state => {
    let rides = state.data.rides
    let total_distance = sumBy(rides, 'distance')
    let total_price = sumBy(rides, 'price')
    
    return { 
      total_distance: total_distance,
      total_price: total_price
    }
  },
  loading: state => {
    return state.loading
  }
};
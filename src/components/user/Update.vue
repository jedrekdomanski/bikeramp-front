<template src='./Update.html'></template>
<script>
  import UserService from '../../services/user.service'

  let userService;

  export default {
    data() {
      return {
        accountInfo: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          facebookUrl: '',
          twitterUrl: '',
          linkedInUrl: '',
          hourlyRate: '',
          avatar: {},
          id: null
        }
      };
    },
    created(){      
      userService = new UserService();
      userService.fetchCurrentUser()
        .then(response => {
          this.accountInfo.firstName = response.data.first_name
          this.accountInfo.lastName = response.data.last_name
          this.accountInfo.phoneNumber = response.data.phone_number
          this.accountInfo.facebookUrl = response.data.facebook_url
          this.accountInfo.twitterUrl = response.data.twitter_url
          this.accountInfo.linkedInUrl = response.data.linked_in_url
          this.accountInfo.hourlyRate = response.data.hourly_rate
          this.accountInfo.id = response.data.id
        })
    },
    methods: {
      onSubmit(){
        userService = new UserService()
        const form = new FormData()
        form.append('first_name', this.accountInfo.firstName)
        form.append('last_name', this.accountInfo.lastName)
        form.append('phone_number', this.accountInfo.phoneNumber)
        form.append('facebook_url', this.accountInfo.facebookUrl)
        form.append('twitter_url', this.accountInfo.twitterUrl)
        form.append('linked_in_url', this.accountInfo.linkedInUrl)
        form.append('hourly_rate', this.accountInfo.hourlyRate)
        form.append('avatar', this.accountInfo.avatar, this.accountInfo.avatar.name)
        userService.update(this.accountInfo.id, form)
          .then(response => {
            if (response.status === 200) {
              this.$router.push({ name: 'userProfile' })
            } else {
              console.log(response)
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      onFileSelected(event){
        this.accountInfo.avatar = event.target.files[0]
      }
    }
  }
</script>
<style scoped>
  .account-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>
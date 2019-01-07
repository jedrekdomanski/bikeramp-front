<template>
  <div id="signup">
    <p v-if="accountUpdated" class="alert alert-success">Your account has been updated</p>
    <p v-if="accountUpdateError" class="alert alert-danger">Ooops, something went wrong. Make sure to submit the form correctly.</p>
    
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="first_name">First name</label>
          <input
                  type="text"
                  id="first_name"
                  v-model="accountInfo.firstName">
        </div>
        <div class="input">
          <label for="last_name">Last name</label>
          <input
                  type="text"
                  id="last_name"
                  v-model="accountInfo.lastName">
        </div>
        <div class="input">
          <label for="phone_number">Phone Number</label>
          <input
                  type="text"
                  id="phone_number"
                  v-model="accountInfo.phoneNumber">
        </div>
        <div class="input">
          <label for="facebook_url">Facebook URL</label>
          <input
                  type="text"
                  id="facebook_url"
                  v-model="accountInfo.facebookUrl">
        </div>
        <div class="input">
          <label for="twitter_url">Twitter URL</label>
          <input
                  type="text"
                  id="twitter_url"
                  v-model="accountInfo.twitterUrl">
        </div>
        <div class="input">
          <label for="linked_in_url">LinkedIn URL</label>
          <input
                  type="text"
                  id="linked_in_url"
                  v-model="accountInfo.linkedInUrl">
        </div>
        <div class="input">
          <label for="hourly_rate">Hourly Rate</label>
          <input
                  type="text"
                  id="hourly_rate"
                  value="current_user.hourly_rate"
                  v-model="accountInfo.hourlyRate">
        </div>
        <div class="input">
          <label for="avatar">Avatar</label>
          <input
                  type="file"
                  id="avatar"
                  v-on:change="accountInfo.avatar">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    props: {
      profile: {
        type: Object,
      },
    },
    data() {
      return {
        accountInfo: {
          firstName: this.profile.first_name,
          lastName: this.profile.last_name,
          phoneNumber: this.profile.phone_number,
          facebookUrl: this.profile.facebook_url,
          twitterUrl: this.profile.twitter_url,
          linkedInUrl: this.profile.linked_in_url,
          hourlyRate: this.profile.hourly_rate,
          avatar: ''
        }
      };
    },
    methods: {
      onSubmit(){
        const formData = {
          first_name: this.profile.first_name,
          last_name: this.profile.last_name,
          phone_number: this.profile.phone_number,
          facebook_url: this.profile.facebook_url,
          twitter_url: this.profile.twitter_url,
          linked_in_url: this.profile.linked_in_url,
          hourly_rate: this.profile.hourly_rate,
          avatar: ''
        }
        this.loading = true
        this.$store.dispatch('saveUserProfile', formData).then(() => {
          this.loading = false
        })
      },
      accountUpdated(){
      },
      accountUpdateError(){
      }
    }
  }
</script>
<style scoped>
  .signup-form {
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
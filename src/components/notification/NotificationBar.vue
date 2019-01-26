<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    props: {
      notification: {
        type: Object,
        requried: true
      }
    },
    data() {
      return {
        timeout: null
      }
    },
    mounted() {
      this.timeout = setTimeout(() => this.remove(this.notification), 5000)
    },
    beforeDestroy() {
      clearTimeout(this.timeout)
    },
    computed: {
      notificationTypeClass() {
        return `notice notice-${this.notification.type}`
      }
    },
    methods: mapActions('notification', ['remove'])
  }
</script>
<style scoped>
  .notification-bar {
    margin: 1em 0 1em;
  }
  .notice {
    padding: 15px;
    background-color: #fafafa;
    border-left: 6px solid #7f7f84;
    margin-bottom: 10px;
    -webkit-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
       -moz-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
            box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
  }
  .notice-sm {
      padding: 10px;
      font-size: 80%;
  }
  .notice-lg {
      padding: 35px;
      font-size: large;
  }
  .notice-success {
      border-color: #80D651;
  }
  .notice-success>strong {
      color: #80D651;
  }
  .notice-info {
      border-color: #45ABCD;
  }
  .notice-info>strong {
      color: #45ABCD;
  }
  .notice-warning {
      border-color: #FEAF20;
  }
  .notice-warning>strong {
      color: #FEAF20;
  }
  .notice-danger {
      border-color: #d73814;
  }
  .notice-danger>strong {
      color: #d73814;
  }
</style>
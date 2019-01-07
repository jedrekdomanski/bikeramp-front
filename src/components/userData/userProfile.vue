<template>
  <div class="container emp-profile">
    <form method="post">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-head">
            <h5>{{current_user.first_name + ' ' + current_user.last_name}}</h5>
            <p class="proile-rating">RANKINGS : <span>8/10</span></p>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary"><router-link to="/profile/edit">Edit Profile</router-link></button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="profile-work">
            <p>SOCIAL LINKS</p>
            <a :href="current_user.facebook_url"><i class="fab fa-facebook fa-2x"></i></a><br/>
            <a :href="current_user.twitter_url"><i class="fab fa-twitter fa-2x"></i></a><br/>
            <a :href="current_user.linked_in_url"><i class="fab fa-linkedin-in fa-2x"></i></a>
          </div>
        </div>
        <div class="col-md-8">
          <div class="tab-content profile-tab" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row">
                <div class="col-md-6">
                    <label>User Id</label>
                </div>
                <div class="col-md-6">
                    <p>{{current_user.username}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                    <label>Name</label>
                </div>
                <div class="col-md-6">
                    <p>{{current_user.first_name + ' ' + current_user.last_name}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                    <label>Email</label>
                </div>
                <div class="col-md-6">
                    <p>{{current_user.email}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                    <label>Phone</label>
                </div>
                <div class="col-md-6">
                    <p>{{current_user.phone_number}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>English Level</label>
                </div>
                <div class="col-md-6">
                    <p>Expert</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                    <label>Hourly Rate</label>
                </div>
                <div class="col-md-6">
                    <p>{{current_user.hourly_rate}}</p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row">
                <div class="col-md-6">
                  <label>Joined</label>
                </div>
                <div class="col-md-6">
                    <p>{{current_user.created_at}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Total Rides</label>
                </div>
                <div class="col-md-6">
                    <p>{{current_user.rides_count}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                    <label>Availability</label>
                </div>
                <div class="col-md-6">
                  <p>6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>           
  </div>
</template>
<script>
  export default {
    computed: {
      current_user(){
        return this.$store.state.auth.user;
      }
    }
  }
</script>
<style scoped>
  .emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5 {
    color: #333;
  }
  .profile-head h6 {
    color: #0062cc;
  }
  .profile-edit-btn {
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
  }
  .proile-rating {
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
  }
  .proile-rating span {
    color: #495057;
    font-size: 15px;
    font-weight: 600;
  }
  .profile-head .nav-tabs {
    margin-bottom:5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight:600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom:2px solid #0062cc;
  }
  .profile-work {
    padding: 14%;
    margin-top: -15%;
  }
  .profile-work p {
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
  }
  .profile-work ul {
    list-style: none;
  }
  .profile-tab label {
    font-weight: 600;
  }
  .profile-tab p {
    font-weight: 600;
    color: #0062cc;
  }
  .btn-primary a {
    color: #fff;
  }
</style>
<template lang="html">
  <div class="d-flex">
      <div class="container w-100 vertical-container 100%">
          <div class="title">
              <p class="heading">Account Settings</p>
              <p class="subheading">Sed viverra elementum lacus, a interdum ligula tristique pharetra.
                   Fusce vitae ultrices libero. In lacinia ornare pellentesque. Fusce scelerisque velit eu nunc dictum, quis cursus orci bibendum.
               </p>

              <button type="button" name="button">Save</button>
          </div>

          <hr>

          <div class="avatarSection">
              <div class="form">
                    <div class="text">
                      <p class="heading">Change Avatar</p>
                      <p class="subheading">Integer suscipit malesuada tristique. Nulla fringilla in elit in facilisis.
                          Cras tincidunt ac massa ut tempor. Praesent vel condimentum tellus.</p>
                    </div>

                    <div class="icon">
                      <i class="fas fa-user-circle" style="font-size: 90px"></i>
                  </div>
              </div>

              <button type="button" name="upload" class="upload">Upload</button>
          </div>

          <hr>

          <div class="">
              <p class="heading">Personal Details</p>

              <div class="form">

                  <form>

                      <div class="userDetails">
                          <label for="firstName">First Name</label>
                          <input type="text" name="name" id="firstName" placeholder="Edward">
                      </div>

                      <div class="userDetails">
                          <label for="lastName">Last Name</label>
                          <input type="text" name="name" id="lastName" placeholder="Rajah">
                      </div>

                      <div class="userDetails">
                          <label for="phoneNumber">Phone Number</label>
                          <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="123451234512">
                      </div>

                      <div class="userDetails">
                          <label for="country">Country</label>
                          <input list="countries" id="country" placeholder="Nigeria">
                          <datalist class="" id="countries">
                              <option value="Algeria"></option>
                              <option value="China"></option>
                              <option value="India"></option>
                              <option value="Japan"></option>
                              <option value="Niger"></option>
                              <option value="Nigeria"></option>
                              <option value="USA"></option>
                              <option value="UK"></option>
                              <option value="South Africa"></option>
                          </datalist>
                      </div>

                      <div class="userDetails">
                          <label for="language">Language</label>
                          <input list="languages" name="language" id="language" placeholder="English">
                          <datalist class="" id="languages">
                              <option value="English"></option>
                              <option value="French"></option>
                              <option value="German"></option>
                              <option value="Italian"></option>
                              <option value="Japanese"></option>
                              <option value="Mandarin"></option>
                              <option value="Sanskrit"></option>
                          </datalist>
                      </div>


                </form>
              </div>

              <hr>

              <div class="">
                  <p class="heading">Change Password</p>
                  <div class="form">
                      <form>
                          <div class="userDetails">
                              <label for="oldPassword">Old Password</label>
                              <input type="password" name="Old Password" id="oldPassword">
                          </div>

                          <div class="userDetails">
                              <label for="newPassword">New Password</label>
                              <input type="password" name="New Password" id="newPassword">
                          </div>

                          <div class="userDetails">
                              <label for="confirmPassword">Confirm New Password</label>
                              <input type="password" name="Confirm Password" id="newPassword">
                          </div>

                          <button type="button" name="confirm">Confirm</button>
                      </form>
                  </div>
              </div>

              <hr>

              <div class="footer">
                  <p class="heading">Deactivate Your Account</p>
                  <p class="subheading">Sed in lacus augue. Nulla egestas eu nunc non consequat. Integer vehicula interdum ipsum,
                       vitae placerat ante ultrices eu. Vestibulum neque nisl, mollis in condimentum eget, cursus et erat.
                        Phasellus convallis turpis ac nisi elementum, eu convallis elit maximus.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer vestibulum dui sodales augue consectetur condimentum.
                        <a href="#" style="color: red;">Deactivate your account.</a>
                    </p>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userSettings"
}
</script>

<style lang="css" scoped="css">
.title {
    position: relative;
    top: 16px;
    margin-top: -15px;
}

.title button {
    position: relative;
    padding: 12px 24px;
    border: none;
    background-color: #FEBA2A;
    left: 1000px;
    bottom: 110px;
    margin-bottom: -40px;
    margin-top: -30px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
}

.title button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.form {
    padding-left: 1%;
}

.icon {
    padding-left: 2%;
}

.avatarSection {
    padding: 0px;
    margin-bottom: -90px;
    margin-top: -35px;
}

.avatarSection .fas {
    position: relative;
    bottom: 70px;
}

.avatarSection .text {
    width: 400px;
    position: relative;
    left: 110px;
    top: 40px;
}

.avatarSection .upload {
    position: relative;
    left: 550px;
    bottom: 150px;
    border: none;
    background-color: #FEBA2A;
    cursor: pointer;
    outline: none;
    padding: 12px 24px;
    border-radius: 3px;
}

.avatarSection button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.heading {
    font-size: 24px;
    padding-left: 3%;
}

.subheading {
    padding-left: 3%;
    font-size: 18px;
    padding-bottom: 0px;
}

.userDetails {
    display: inline-flex;
    flex-direction: column;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
    outline: none;
}

.userDetails input {
    width: 105%;
    padding: 6%;
    border-radius: 3px;
    outline: none;
    font-size: 18px;
}

.userDetails label {
    font-weight: bold;
    font-size: 14pt;
    padding-bottom: 2%;
}

.userDetails input {
    font-family: AgencyFB;
}

.userDetails input::placeholder {
    padding: 2%;
    outline: none;
}

.form button {
    position: relative;
    top: 28px;
    left: 50px;
    padding: 12px 24px;
    border: none;
    box-shadow: 20px;
    background-color: #FEBA2A;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
}
.form button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

hr {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2)
}
</style>

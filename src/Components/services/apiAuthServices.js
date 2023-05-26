class apiAuthServices {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  Web_Api_Key = "AIzaSyDc3tQlGoh7_z96pzyMUA9NjFU89iUCQws";
  static getInstance() {
    return new apiAuthServices();
  }
  signUp = async (credential) => {
    console.log(3, credential);
    const response = await fetch(
      this.BASE_URL + "signUp?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      // console.log(data, 4);
      return data;
    } else {
      const data = await response.json();
      let error = "Authentication-Failed";
      // console.log(data);
      if (data && data.error && data.error.message) {
        error = data.error.message;
        alert(error);
      }
    }
  };
  signIn = async (credential) => {
    // console.log(3, credential);
    const response = await fetch(
      this.BASE_URL + "signInWithPassword?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data, 4);
      return data;
    } else {
      const data = await response.json();
      let error = "Log In failed";
      console.log(data);
      if (data && data.error && data.error.message) {
        error = data.error.message;
        alert(error);
      }
    }
  };
  forgotPassword = async (credential) => {
    // console.log(3, credential);
    const response = await fetch(
      this.BASE_URL + "sendOobCode?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          email: credential.email,
          requestType: "PASSWORD_RESET",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data, 4);
      return data;
    }
  };
  getUserData = async () => {
    console.log(3);
    const idToken = localStorage.getItem("idToken");
    // console.log(idToken);
    const response = await fetch(
      this.BASE_URL + "lookup?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data, 4);
      return data.users[0];
    }
  };
  updateUserData = async (credential) => {
    console.log(3, credential);
    const idToken = localStorage.getItem("idToken");
    // console.log(idToken);
    const response = await fetch(
      this.BASE_URL + "update?key=" + this.Web_Api_Key,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: credential.name,
          photoUrl: credential.url,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data, 4);
      return data;
    }
  };
}
export const apiAuthService = apiAuthServices.getInstance();

const modes = {
  login: "login",
  signup: "signup",
};

// Lookup api key at firebase
const API_KEY = "[API-KEY]";

// auto logout timer
let timer = null;

export default {
  async login(context, payload) {
    await context.dispatch("auth", {
      ...payload,
      mode: modes.login,
    });
  },

  async auth(context, payload) {
    let url = "";
    if (payload.mode === modes.login) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
    } else if (payload.mode === modes.signup) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    } else {
      throw Error("mode " + payload.mode + " is not supported!");
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.error.message || "Failed to authenticate");
      throw error;
    }

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });

    const expiresIn = responseData.expiresIn * 1000;
    // const expiresIn = 5000;

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    const expirationDate = expiresIn + new Date().getTime();

    localStorage.setItem("token", context.getters.token);
    localStorage.setItem("tokenExpiration", expirationDate);
    localStorage.setItem("userId", context.getters.userId);
  },

  async signup(context, payload) {
    context.dispatch("auth", {
      ...payload,
      mode: modes.signup,
    });
  },

  logout(context) {
    clearTimeout(timer);
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");
  },

  autologin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expirationTime = +localStorage.getItem("tokenExpiration") - new Date().getTime();

    if (expirationTime <= 0) {
      return;
    }

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};

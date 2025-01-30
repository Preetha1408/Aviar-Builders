import httpClient from "../config/Constant";

function Login(payload) {
  return httpClient({
    url: "user/login",
    method: "POST",
    data: {
      ...payload,
    },
  });
}

const Services = { Login };

export default Services;

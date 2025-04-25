import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = async (e, email, password, role, navigate) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide All Fields");
    }

    const resultAction = await store.dispatch(
      userLogin({ email, password, role })
    );

    if (userLogin.fulfilled.match(resultAction)) {
      // Navigate only on successful login
      navigate("/");
    } else {
      alert(resultAction.payload || "Login failed");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong during login.");
  }
};

export const handleRegister = async (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website,
  navigate
) => {
  e.preventDefault();
  try {
    const resultAction = await store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      })
    );

    if (userRegister.fulfilled.match(resultAction)) {
      alert("Registration successful!");
      navigate("/login");
    } else {
      alert(resultAction.payload || "Registration failed");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong during registration.");
  }
};

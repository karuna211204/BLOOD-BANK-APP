import axios from "axios";

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
  navigate // 👈 add this
) => {
  e.preventDefault();
  try {
    const { data } = await axios.post("/api/v1/auth/register", {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    });

    if (data?.success) {
      alert("Registration successful!"); // Use alert for success
      navigate("/login"); // ✅ Navigate to login page after success
    } else {
      alert(data.message || "Registration failed"); // Use alert for failure
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong!"); // Use alert for errors
  }
};

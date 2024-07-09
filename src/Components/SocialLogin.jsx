import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import axios from "axios";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google Sign-In Result:", result);

        // Making user info to post in DB
        const { email, displayName, photoURL } = result.user;
        const user = {
          email: email,
          name: displayName,
          photoURL: photoURL,
          role: "user",
        };

        // Post user to backend
        axios.post("http://localhost:5000/users", user)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Signed In successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          // Handle error if post request fails
          .catch((error) => {
            console.error("Error posting user data:", error);
          });
      })
      // Handle sign-in error
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider font-bold">Or sign in with</div>
      <div className="flex justify-around items-center w-3/4 mx-auto">
        <button className="btn">
          <FaFacebook className="w-8 h-8" />
        </button>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="w-8 h-8" />
        </button>
        <button className="btn">
          <IoLogoGithub className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google Sign-In Result:", result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signed Up successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/"); // Navigate to home or another route upon successful sign-in
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        // Handle sign-in error (e.g., display an error message)
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

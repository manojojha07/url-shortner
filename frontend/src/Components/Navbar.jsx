import React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/authSlice";
import { logoutUser } from "../api/User.api";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const onLogout = async () => {
    try {
      await logoutUser();   // backend cookie clear
      dispatch(logout());   // redux update → Navbar re-render
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white border-b border-black">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold">
            URL Shortener
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              {/* <span className="text-gray-700">Welcome, {user?.name || "User"}</span> */}
           <Link to='/'>   <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button></Link>
            </div>
          ) : (
            <Link
              to="/auth"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

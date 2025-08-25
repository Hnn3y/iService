// src/pages/Login.jsx
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 px-6">
       {/* Illustration */}
            <img
              src="src\assets\create-account.png"
              alt="Create Account"
              className="w-64 mb-12"
            />

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>

      {/* Form */}
      <form className="w-full max-w-sm bg-white shadow-md rounded-xl p-6 space-y-4">
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#1976d2",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "600",
            py: 1.2,
            "&:hover": { bgcolor: "#1565c0" },
          }}
        >
          Log in
        </Button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

import React from "react";
import Onboarding from "../components/Onboarding";

// Import assets
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const slides = [
    {
      title: "Welcome to iService!",
      description: "Your one-stop platform to find trusted professionals for any job — big or small.",
    },
    {
      title: "Book at your convenience",
      description: "Let’s make your life easier — one service at a time.",
    },
    {
      title: "Work done hassle-free!",
      description: "Get instant access to skilled experts, book effortlessly, and track your tasks.",
    },
  ];

  return (
    <Onboarding slides={slides} onFinish={() => navigate("/login")} />
  );
};

export default Landing;

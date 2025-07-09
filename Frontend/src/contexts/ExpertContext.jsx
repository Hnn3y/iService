import { createContext, useContext, useState } from "react";

const ExpertContext = createContext();

const initialData = {
  electrical: [
    {
      name: "Seun Adekunle",
      subrole: "Expert Electrician",
      rating: 4.3,
      jobs: 107,
      rate: "5k+",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ],
  plumbing: [],
  carpenter: [],
};

export const ExpertProvider = ({ children }) => {
  const [expertsByCategory, setExpertsByCategory] = useState(initialData);

  const addExpert = (category, expert) => {
    setExpertsByCategory((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), expert],
    }));
  };

  return (
    <ExpertContext.Provider value={{ expertsByCategory, addExpert }}>
      {children}
    </ExpertContext.Provider>
  );
};

export const useExpert = () => useContext(ExpertContext);

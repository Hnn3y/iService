const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export async function fetchGreeting() {
  const res = await fetch(`${BASE_URL}/api/greet`);
  const data = await res.json();
  return data;
}

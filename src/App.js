import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;

import { Suspense, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetailContext from "./context/UserDetailContext";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    token: null,
  });

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <FloatingWhatsApp
              onClick={() => (window.location.href = "https://wa.link/xvrwoq")}
            ></FloatingWhatsApp>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;

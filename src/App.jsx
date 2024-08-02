import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
const RootLayout = lazy(() => import("./pages/RootLayout"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Rocket = lazy(() => import("./components/Rockets/Rocket"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="fallback-container">
            <img
              className="fallback-image"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2Z5OGdncnVmdHk2Ymp5YzNidzl3dG9kd2MxdGQ3MGY0aGh6d2E0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.webp"
              alt="Loading"
            />
          </div>
        }
      >
        <RootLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className="fallback-container">
                <img
                  className="fallback-image"
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm8za2twOTJlOHVuYWN6Y2VvcjdmbjBzZXBiNzdmYnY5aDM4a2xpbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MEiZ5h8lOkM7rwideE/giphy.webp"
                  alt="Loading"
                />
              </div>
            }
          >
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/rocket",
        element: (
          <Suspense
            fallback={
              <div className="fallback-container">
                <img
                  className="fallback-image"
                  src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXp1cmRzYnVnajB1Z2k1ZDJrd2VjdzNjeXIwbnRzaXMxYXh3YWQxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N256GFy1u6M6Y/giphy.webp"
                  alt="Loading"
                />
              </div>
            }
          >
            <Rocket />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

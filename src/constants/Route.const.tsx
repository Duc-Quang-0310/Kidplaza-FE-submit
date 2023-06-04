import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import AuthLayout from "../components/Layout/AuthLayout";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Terms = lazy(() => import("../pages/Terms"));
const TwoFactor = lazy(() => import("../pages/TwoFactor"));

export const ROUTE_PATH = {
  signIn: "/sign-in",
  signUp: "/sign-up",
  termCondition: "/terms",
  home: "/",
  twoFactor: "/two-factor",
};

export const ROUTES: RouteObject[] = [
  {
    path: ROUTE_PATH.signIn,
    element: (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    ),
  },
  {
    path: ROUTE_PATH.signUp,
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
  {
    path: ROUTE_PATH.twoFactor,
    element: (
      <AuthLayout>
        <TwoFactor />
      </AuthLayout>
    ),
  },
  {
    path: ROUTE_PATH.termCondition,
    element: <Terms />,
  },
];

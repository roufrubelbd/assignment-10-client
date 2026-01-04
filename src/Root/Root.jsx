import React, { use } from "react";
// import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../main";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";
import NavbarContainer from "../components/Navbar/NavbarContainer";

const Root = () => {
  const navigation = useNavigation();
  const { loading } = use(AuthContext);

  const isLoading = loading || navigation?.state === "loading";
  return (
    <>
      <DynamicTitle />
      <NavbarContainer />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-h-[calc(100vh-285px)] bg-base-200">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Root;

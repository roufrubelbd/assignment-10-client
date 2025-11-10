import React, { use } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../main';

const Root = () => {
      const navigation = useNavigation();
  const { loading } = use(AuthContext);

  const isLoading = loading || navigation?.state === "loading";
    return (
         <>
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-h-[calc(100vh-285px)]">
          <Outlet />
        </div>
      )}
      <Footer />
    </>
    );
};

export default Root;
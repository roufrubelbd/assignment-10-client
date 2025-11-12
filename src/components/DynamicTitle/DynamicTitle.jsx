import { useEffect } from "react";
import { useLocation } from "react-router";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "Techbridge Asia";

    switch (location.pathname) {
      case "/":
        pageTitle = "Home | Techbridge Asia";
        break;
      case "/products":
        pageTitle = "Products | Techbridge Asia";
        break;
      case "/exports":
        pageTitle = "Exports | Techbridge Asia";
        break;
      case "/imports":
        pageTitle = "Imports | Techbridge Asia";
        break;
      case "/add":
        pageTitle = "Add Export | Techbridge Asia";
        break;
      default:
        pageTitle = "Techbridge Asia";
    }

    document.title = pageTitle;
  }, [location]);

  return null; 
};

export default DynamicTitle;

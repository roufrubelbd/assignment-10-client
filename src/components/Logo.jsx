import { Link } from "react-router";

const Logo = () => {
  // const {theme } = use(AuthContext);
  return (
    <Link to="/">
      <h2 className="text-lg md:text-2xl text-info">
        <span className="font-bold text-info">TechBridge</span>
        <span className="font-light">Asia</span>
      </h2>
    </Link>
  );
};

export default Logo;

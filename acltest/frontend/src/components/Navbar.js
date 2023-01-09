import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = async() => {
    logout()
    window.location.reload();
    navigate("/login")
    window.location.reload();

  }
  const handleViewCourses = async()=>{

    navigate("/viewallcourses");
  }
  const handleLogin = async()=>{

    navigate("/login");
  }
  const handleSign = async()=>{

    navigate("/signup");
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ACL</h1>
        </Link>
        <nav>
          {user &&(<div>
           <span>{user.email}</span>{" "}
            <Button variant="outlined" onClick={handleClick}>Log out </Button>{"      "}
            <Button variant="outlined" onClick={handleViewCourses}>View All Courses </Button>
          </div>
          )}
          {!user && (
          <div>
            <Button variant="outlined" onClick={handleLogin}>LogIn </Button>{"      "}
            <Button variant="outlined" onClick={handleSign}>Sign Up </Button>{"      "}
            <Button variant="outlined" onClick={handleViewCourses}>View All Courses </Button>
          </div>
          )}
          
        </nav>
      </div>
    </header>
  );
}
export default Navbar;

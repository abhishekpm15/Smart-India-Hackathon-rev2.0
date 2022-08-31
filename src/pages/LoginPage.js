import React, { useState } from "react";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import sky2 from "../images/sky2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const LoginPage = () => {
  let navigate = useNavigate();

  const [logged, setLogged] = useState(false);
  const [mentor,setMentor] = useState(false);
  const [innovator,setInnovator] = useState(false);

  const { loginWithPopup, isLoading, user, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    setMentor(true)
    loginWithPopup();
  };
  if (isAuthenticated) {
    setLogged(true);
  }

  if (logged && innovator) {
    navigate("/DashBoard");
  }

  const handleLogin2 = ()=>{
    setInnovator(true);
    loginWithPopup();
  };

  if (logged && mentor) {
    navigate("/DashBoard2");
  }

  return (
    <div
      style={{ backgroundImage: `url(${sky2})` }}
      className="bg-cover overflow-auto object-cover"
    >
      <div className="float-right mx-3 my-2">
        <Button
          color="red"
          onClick={() => {
            navigate("/Home");
          }}
        >
          Go back
        </Button>
      </div>

      <div
        className="mx-[35%] my-[5%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
       
          <div className="my-20">
            <Card className="w-96">
              <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h4" color="white">
                  Log In as Mentor
                </Typography>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button variant="gradient" color="red"  onClick={handleLogin}>
                  Log In
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div>
          <Card className="w-96">
              <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h4" color="white">
                  Log In as Innovator
                </Typography>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button variant="gradient" color="red"  onClick={handleLogin2}>
                  Log In
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      <div className="h-20"></div>
    </div>
  );
};

export default LoginPage;

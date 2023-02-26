import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") || false);
  const toast = useToast();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogin = (e, user) => {
    e.preventDefault();

    let { email, password } = user;
    if (email && password) {
      fetch("https://grumpy-lingerie-foal.cyclic.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === "Logged In") {
            localStorage.setItem("token", data.token);
            toast({
              description: "Signed in successfully",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            navigate("/", { replace: true });
          } else if (data.msg === "Wrong Credentials") {
            alert(data.msg);
            console.log(data.msg);
            toast({
              description: "Failed",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Sign Up first");
    }
  };

  const handleSignup = (e, user) => {
    e.preventDefault();

    let { name, email, password } = user;
    if (name && email && password) {
      fetch("https://grumpy-lingerie-foal.cyclic.app/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.msg === "New User has been registered.") {
            toast({
              title: "Account created.",
              description: "Your account has been successfully created",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            navigate("/login", { replace: true });
            // window.location.href = "/login";
            //   } else if (data.msg === "Please login, user already exist") {
            //     alert(data.msg);
            //     navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast({
        description: "Please provide all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      // alert("Please provide all fields.");
    }
  };

  const data = {
    isAuth,
    handleLogin,
    handleSignup,
  };
  return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;
};

export default AppcontextProvider;

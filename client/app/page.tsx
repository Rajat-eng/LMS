"use client";
import React, { useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Hero";

interface Props {}
const Page: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Verification");
  return (
    <div className="h-screen">
      <Heading
        title="E-Learning"
        description="E Learning is a platform for students to learn from qulaified teachers"
        keywords="Programming,MERN"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        route={route}
        setRoute={setRoute}
      />
      <Hero />
    </div>
  );
};

export default Page;

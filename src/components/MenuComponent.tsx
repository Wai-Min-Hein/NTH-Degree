"use client";
import Image from "next/image";
import React from "react";
import { MenuPropsType } from "./type";

const MenuComponent = ({id, menuName, image}: MenuPropsType) => {
  return (
    <div className="flex justify-between items-center">
      <div className="" key={id}>
        <h1>{menuName}</h1>

        <div className="">
          <Image src={image} width={200} height={100} alt="Test" />
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;

"use client";
import Image from "next/image";
import React from "react";

const MenuComponent = ({ menus }) => {


  return (
    <div className="flex justify-between items-center">
      {
            menus?.map((menu) => (
                <div className="" key={menu.id}>
                    <h1>

                    {menu?.menuName}
                    </h1>

                    <div className="">
                        <Image src={menu.image} width={200} height={100} alt="Test"/>
                    </div>
                </div>
            ))
        }




       
    </div>
  );
};

export default MenuComponent;

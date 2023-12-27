import { GetMenu } from "@/DataFetching/data";
import MenuComponent from "@/components/MenuComponent";

const page = async () => {
  const menus = await GetMenu();
console.log(menus)

 

 

  

  return <div>
        {/* {
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
        } */}
        <MenuComponent menus={menus}/>
  </div>;
};

export default page;

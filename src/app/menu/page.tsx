import { GetMenu } from "@/DataFetching/data";
import MenuComponent from "@/components/MenuComponent";
import { MenuPropsType } from "@/components/type";

const page = async () => {
  const menus: MenuPropsType[] = await GetMenu();

 

 

  

  return <div>
        {
            menus?.map((menu:MenuPropsType) => (
                
               <MenuComponent key={menu.id} {...menu}/> 
            ))
        }
  </div>;
};

export default page;

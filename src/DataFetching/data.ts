export async function GetMenu() {
  const menus = await fetch("http://localhost:3002/api/menu");

  return menus.json();
}

import { NavLink } from "react-router-dom";
import { TSidebarItems, TUserPath } from "@/types";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sideberitems = items.reduce((acc: TSidebarItems[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sideberitems;
};

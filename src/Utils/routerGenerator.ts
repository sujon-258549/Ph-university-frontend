import { TRoute, TUserPath } from "@/types";

export const routeGenerator = (items: TUserPath[]) => {
  console.log(items);
  const router = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);
  return router;
};

// export const routerGenerator = (items: TUserPath[]): TRoute[] => {
//   const router: TRoute[] = [];

//   const generateRoutes = (paths: TUserPath[]) => {
//     paths.forEach((item) => {
//       if (item.path && item.element) {
//         router.push({
//           path: item.path,
//           element: item.element,
//         });
//       }
//       if (item.children) {
//         generateRoutes(item.children);
//       }
//     });
//   };

//   generateRoutes(items);
//   return router;
// };

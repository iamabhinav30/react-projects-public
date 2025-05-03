import { useMemo } from "react";
import ProblemLayout from "../components/ProblemLayout";
import menuItems from '../utilities/json/menuItems.json';

const Hard = () => {
  const hardMenu = useMemo(() => menuItems?.hardMenu, []);
  return (
    <ProblemLayout
    menuItems={hardMenu}
    basePath="/hard"
    title="hard"
  />
  );
};

export default Hard;

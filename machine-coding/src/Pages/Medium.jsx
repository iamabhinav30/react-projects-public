import { useMemo } from "react";
import ProblemLayout from "../components/ProblemLayout";
import menuItems from '../utilities/json/menuItems.json';

const Medium = () => {
  const mediumMenu = useMemo(() => menuItems?.mediumMenu, []);
  return (
    <ProblemLayout
    menuItems={mediumMenu}
    basePath="/medium"
    title="medium"
  />
  );
};

export default Medium;

import { useMemo } from "react";
import ProblemLayout from "../components/ProblemLayout";
import menuItems from '../utilities/json/menuItems.json';

const Easy = () => {
  const easyMenu = useMemo(() => menuItems?.easyMenu, []);
  return (
    <ProblemLayout
      menuItems={easyMenu}
      basePath="/easy"
      title="easy"
    />
  );
};

export default Easy;

// Medium.jsx
import ProblemLayout from "../../components/ProblemLayout";

const mediumMenu = [
  { name: "Todo List", path: "todo-list" },
];

const Medium = () => {
  return (
    <ProblemLayout
      menuItems={mediumMenu}
      basePath="/medium"
      title="medium"
    />
  );
};

export default Medium;

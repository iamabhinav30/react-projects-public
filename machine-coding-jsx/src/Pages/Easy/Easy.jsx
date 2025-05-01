import ProblemLayout from "../../components/ProblemLayout";

const easyMenu = [
  { name: "Contact Form", path: "contact-form" },
];

const Easy = () => {
  return (
    <ProblemLayout
      menuItems={easyMenu}
      basePath="/easy"
      title="easy"
    />
  );
};

export default Easy;

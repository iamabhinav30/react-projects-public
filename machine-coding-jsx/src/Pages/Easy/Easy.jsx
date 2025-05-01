import ProblemLayout from "../../components/ProblemLayout";

const easyMenu = [
  { name: "Contact Form", path: "contact-form" },
  { name: "Like Button", path: "like-button" },
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

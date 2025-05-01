import { useParams, useOutletContext } from "react-router-dom";
import { problems } from "../problems";

const ProblemRenderer = () => {
  const { problemId } = useParams(); // e.g. contact-form
  const section = useOutletContext(); // output, code, description, testcases
  const problem = problems[problemId];

  if (!problem) return <div className="text-danger">Problem not found.</div>;

  switch (section) {
    case "output":
      return <problem.Component />;

    case "code":
      return (
        <pre className="bg-white p-2 rounded small overflow-auto" style={{ maxHeight: "300px" }}>
          <code>{problem.code}</code>
        </pre>
      );

    case "description":
      return <p>{problem.description}</p>;

    case "testcases":
      return (
        <ul>
          {problem.testcases.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

export default ProblemRenderer;

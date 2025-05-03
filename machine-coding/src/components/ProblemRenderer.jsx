import { useParams, useOutletContext } from "react-router-dom";
import { problems } from "../assets/problems";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useMemo } from "react";

const ProblemRenderer = ({ isFullScreen = false }) => {
  const { problemId } = useParams(); // e.g. contact-form
  const section = useOutletContext(); // output, code, description, testcases
  const problem = useMemo(() => problems[problemId], [problemId]);

  if (!problem) return <div className="text-danger">Problem not found.</div>;

  switch (section) {
    case "output":
      return <problem.Component />;


    case "description":
      return (
        <pre className="bg-white p-2 rounded small overflow-auto" style={{ maxHeight: "300px", whiteSpace: "pre-wrap" }}>
          {problem.description}
        </pre>
      );


    case "code":
      return (
        <div style={{ maxHeight: "300px" }}>
          <SyntaxHighlighter language="jsx" style={codeTheme}
           customStyle={{ flex: 1, height: "100%", maxHeight: "none", overflow: "auto" }}
            showLineNumbers>
            {problem.code}
          </SyntaxHighlighter>
        </div>
      );

    case "testcases":
      return (
        <div style={{ maxHeight: "300px" }}>
          <SyntaxHighlighter language="jsx" style={codeTheme}
            customStyle={{ flex: 1, height: "100%", maxHeight: "none", overflow: "auto" }}
            showLineNumbers>
            {problem.testcases}
          </SyntaxHighlighter>
        </div>
      );

    default:
      return null;
  }
};

export default ProblemRenderer;

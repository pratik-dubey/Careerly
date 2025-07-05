import AiToolCard from "./aiToolCard";

const aitoolsList = [
  {
    name: "Career chat",
    desc: "Burst your doubt bubbles",
    path: "/ai-tools/ai-chat",
    button: "Ask now",
    icon: "/chat.png",
    color: "teal",
  },
  {
    name: "AI Resume Analyzer",
    desc: "Analyze ATS score",
    path: "/ai-resume-analyzer",
    button: "Analyze",
    icon: "/ats.png",
    color: "yellow",
  },
  {
    name: "Learning Roadmap",
    desc: "Get your desired career path",
    path: "/career-roadmap-generator",
    button: "Generate",
    icon: "/roadmap.png",
    color: "blue",
  },
  {
    name: "Cover Letter Generator",
    desc: "Create stand-out cover letters",
    path: "/cover-letter-generator",
    button: "Create",
    icon: "/cover-letter.png",
    color: "green",
  },
];

const AiTools = () => {
  return (
    <div className="mt-6 bg-white border rounded-xl p-2">
      <h2 className="font-bold text-lg">Cutting-edge AI-Tools</h2>
      <p>Start building and shape your career with exclusive AI tools</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {aitoolsList.map((tool, index) => (
          <AiToolCard tool={tool} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AiTools;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface TOOl {
  name: string;
  desc: string;
  path: string;
  button: string;
  icon: string;
  color: string;
}

type AiToolProps = {
  tool: TOOl;
};

const colorMap: Record<
  string,
  {
    bg: string;
    hoverBg: string;
    border: string;
    text: string;
    button: string;
  }
> = {
  teal: {
    bg: "bg-teal-500/5",
    hoverBg: "hover:bg-teal-500/10",
    border: "hover:border-teal-700",
    text: "text-teal-800",
    button: "bg-teal-600",
  },
  yellow: {
    bg: "bg-yellow-500/5",
    hoverBg: "hover:bg-yellow-500/10",
    border: "hover:border-yellow-700",
    text: "text-yellow-800",
    button: "bg-yellow-600",
  },
  blue: {
    bg: "bg-blue-500/5",
    hoverBg: "hover:bg-blue-500/10",
    border: "hover:border-blue-700",
    text: "text-blue-800",
    button: "bg-blue-600",
  },
  green: {
    bg: "bg-green-500/5",
    hoverBg: "hover:bg-green-500/10",
    border: "hover:border-green-700",
    text: "text-green-800",
    button: "bg-green-600",
  },
};

function AiToolCard({ tool }: AiToolProps) {
  const styles = colorMap[tool.color] || colorMap["teal"]; // fallback to teal

  return (
    <div
      className={`p-3 ${styles.bg} ${styles.hoverBg} border ${styles.border} 
      transition-all duration-300 rounded-xl m-2`}
    >
      <Image src={tool.icon} alt={tool.name} width={50} height={50} />
      <h2 className={`font-medium mt-2 ${styles.text}`}>{tool.name}</h2>
      <p className="text-gray-400">{tool.desc}</p>
      <Link href={tool.path}>
        <Button className={`w-full mt-3 ${styles.button}`}>
          {tool.button}
        </Button>
      </Link>
    </div>
  );
}

export default AiToolCard;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface TOOl {
  name: string;
  desc: string;
  path: string;
  button: string;
  icon: string;
}

type AiToolProps = {
  tool: TOOl;
};

function AiToolCard({ tool }: AiToolProps) {
  return (
    <div className="p-3 border rounded-xl m-2">
      <Image src={tool.icon} alt={tool.name} width={50} height={50} />
      <h2 className="font-medium mt-2">{tool.name}</h2>
      <p className="text-gray-400">{tool.desc}</p>
      <Link href={tool.path}>
        <Button className="w-full mt-3">{tool.button}</Button>
      </Link>
    </div>
  );
}

export default AiToolCard;

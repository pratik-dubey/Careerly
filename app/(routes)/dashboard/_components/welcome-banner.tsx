import { Button } from "@/components/ui/button";

const WelcomeBanner = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-[#BE575F] via-[#A338E3] to-[#ac76d6] rounded-xl">
      <h2 className="font-bold text-2xl text-white">
        Careerly - Your Career Buddy
      </h2>
      <h4 className="mt-3 text-white">
        Smarter career decisions start here - get tailored career advices and
        ATS score tracker and smart suggestions for the same , and a Roadmap
        built just for you .
      </h4>
      <Button variant={"outline"} className="mt-4 font-semibold">
        Start your journey
      </Button>
    </div>
  );
};

export default WelcomeBanner;

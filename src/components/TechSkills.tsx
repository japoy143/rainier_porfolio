import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// data for personal info
import { ProfileInfoData } from "./model/profile";

type TechSkillsProps = {
  isdark: boolean;
};

function TechSkills({ isdark }: TechSkillsProps) {
  const theme = isdark ? "#040303" : "#F9F9F9";
  const text = !isdark ? "#040303" : "#F9F9F9";

  return (
    <div className="grid grid-cols-2  gap-x-4 gap-y-4 grid-auto-rows-auto h-screen p-10 md:grid-cols-3 lg:grid-cols-4 ">
      {ProfileInfoData.map((data, i) => {
        return (
          <Card
            key={i}
            className="max-h-[400px]  flex flex-col  items-center  justify-center lg:flex-row"
            style={{ backgroundColor: theme }}
          >
            <CardHeader>
              <CardTitle
                className=" text-xl  md:text-2xl lg:text-4xl"
                style={{ color: text }}
              >
                {data.title}
              </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={data.img}
                className="w-[80px] h-[80px] object-contain md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]"
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default TechSkills;

import TechSkills from "./TechSkills";

type ContentProps = {
  isdark: boolean;
};

function Content({ isdark }: ContentProps) {
  const glass =
    "h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ";
  const glassLight =
    "h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ";
  const brackets = `{`;
  const closingBrakets = `}`;
  const TechStacks = ["TypeScript", "Javascript", "Dart"];
  const Tools = ["Figma", "Notion", "Postman"];
  return (
    <div>
      <main className=" grid  grid-rows-2-[auto,1fr] h-screen m-0 ">
        <article
          className={` h-screen  flex flex-row justify-center gap-[60px] items-center pb-40  g-y-0 `}
          style={{ background: isdark ? "#040303" : "#F9F9F9" }}
        >
          <h1
            className={`${
              !isdark ? " text-black" : " text-white"
            }  text-5xl font-semibold`}
          >
            Hello I'm Rainier
          </h1>
          <section className=" ">
            <div
              className={`h-[240px] w-[350px]  ${
                isdark ? glass : glassLight
              } p-4 flex flex-row justify-center items-center`}
            >
              <pre className=" text-base text-blue-500  space-y-1 transition-colors  duration-500 hover:text-red-500">
                <p>
                  data:
                  <span className=" text-orange-400 text-base">{brackets}</span>
                </p>
                <p className=" text-xs">
                  "TechStacks":
                  <span className=" text-xs">
                    {JSON.stringify(TechStacks)},
                  </span>
                </p>
                <p className=" text-xs">
                  "Tools":
                  <span className=" text-xs">{JSON.stringify(Tools)},</span>
                </p>

                <p className=" text-xs">
                  "Fullstack":
                  <span className=" text-xs">true</span>
                </p>
                <p className=" text-xs">
                  "Status":
                  <span className=" text-xs">"Graduating Student"</span>
                </p>
                <pre className=" text-xs">
                  "Specific knowledge":{" "}
                  <span className=" text-orange-400 text-xs">{brackets}</span>
                  <br />
                  "MongoDB":true
                  <br />
                  "Redux":true
                  <br />
                  "Firebase":true
                  <p>
                    <span className=" text-orange-400 text-xs">
                      {closingBrakets}
                    </span>
                    ,
                  </p>
                </pre>

                <p className=" text-orange-400 text-base">{closingBrakets}</p>
              </pre>
            </div>
          </section>
        </article>

        <section
          className={`h-screen `}
          style={{ backgroundColor: !isdark ? "#040303" : "#F9F9F9" }}
        >
          <TechSkills isdark={isdark} />
        </section>
      </main>
    </div>
  );
}

export default Content;

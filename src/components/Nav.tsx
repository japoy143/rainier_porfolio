import { MoonIcon } from "@heroicons/react/24/solid";
type NavProps = {
  isdark: boolean;
  setDark: (value: boolean) => void;
};

function Nav({ isdark, setDark }: NavProps) {
  return (
    <nav className=" flex flex-row justify-end p-4 ">
      <button onClick={() => setDark(!isdark)}>
        <MoonIcon
          className={`h-6 w-6 ${isdark ? "text-white" : "text-black"} mt-2`}
        />
      </button>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;

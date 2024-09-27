import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function ThemeLink({ title, href, className, icon: Icon }) {
  return (
    <Link
      className={`text-white   font-semibold rounded-lg text-normal px-8 py-3 text-center ${className} flex items-center`}
      href={href}
    >
      {title}{" "}
      {/* <span className="ml-2 text-xl">
        <Icon />
      </span> */}
    </Link>
  );
}

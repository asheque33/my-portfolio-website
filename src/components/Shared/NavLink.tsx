import Link from "next/link";
type TNavLinksProps = {
  href: string;
  title: string;
};
const NavLink = ({ href, title }: TNavLinksProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};
export default NavLink;

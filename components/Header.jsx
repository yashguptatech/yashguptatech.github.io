import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsMedium } from "react-icons/bs";

const SocialMedia = ({ socials }) => (
  <div className="flex justify-center items-center gap-4">
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href={socials.github}
      title="Visit my github profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href={socials.linkedin}
      title="Contact me on LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillLinkedin className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href={socials.twitter}
      title="Contact me on Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href={socials.medium}
      title="Read my blogs on Medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsMedium className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href={socials.mail}
      title="Send directly an email"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CgMail className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
  </div>
);

const Header = ({ header }) => {
  return (
    <header className="flex flex-row flex-auto justify-between py-8 px-4 sticky top-0 bg-bodyBgColor dark:bg-bodyBgColor-dark z-[21] ">
      <div className="flex flex-row content-center text-[1.5rem] md:text-[2.5rem] font-bold font-title">
        <Link href="/#main">
          <a className="flex items-center">{header.userTag}</a>
        </Link>
      </div>
      <ul className="hidden lg:flex justify-center items-center gap-[2rem] mx-2">
        <li>
          <Link href="/#about">
            <a className="text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a className="text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors">
              Projects
            </a>
          </Link>
        </li>
      </ul>
      <SocialMedia socials={header.socials} />
    </header>
  );
};

export default Header;

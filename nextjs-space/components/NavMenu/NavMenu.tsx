import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import Logo from "../../public/logo.png";
import { SignInButton } from "../Buttons";

const NavMenu = () => {

    return (
        <nav className={style.navContainer}>
            <Link href={"/"}>
                <Image 
                    src={Logo.src}
                    alt="NextSpace logo"
                    width={216}
                    height={30}
                    priority
                />
            </Link>
            <ul className={style.links}>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/users">
                        Users
                    </Link>
                </li>
                <li className={style.signBtnContainer}>
                    <SignInButton />
                </li>
            </ul>
        </nav>
    )
};

export default NavMenu;
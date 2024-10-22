import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
    return (
        <nav>
            <div className="h-12 px-4 md:px-8 lg:px-16 2xl:px-48 relative">
                {/* MOBILE */}
                <div className="flex items-center justify-between h-full md:hidden">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">SHOPER</div>
                    </Link>
                    <Menu />
                </div>
                {/* BIGGER SCREENS */}
                <div className="hidden md:flex items-center justify-between h-full">
                    {/* LEFT */}
                    <div className="xl:w-7/12 2xl:w1/2 flex items-center gap-12 ">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="/logo.png"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <div className="text-2xl tracking-wide">SHOPER</div>
                        </Link>
                        <div className="hidden xl:flex gap-3">
                            <Link href="#">Homepage</Link>
                            <Link href="#">Shop</Link>
                            <Link href="#">Deals</Link>
                            <Link href="#">About</Link>
                            <Link href="#">Contact</Link>
                            <Link href="#">Logout</Link>
                            <Link href="#">Cart</Link>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="xl:w-5/12 2xl:w-1/2 flex justify-between items-center gap-8">
                        <SearchBar />
                        <NavIcons />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

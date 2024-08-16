const Navbar = () => {
    return (
        <div className="h-20 w-full bg-foreground">
            <div className="h-full flex items-center justify-between px-2 md:px-10 py-10">
                <LogoGroup />
                <button
                    className="px-8 py-3 rounded-[31px] text-white bg-accent hidden md:block font-semibold text-lg whitespace-nowrap"
                    onClick={() => window.open("https://tally.so/r/wk5OXd")}
                >
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default Navbar;

const LogoGroup = () => {
    return (
        <div className="flex w-full items-center justify-between md:justify-normal md:gap-2">
            <img
                src="https://dot.gov.in/sites/all/modules/customs/cmf_content/assets/images/emblem-dark.png"
                className="h-16 pb-1 md:px-4"
            />
            <img
                src="https://www.indiamobilecongress.com/img/home24/logo.svg"
                className="h-16 pb-3 md:px-4"
            />
            <img
                src="https://pbs.twimg.com/profile_images/378800000513571480/2a7766e2dce013460b0cf27149e395ca_400x400.jpeg"
                className="h-16 py-2 md:px-4"
            />
        </div>
    );
};

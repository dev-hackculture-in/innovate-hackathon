const ContactCard = () => {
    return (
        <div className="py-10 container">
            <div className="rounded-md overflow-hidden max-w-xl mx-auto bg-[#eff5ff] py-4">
                <div className="flex flex-col justify-center w-full items-center gap-3">
                    <h1 className="font-semibold text-xl text-accent">
                        Contact Us:
                    </h1>

                    <h1 className="font-bold text-2xl">Srinath</h1>

                    <div className="flex flex-col items-center justify-center font-medium text-muted-foreground">
                        <p>+91 92468 18843</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

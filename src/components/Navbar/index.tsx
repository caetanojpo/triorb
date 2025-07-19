import Menu from "@/components/Navbar/Menu";
import Index from "../Icons/WhatsAppIcon";
import WhatsAppButton from "../Buttons/WhatsAppButton";

const Navbar = () => {
    return (
        <>
            <nav className={`flex w-full h-[4rem] text-black justify-around items-center z-[99] fixed`}>
                <section className={'w-[20%] flex items-center justify-center'}>LOGO</section>
                <section className={'w-[60%] flex items-center justify-center'}><Menu/></section>
                <section className={`w-[20%] flex items-center justify-center`}><WhatsAppButton size={"md"} phoneNumber={"5518997970919"} animation={"pulse"} variant={"full-contact"}/>
                </section>
            </nav>
        </>
    );
}

export default Navbar;
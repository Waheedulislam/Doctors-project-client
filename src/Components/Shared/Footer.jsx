import doctorateIcon from "../../assets/image/doctor.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img src={doctorateIcon} className="h-20 w-20" alt="" />
                    <p className="text-xl">
                        <p className="font-bold  text-2xl">Doctorate Industries Ltd.</p>

                        <p className="font-semibold">
                            Providing reliable tech since 2020
                        </p>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title  ">Services</h6>
                    <a className="link link-hover font-semibold">Branding</a>
                    <a className="link link-hover font-semibold">Design</a>
                    <a className="link link-hover font-semibold">Marketing</a>
                    <a className="link link-hover font-semibold">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title   ">Company</h6>
                    <a className="link link-hover font-semibold">About us</a>
                    <a className="link link-hover font-semibold">Contact</a>
                    <a className="link link-hover font-semibold">Jobs</a>
                    <a className="link link-hover font-semibold">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title   ">Legal</h6>
                    <a className="link link-hover font-semibold">Terms of use</a>
                    <a className="link link-hover font-semibold">Privacy policy</a>
                    <a className="link link-hover font-semibold">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;

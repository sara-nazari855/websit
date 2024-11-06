import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const data = [
	{ id: 1, icon: <HiOutlineMail />, link: "mailto:sara.nazari@iau.ac.ir" },
	{
		id: 2,
		icon: <RiMessengerLine />,
		link: "https://www.messenger.com/",
	},
	{
		id: 3,
		icon: <FaWhatsapp />,
		link: "https://api.whatsapp.com/send/?phone=%2b9809185285459",
	},
];

// alternative whatsapp link
// https://wa.me/yournumber

export default data;

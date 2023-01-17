import { BiUser } from "react-icons/bi";
import { FiSliders } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { TbAddressBook } from "react-icons/tb";


export const endPoint = 'https://backend-e-commerce-8wxo.onrender.com'
// export const endPoint = 'http://localhost:5000'


export const QuickView = [
    {
        title: "Heartiness",
        details: "Over 25000 Products",
        bg_img: "/images/01.svg",
        bg_color: "#63C8F2",
        border_right: true
    },
    {
        title: "Individual",
        details: "Book Tests & Checkups",
        bg_img: "/images/02.svg",
        bg_color: "#D88DBC",
        border_right: true
    },
    {
        title: "Medication",
        details: "Over 25000 Products",
        bg_img: "/images/03.svg",
        bg_color: "#F37336",
        border_right: true
    },
    {
        title: "Health Center",
        details: "Trending From Health Experts",
        bg_img: "/images/04.svg",
        bg_color: "#F7CC3B",
        border_right: true
    },
    {
        title: "Others",
        details: "More Information",
        bg_img: "/images/05.svg",
        bg_color: "#5ABA4A",
        border_right: false
    },

]

export const CMS = [
    {
        title: "Biggest Offer",
        details: "Shop Surgical Mask",
        bg_img: "/images/Cms-Banner-01.jpg"
    },
    {
        title: "Festival Offer",
        details: "Shop Rubber Gloves",
        bg_img: "/images/Cms-Banner-02.jpg"
    },
    {
        title: "Summer Offer",
        details: "Shop Hand Senitizer",
        bg_img: "/images/Cms-Banner-03.jpg"
    }
]

export const BRAND = [
    {
        id: 1,
        image: "/images/brand-01.png"
    },
    {
        id: 2,
        image: "/images/brand-02.png"
    },
    {
        id: 3,
        image: "/images/brand-03.png"
    },
    {
        id: 4,
        image: "/images/brand-04.png"
    },
    {
        id: 5,
        image: "/images/brand-05.png"
    },
    {
        id: 6,
        image: "/images/brand-01.png"
    },
]

export const BLOG = [
    {
        
    }
]


export const cetagories = [
    {
        title: "Ct-Scanner",
        image: "/images/ct-scanner.png",
        link: "/"
    },
    {
        title: "Miscelneous",
        image: "/images/miscelneous.png",
        link: "/"
    },
    {
        title: "Best Stethoscope",
        image: "/images/best-stethoscope.png",
        link: "/"
    },
    {
        title: "Blood Pressure",
        image: "/images/bloodpressure.png",
        link: "/"
    },
    {
        title: "Rubber Gloves",
        image: "/images/rubbergloves.png",
        link: "/"
    },
    {
        title: "Surgical Mask",
        image: "/images/surgicalmask.png",
        link: "/"
    },
]

export const DASHBOARD_NAV = [
    {
        title: "Dashboard",
        href: '/my-account',
        icon: <FiSliders />,
    },
    {
        title: "Orders",
        href: '/my-account/orders',
        icon: <BsCart />,
    },
    {
        title: "User Profile",
        href: '/my-account/edit-account',
        icon: <BiUser />,
    },
    {
        title: "Addresses",
        href: '/my-account/addresses',
        icon: <TbAddressBook />,
    }
]

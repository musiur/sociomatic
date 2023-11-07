import Link from "next/link";
import BrandLogo from "../assets/brandlogo";
import { LinkedInLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'




const Footer = () => {
    return (
        <footer className="bg-muted">
            <div className="grid grid-cols-4 gap-4 py-6 px-4">
                <div className="flex flex-col justify-between ml-2" >
                    <Link href="/">
                        <BrandLogo />
                    </Link>
                    <p>Damac Tower By paramount, Dubai, UAE</p>
                    <div className="flex flex-col">
                        <p>Get Updated with Us Regularly</p>
                        {/* ICONS COMPONENT ==> FB ICON was not in RADIX */}
                        <div className="flex gap-6 m-2">
                            <Link href='#'>
                                <LinkedInLogoIcon className="scale-150" />
                            </Link>
                            <Link href='#'>
                                <InstagramLogoIcon className="scale-150" />
                            </Link>
                        </div>
                    </div>
                    <p>&copy; All rights reserved 2023</p>
                </div>
                {
                    //  display links data
                    Links.map(link => (
                        <div key={link.id} className="mx-4 ">
                            <p className="text-secondary font-semibold">{link.text}</p>
                            <div className="flex flex-col items-start gap-1 mt-2">
                                {link.children.map((child) => (
                                    <Link key={child.id} href={child.link} className="hover:text-primary">
                                        {child.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </footer>
    );
};

export default Footer;

const Links = [
    {
        id: 1,
        text: 'Company',
        children: [
            {
                id: 1,
                text: 'Home',
                link: '#'
            },
            {
                id: 2,
                text: 'Services',
                link: '#'
            },
            {
                id: 3,
                text: 'Reviews',
                link: '#'
            },
            {
                id: 4,
                text: 'About us',
                link: '#'
            },
            {
                id: 5,
                text: 'Contact us',
                link: '#'
            },

        ]
    },
    {
        id: 2,
        text: 'Services',
        children: [
            {
                id: 1,
                text: 'Google paid advertise',
                link: '#'
            },
            {
                id: 2,
                text: 'Social media paid advertise',
                link: '#'
            },
            {
                id: 3,
                text: 'Software development',
                link: '#'
            },
            {
                id: 4,
                text: 'Data analytics',
                link: '#'
            },
            {
                id: 5,
                text: 'Shopify development',
                link: '#'
            },
            {
                id: 6,
                text: 'Wordpress development',
                link: '#'
            },

        ]
    },
    {
        id: 3,
        text: 'Our Policy',
        children: [
            {
                id: 1,
                text: 'Privacy Policy',
                link: '#'
            },
            {
                id: 2,
                text: 'Terms and conditions',
                link: '#'
            }
        ]
    }

]

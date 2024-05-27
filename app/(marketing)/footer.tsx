import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/hr.svg" height={32} width={40} alt="croatia" className="mr-4 rounded-md"/> Croatian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/es.svg" height={32} width={40} alt="spanish" className="mr-4 rounded-md"/> Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/fr.svg" height={32} width={40} alt="french" className="mr-4 rounded-md"/> French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/it.svg" height={32} width={40} alt="italian" className="mr-4 rounded-md"/> Italian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/jp.svg" height={32} width={40} alt="japanese" className="mr-4 rounded-md"/> Japanese
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
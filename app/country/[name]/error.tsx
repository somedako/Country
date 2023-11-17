'use client';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';

const error = () => {
    return (
        <section className="flex flex-col container">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
                Ops, an Error occured!
            </h1>
            <Link className="flex items-center py-2" href="/">
                <Image src="/arrow.svg" alt="go back" width={24} height={24} />
                Back
            </Link>
        </section>
    );
};

export default error;

import { Component } from 'solid-js';
import flame from '../../assets/flame.png';

const Footer: Component = () => {
    return (
        <footer class="p-4 bg-white md:p-8 lg:p-8 dark:bg-primary-800">
            <div class="mx-auto max-w-screen-xl text-center">
                <a
                    href="#"
                    class="flex justify-center items-center text-lg font-semibold text-primary-900 dark:text-white"
                >
                    <img src={flame} class="mr-3 h-4 sm:h-6" alt="Logo" />
                    Cashburn
                </a>
                {/* <p class="my-4 text-primary-500 text-sm dark:text-primary-400">
          
        </p> */}
                <ul class="flex flex-wrap justify-center items-center text-sm my-3 text-primary-900 dark:text-white">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">
                            Premium
                        </a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">
                            Campaigns
                        </a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">
                            Affiliate Program
                        </a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">
                            Contact
                        </a>
                    </li>
                </ul>
                <span class="text-sm text-primary-500 sm:text-center dark:text-primary-400">
                    © 2021-2022{' '}
                    <a href="#" class="hover:underline">
                        Cashburn™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;

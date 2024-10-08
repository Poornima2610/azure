import { geist } from '@/app/fonts/customfont'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='py-[.30vw] px-[5vw] flex items-center border-b border-primaryBlackColor '>
                <div className='flex items-center w-[48%] justify-between'>
                    <div className='relative'>
                        <div className='bg-primaryBlackColor w-[.22vw] h-[.22vw] left-[105%] translate-y-[.5vw] rounded-full absolute top-0 '></div>
                        <Link href="#" className={ `${geist.className} font-medium text-primaryBlackColor text-[1.65vw]` } >AZURE </Link>
                    </div>
                    <p className={ `${geist.className} text-secondaryBlackColor font-extralight text-[.9vw] -tracking-[.03vw]` }>DEVELOPED BY—<span className='font-medium'>VMR BUILDCON</span></p>
                </div>
                <div className='w-[52%] pl-[18vw] flex items-center justify-between'> 
                    <div className='flex items-center text-secondaryBlackColor gap-[.65vw]'>
                        <div className='relative '>
                            <p className={`${geist.className} font-light text-secondaryBlackColor text-[.55vw] left-0 -translate-x-[.75vw] translate-y-[.50vw] absolute top-0 `}>1.</p>
                            <Link href="" className={ `${geist.className} font-light text-[.9vw] ` }>HOME</Link>
                        </div>
                        <p className='text-[1vw] font-medium pr-[.5vw]'>/</p>
                        <div className='relative '>
                            <p className={ `${geist.className} font-light text-secondaryBlackColor text-[.55vw] left-0 -translate-x-[.75vw] translate-y-[.50vw] absolute top-0 ` }>2.</p>
                            <Link href="" className={ `${geist.className} font-light text-[.9vw]  ` }>APARTMENTS</Link>
                        </div>
                        <p className='text-[1vw] font-medium pr-[.5vw]'>/</p>
                        <div className='relative'>
                            <p className={ `${geist.className} font-light text-secondaryBlackColor text-[.55vw] left-0 -translate-x-[.75vw] translate-y-[.50vw] absolute top-0 ` }>3.</p>
                            <Link href="" className={ `${geist.className} font-light text-[.9vw] ` }>CONTACT</Link>
                        </div>

                    </div>

                    <Link href="" className='border border-[#1C1C1C] rounded-full px-[.85vw] py-[.5vw] relative'>
                        <div className='bg-primaryBlackColor w-[.18vw] h-[.18vw] left-[85%] translate-y-[.45vw] rounded-full absolute top-0 '></div>
                        <p className={ `${geist.className} font-light text-[.9vw] text-[#1C1C1C] leading-[1]`}>MENU</p>
                    </Link>

                </div>
            </div>
        </header>
    )
}

export default Header
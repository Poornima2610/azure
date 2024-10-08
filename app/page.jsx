import React from "react";
import { alex, geist } from "./fonts/customfont";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<div>
			{/* landing section */ }
			<section className="pt-[14.5vw]">
				<div className="relative ">
					<div className="absolute bg-primaryBlackColor w-[1.1vw] h-[1.1vw] rounded-full top-0 right-[2%] translate-y-[1.5vw]"></div>
					<h1 className={ `${geist.className} text-primaryBlackColor font-semibold text-[13.9vw] leading-[1] px-[2.5vw] ` }>
						AZURE<span className="font-extralight pl-[1vw]">HOMES</span>
					</h1>
				</div>
				<div className="px-[2.5vw] pt-[.5vw]">
					<p className={ `${geist.className} text-[.9vw] font-light text-secondaryBlackColor leading-[1] text-end` }>KOMPALLY, HYDERABAD</p>
				</div>
				<div className="pt-[1.5vw] relative">
					<div className=" absolute w-[17%]  right-[0] bottom-[0] pr-[3vw] pb-[4vw] pl-[2vw] pt-[2vw]">
						<div className="bg-[#141414] opacity-[79%] blur-[1.25vw] absolute inset-0 z-[0]"></div>
						<div className="flex items-start gap-[1.5vw] relative z-[1]">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-[5vw] text-[#F9FAFC]" viewBox="0 0 19.472 20.566">
								<path id="Path_15" data-name="Path 15" d="M9.52-40.6H6.1L2.576-28.1v8.067h7.28L9.837-27.8H5.7Zm12.192,0H18.3L14.768-28.1v8.067h7.28V-28.1H17.912Z" transform="translate(-2.576 40.6)" fill="currentColor" />
							</svg>

							<div className="flex flex-col mt-[.5vw]">
								<p className={ `${geist.className} italic text-[#F9FAFC] text-[.65vw]` }>Lorem ipsum dolor sit amet. Aut rerum tenetuy aut ratione eaque in voluptatibus soluta! Ut dosead accusamus et omnis eaque sit — dolorem minus.</p>
								<p className={ `${alex.className} italic text-[#F9FAFC] text-[1.5vw] mt-[.5vw]` }>A. Ross</p>

							</div>
						</div>
					</div>
					<Image src="/assets/images/home/landing.png" priority={ true } width={ 0 } height={ 0 } sizes="100vw" className="w-full h-full" alt="landing" />
				</div>
			</section>

			{/* Second Section */ }
			<section className="bg-primaryBlackColor px-[2.5vw]   flex pt-[6.5vw] pb-[8vw]">
				<div className="relative w-[33%]">
					<div className="relative">
						<div className="bg-[#FFFFFF] w-[.30vw] h-[.30vw] left-0  translate-y-[.4vw] top-0 rounded-full"></div>
						<p className={ `${geist.className} font-light text-[.95vw] text-[#FFFFFF] ml-[1vw] leading-[1]` }>Introduction</p>
					</div>
					<Image src="/assets/images/home/second.png" priority={ true } width={ 0 } height={ 0 } sizes="100vw" className="w-[24.5vw] absolute left-[9%] top-[20%] " alt="vector" />
				</div>
				<div className="w-[67%] ">
					<div className="border-b border-[#F9FAFC] pb-[2.5vw]">
						<p className={ `${geist.className} font-light text-[2.70vw] text-white leading-[1.1] mr-[20vw] -tracking-[.1vw]` }>Azure Homes helps bridge the gap between nature and modern living. Residents can have an interactive living experience where they can get closer to nature’s delight while still having access to advanced amenities.</p>
					</div>

					<div className="flex text-white justify-between pt-[2.5vw] items-end  ">
						<p className={ `${geist.className}  text-[.9vw] w-[46%] leading-[1.4] -tracking-[.02vw] ` }>The serenity of the lush greenery beyond permeates every space within your home, a seamless flow of tranquillity that floats on a forest breeze. Masterfully defined living spaces are inter-connected yet cosseting at the same time.</p>
						<Link href="#" className={ `${geist.className} text-[.9vw] ` }> MORE ABOUT US</Link>
					</div>
				</div>

			</section>

			{/* Third section */ }
			<section className="bg-[#FFFFFF]  px-[2.5vw] pt-[6.5vw] pb-[8vw]">
				<div className="relative flex">
					<div className="relative">
						<div className="bg-[#222222] w-[.30vw] h-[.30vw] left-0  translate-y-[.4vw] top-0 rounded-full"></div>
						<p className={ `${geist.className} font-light text-[.95vw] text-[#222222] leading-[1] ml-[1vw]` }>Introduction</p>
					</div>
					<p className={ `${geist.className} font-medium text-[5.6vw]  text-primaryBlackColor ml-[25vw] leading-[1] -tracking-[.45vw]` }>Property Highlights</p>
				</div>

				<div className="flex mt-[4vw] gap-[.75vw]">
					<div className="w-[67%]">
						<Image src="/assets/images/home/property1.png" priority={ true } width={ 0 } height={ 0 } sizes="100vw" className="w-full " alt="property" />
					</div>
					<div className="w-[33%] flex flex-col">
						<div>
							<Image src="/assets/images/home/property2.png" priority={ true } width={ 0 } height={ 0 } sizes="100vw" className="w-full " alt="property" />
						</div>
						<div className={ `${geist.className} text-secondaryBlackColor mt-[1.25vw] flex-1 flex flex-col` }>
							<div> 
								<p className="text-[.9vw] leading-[1.3] -tracking-[.03vw] w-[92%]">A shared vision has come to life through the extraordinary collaboration of a talented, multi-disciplined team.</p>
								<div className="text-secondaryBlackColor mt-[3vw]">
									{ ['Sustainability Design', 'Architectural Design', 'Interior Design'].map((item, index) =>
										<div className="flex gap-[2vw] border-secondaryBlackColor border-t pt-[.25vw] pb-[.85vw]">
											<p className="font-light text-[.8vw]">{ index + 1 }</p>
											<p className="text-[1.5vw] leading-[1.5]">{ item }</p>
										</div>
									) }
								</div>
							</div>
							<div className="mt-auto">
								<Link href="" className='border border-[#1C1C1C] flex items-center gap-[.85vw] w-max rounded-full px-[.85vw] py-[.5vw] relative'>
									<p className={ `${geist.className} font-light text-[.9vw] text-[#1C1C1C] leading-[.9]` }>OUR SERVICE</p>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-[.9vw]" viewBox="0 0 16.779 16.709">
										<path id="_68fe088114ca90ac76917ac7dba06514" data-name="68fe088114ca90ac76917ac7dba06514" d="M8.088,0,6.927,1.127,13.08,7.279H0V8.9H13.08L6.944,15.032l1.144,1.144,8.088-8.088L8.088,0" transform="translate(0.25 0.179)" stroke="currentColor" stroke-width="0.1" fill-rule="evenodd" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;

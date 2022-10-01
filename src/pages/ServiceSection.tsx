import React,{ useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import Button from "../component/Button"
import Card from "../component/Card"
import TailwindAccordion from "../component/Accordion";

import MaskGroup from "../img/MaskGroup.png"
import QuickOrderPrimary from "../img/QuickOrderPrimary.png"
import QuickOrderWhite from "../img/QuickOrderWhite.png"
import Vector from "../img/Vector.png"
import Modal from "../component/Modal";


const ServiceSection = () =>{
    const [firstElementHover,setFirstElementHover] = useState(false);
    const [secondElementHover,setSecondElementHover] = useState(false);
    const [openModal,setOpenModal] = useState(false);


    const mouseOverOpacityForFirstCard = () =>{
        setFirstElementHover(true);
    }
    const mouseOutOpacityForFirsstCard = () =>{
        setFirstElementHover(false);
    }
    const mouseOverOpacityForSecondCard = () =>{
        setSecondElementHover(true);
    }
    const mouseOutOpacityForSecondCard = () =>{
        setSecondElementHover(false);
    }

    const accordionData = [
        {
            header:"I have a sketch of my project. Can you help me figure out what I need for materials?",
            body:"Yes, before you submit your order for a quote, you can upload any photos or drawings of your project, and we will help you figure out what you need to complete your project."
        },
        {
            header:"How do you guarantee the best prices and availability?",
            body:"We work with local independent garden centers where we receive project-specific bids and availability reports on materials that we organize and compare to provide you with the best results. "
        },
        {
            header:"How quickly could we receive materials? ",
            body:"Depending upon the availability of materials and schedule at the time of processing, you could receive your order as soon as the next business day, but most deliveries are 2 to 4 days after payment is made."
        },
        {
            header:"What if I can’t find a product that I am looking for? ",
            body:"Reach out to customer support via live chat or Contact Us page and let us know what you are looking for, and we will do our best to find and source the product you are looking for."
        },
        {
            header:"Do you offer onsite help with design and measurements?",
            body:"Yes, we have industry professionals that can help you plan your project from start to finish. View our Services section to learn more."
        }
    ]
    return (
        <div className="bg-white px-220 py-60 m-auto">
            <h1 className="text-center text-secondary text-32 font-normal mb-40">Select Your Free Service Level</h1>
           
            {/* Build your Hardscape project with United Hardscapes Start */}
           
            <div className="Build your Hardscape project with United Hardscapes">
                <h3 className="text-center text-primary text-24 font-normal">Build your Hardscape project with United Hardscapes</h3>
                <p className="text-center text-light-400 text-14 font-medium mt-20 mb-55">
                    There are no limits and you can choose the level of service you want depending on your needs.
                </p>
                <div className="flex justify-center flex-wrap md:justify-around m-auto">
                    <div onMouseOver={mouseOverOpacityForFirstCard} onMouseOut={mouseOutOpacityForFirsstCard} className="w-420 h-420">
                        <Card background={`${firstElementHover ? "bg-primary-400":"bg-light-50"}`}>
                            <div className="relative mt-45 mb-10">
                                <img className="w-90 h-100" src={ Vector } alt="Vector"/>
                                {
                                    firstElementHover ? (
                                        <img className="absolute top-15 left-15" src={ QuickOrderWhite } alt="QuickOrderWhite"/>
                                    ):(
                                        <img className="absolute top-15 left-15" src={ QuickOrderPrimary } alt="QuickOrderPrimary"/>
                                    )
                                }
                                
                            </div>
                            <h2 className={`text-center text-32 ${firstElementHover? "text-white":"text-secondary"} font-medium mb-20`}>Do It Yourself</h2>
                            <div className="flex">
                                <h6 className={`text-center text-14 ${firstElementHover ? "text-white":"text-primary"}  font-medium mb-20 pr-10`}>
                                    Self-Service (free)
                                </h6>
                                <span className="w-15 h-15">
                                        <FontAwesomeIcon className={`rounded-100 border-solid border-2 ${firstElementHover ? "border-white text-primary bg-white":"border-primary text-white bg-primary"} `} icon={faCircleInfo} />
                                </span>
                            </div>
                            <p className={`text-center text-14 ${firstElementHover ? "text-white":"text-light-400"} font-normal mb-30`}>We will find the best price for you.</p>
                            <Button 
                                label="Get Started" 
                                bg_color="bg-gradient-to-r from-warning to-warning-400" 
                                font_size="text-12 font-bold" 
                                padding="px-24 py-10" 
                                border="rounded-8"
                                hover="hover:to-warning-100"
                                openModal={setOpenModal}
                            />
                        </Card>
                    </div>

                    <div onMouseOver={mouseOverOpacityForSecondCard} onMouseOut={mouseOutOpacityForSecondCard} className="w-420 h-420 mt-20 xl:mt-0">
                        <Card background={`${secondElementHover ? "bg-light-50":"bg-primary-400"}`}>
                            <div className="relative mt-45 mb-10">
                                <img className="w-90 h-100" src={ Vector } alt="Vector"/>
                                {
                                    secondElementHover ? (
                                        <img className="absolute top-15 left-15" src={ QuickOrderPrimary } alt="QuickOrderPrimary"/>
                                        ):(
                                        <img className="absolute top-15 left-15" src={ QuickOrderWhite } alt="QuickOrderWhite"/>
                                    )
                                }
                                
                            </div>
                            <h2 className={`text-center text-32 ${secondElementHover? "text-secondary":"text-white"} font-medium mb-20`}>Do It Yourself</h2>
                            <div className="flex">
                                <h6 className={`text-center text-14 ${secondElementHover ? "text-primary":"text-white"}  font-medium mb-20 pr-10`}>
                                    Self-Service (free)
                                </h6>
                                <span className="w-15 h-15">
                                        <FontAwesomeIcon className={`rounded-100 border-solid border-2 ${secondElementHover ? "border-primary text-white bg-primary":"border-white text-primary bg-white"} `} icon={faCircleInfo} />
                                </span>
                            </div>
                            <p className={`text-center text-14 ${secondElementHover ? "text-light-400":"text-white"} font-normal mb-30`}>We will find the best price for you.</p>
                            <Button 
                                label="Get Started" 
                                bg_color="bg-gradient-to-r from-warning to-warning-400" 
                                font_size="text-12 font-bold" 
                                padding="px-24 py-10" 
                                border="rounded-8"
                                hover="hover:to-warning-100"
                                
                            />
                        </Card>
                    </div>
                </div>
            </div>

            {/* Most Common FAQ’s Start*/}
            
            <div className="Most Common FAQ’s">
                <h3 className="mt-70 mb-50 text-center text-32 text-primary font-normal">Most Common FAQ’s</h3>
                <div className="rounded-100">
                    <TailwindAccordion data={accordionData}/>
                </div>
                <h6 className="text-center text-14 text-warning font-medium my-30">Learn More</h6>
            </div>
            <div className="flex flex-col items-center  lg:flex-row lg:justify-between rounded-8 shadow-secondary bg-secondary pt-40 pb-25 pl-30">
                <div className="w-1/2">
                    <h3 className="text-18 text-white font-normal">Want to save even more money</h3>
                    <h2 className="text-28 text-white font-medium mb-20">On your hardscape project?</h2>
                    <p className="text-12 text-white font-normal mb-35 max-w-320">
                        Learn more about the other services we offer and see how you can save thousands of dollars by simply planning your upcoming project better.
                    </p>
                    <Button 
                        label="View our Services" 
                        bg_color="bg-gradient-to-r from-warning to-warning-400" 
                        font_size="text-12 font-bold" 
                        padding="px-24 py-10" 
                        border="rounded-8"
                        hover="hover:to-warning-100"
                    />
                </div>
                <div className="mt-20 w-1/2 h-full">
                    <img className="w-full h-full" src={ MaskGroup } alt="MaskGroup"/>
                </div>
            </div>
            {/* <Modal openModal={openModal} setOpenModal={setOpenModal}/> */}
        </div>
    )
}

export default ServiceSection
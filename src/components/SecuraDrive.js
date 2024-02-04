import React from 'react'
import u20bg from "../assets/u20bg.png";
import "../styles/Under20.css";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import filterBtn from "../assets/filterBtn.png";
import sortBtn from "../assets/sortBtn.png"
import { useState } from 'react';
import { store } from "../productsStore/Store";
import HoverImage from 'react-hover-image/build';
import JournalSection from "./JournalSection"
import Features2 from './Features2';

import { FaShippingFast } from "react-icons/fa"
import { FaLock } from 'react-icons/fa';
import { BsCurrencyDollar } from "react-icons/bs";
import better from "../assets/better.jpeg";
import SPFooter from './SPFooter';



const SecuraDrive = () => {
    const [filter, SetFilter] = useState(false);

    const [sort, SetSort] = useState(false);

    const [whatsNewShow, SetWhatsNewShow] = useState(false); //changed from body lotion

    const [highTOLOW, SethighTOLOWShow] = useState(false); //changed from body scrub

    const [lowTOHigh, SetLowTOHigh] = useState(false); //changed from body wash

    const [allShow, SetAllShow] = useState(true);

    // const [lowTOHigh, SetLowTOHigh] = useState(false);




    const filterShowHandler = () => {
        SetFilter(!filter)

    }

    const toggleSortHandler = () => {
        SetSort(!sort)
    }


    const whatsNewHandler = () => {
        SetWhatsNewShow(true);
        SetAllShow(false)

        SethighTOLOWShow(false);
        SetLowTOHigh(false);
    }

    const highToLowHandler = () => {
        SethighTOLOWShow(true)
        SetAllShow(false)

        SetWhatsNewShow(false);
        SetLowTOHigh(false)
    }

    const lowTOHighHandler = () => {
        SetLowTOHigh(true)
        SetAllShow(false)

        SetWhatsNewShow(false)
        SethighTOLOWShow(false)
    }

    const allShowHandler = () => {
        SetAllShow(true)

        SetLowTOHigh(false)
        SetWhatsNewShow(false)
        SethighTOLOWShow(false)
    }



    var bodyLotionProducts = store.filter(product => product.type.includes('sdwhatsnew'));

    var bodyScrubProducts = store.filter(produt => produt.type.includes("sdhighCost"));

    var bodyWashProducts = store.filter(product => product.type.includes("sdlowtohigh"));

    var under40Products = store.filter(product => product.price > 16 && product.price < 40)


    const bgAddHandler = (e) => {

        e.target.classList.add("whi");
       

    }

    const bgRemoveHandler = (e) => {
        e.target.classList.remove("whi");
        


    }








    return (
        <div className='u20MainParent fof '>
            <p className=' bg-white z-50 relative w100vw'>  </p>

            <div className='u20Hold'>
                <img src={u20bg} className="u20Pic" />
            </div>
            
            <div className='u20HeadingHold gap-20 justify-center relative flex flex-col'>
                <p className='u20Heading'> SecuraDrive Tyres</p>
                <p className='u20Desc'> "Elevate Your Drive with Secura Tyres - Superior Control at all Speeds."</p>
            </div>

            <div className='u20BreadCrumbHold absolute text-sm'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
                    <BreadcrumbItem>
                        <Link to={`/`}>Home</Link>
                    </BreadcrumbItem>


                    <BreadcrumbItem>
                        <Link to={`/SecuraDrive`} href='#'>SecuraDrive Tyres</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='filterSortHold flex flex-row gap-8 absolute text-left'>

                <img src={filterBtn} className=" w-36 cursor-pointer scale" onClick={filterShowHandler} />

                {/*<img src={sortBtn} className=" w-36 cursor-pointer scale" onClick={toggleSortHandler} />*/}
            </div>

            <div className='filterOptionsHold  relative'>
                {filter && <div className='flex rounded-xl gap-8 flex-col boxSh fof absolute '>
                    <p className='ml-12 scale cursor-pointer scale' onClick={whatsNewHandler}> What's New</p>
                    <p className='ml-12 scale cursor-pointer' onClick={lowTOHighHandler}> Low Cost </p>
                    <p className='ml-12 scale cursor-pointer' onClick={highToLowHandler}> High Cost </p>
                    <p className='ml-12 scale cursor-pointer text-white' onClick={allShowHandler}> All Products </p>

                </div>}
            </div>

        

            { /* ALL PRODUCTS */}


            {allShow && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {store.map((item) => {

                    if (item.type.includes("sdwhatsnew"," sdhighCost", "sdlowtohigh")) {
                        return (
                            <div className='card w-96 bg-base-100 u20IndResponsive shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>


                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More</button>
                                            <p className='btnLine relative bg-black h-8'></p>
                                            <h2 className="text-xl mb-2 fof u20Price">₹{item.price}</h2>
                                            
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            }


            {/* BODY LOTION  */}

            {whatsNewShow && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {bodyLotionProducts.map((item) => {

                    if (item.type.includes("all")) {
                        return (
                            <div className='card w-96 bg-base-100 shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>

                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                                            <p className='btnLine relative bg-black h-8'>  </p>
                                            <h2 className=" text-xl mb-2 fof u20Price">₹{item.price}</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            }


            {/* BODY WASH */}

            {lowTOHigh && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {bodyWashProducts.map((item) => {

                    if (item.type.includes("all")) {
                        return (
                            <div className='card w-96 bg-base-100 shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>

                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                                            <p className='btnLine relative bg-black h-8'>  </p>
                                            <h2 className=" text-xl mb-2 fof u20Price">₹{item.price}</h2>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        )

                    }
                })}
            </div>
            }


            { /* BODY SCRUB */}

            {highTOLOW && <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                {bodyScrubProducts.map((item) => {

                    if (item.type.includes("all")) {
                        return (
                            <div className='card w-96 bg-base-100 shadow-xl  '>
                                <Link to={`/${item.id}`}>
                                    <figure className="px-10 pt-10">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="w-32 u20img" />
                                    </figure>

                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>

                                    <Link to={`/${item.id}`}>
                                        <div className="card-actions">
                                            <button className="btn btn-primary knmBtn" onMouseEnter={bgAddHandler} onMouseLeave={bgRemoveHandler}>Know More </button>
                                            <p className='btnLine relative bg-black h-8'>  </p>
                                            <h2 className=" text-xl mb-2 fof u20Price">₹{item.price}</h2>
                                        </div>
                                    </Link>

                                </div>

                            </div>
                        )

                    }
                })}


            </div>
            }

            <div className='u20Js relative'>
                <JournalSection />
            </div>

            <div className='u20Featyres relative'>

                <div className='u20FeaturesHold flex flex-row relative'>
                    <FaShippingFast className='w-16 h-20' />
                    <FaLock className='w-12 h-16' />
                    <BsCurrencyDollar className='w-16 h-20' />
                    <img src={better} className="w-20" />
                </div>

                <div className='u20TextFeatureHold fof flex flex-row relative uppercase'>
                    <p> 2 DAY DELIVERY </p>
                    <p> secure checkout </p>
                    <p> royalty points </p>
                    <p> easy returns </p>
                </div>

            </div>

            <div className='relative u20footer'>
                <SPFooter />
            </div>





        </div >


    )

}


export default SecuraDrive;
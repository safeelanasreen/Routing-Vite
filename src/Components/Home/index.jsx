
import React, { useState, useEffect } from 'react';
import Style from './Home.module.scss';
import Assets from '../../assets/Assets';



const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4);

        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, [])
    const imagePaths = [
        Assets.img_1,
        Assets.img_2,
        Assets.img_3,
        Assets.img_4,
    ];
    return (
        <>
            <div className={Style.home} >
                <div className="container">

                    <h1>Home</h1>
                    <section className={Style.anim_sec}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={Style.text_wrap}>
                                    <div className={Style.ttl_wrap}>
                                        <h2 className={Style.ttl}>You Will Like It Here!</h2>
                                    </div>
                                    <p>At WAC, we are all about creating a habitat that lets you grow stronger roots and larger branches. Together let’s make a fruitful journey!</p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={Style.img_wrap}>
                                    {/* <div className={Style.innerwrap}> */}
                                        {imagePaths.map((imagePath, index) => (
                                            <div
                                                key={index}
                                                className={`${Style.img_item} ${index === activeIndex ? Style.active : ''
                                                    }`}
                                            >
                                                <figure className="ratio">
                                                    <img src={imagePath} alt="" />
                                                </figure>
                                            </div>
                                        ))}

                                    {/* </div> */}



                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                     
                    </section>
                </div>

            </div>

        </>
    )
}
export default Home
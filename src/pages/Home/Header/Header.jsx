import banner2 from '../../../assets/images/banner2.jpg';
import banner3 from '../../../assets/images/banner3.jpg';
import banner4 from '../../../assets/images/banner4.jpg';

const Header = () => {
    return (
        <div className="carousel w-full h-[400px] md:h-[450px] lg:h-[660px] ">
            <div id="slide1" className="carousel-item w-full relative">
                <div className="absolute bg-gradient-to-r from-[#1515153f] to-[#15151500] h-full w-full text-white p-5 md:p-20 space-y-2  md:space-y-6">
                    <img
                        src="https://adventor.wpengine.com/wp-content/uploads/2021/07/slider-decor.png"
                        alt="logo"
                    />
                    <p className="md:text-2xl">Discover the</p>
                    <h1 className="text-2xl md:text-5xl font-bold">
                        Adventure Travel
                    </h1>
                    <p>Your best Adventure Deals with nature.</p>
                    <button className="btn btn-secondary btn-sm">
                        View Adventure
                    </button>
                </div>

                <img
                    src="https://tourigo-typescript.vercel.app/_next/static/media/about-img-1.fdd8b588.png?w=750&q=75"
                    className="w-full"
                />
                <div className="absolute right-10 bottom-10 flex space-x-6">
                    <a
                        href="#slide4"
                        className="btn btn-circle text-white bg-orange-600">
                        ❮--
                    </a>
                    <a
                        href="#slide2"
                        className="btn btn-circle text-white bg-orange-600">
                        --❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <div className="absolute bg-gradient-to-r from-[#1515153f] to-[#15151500] h-full w-full text-white p-5 md:p-20 space-y-2  md:space-y-6">
                    <img
                        src="https://adventor.wpengine.com/wp-content/uploads/2021/07/slider-decor.png"
                        alt="logo"
                    />
                    <p className="md:text-2xl">Discover the</p>
                    <h1 className="text-2xl md:text-5xl font-bold">
                        Adventure Travel
                    </h1>
                    <p>Your best Adventure Deals with nature.</p>
                    <button className="btn btn-secondary btn-sm">
                        View Adventure
                    </button>
                </div>
                <img src={banner2} className="w-full" />
                <div className="absolute right-10 bottom-10 flex space-x-6">
                    <a
                        href="#slide1"
                        className="btn btn-circle text-white bg-orange-600">
                        ❮--
                    </a>
                    <a
                        href="#slide3"
                        className="btn btn-circle text-white bg-orange-600">
                        --❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <div className="absolute bg-gradient-to-r from-[#1515153f] to-[#15151500] h-full w-full text-white p-5 md:p-20 space-y-2  md:space-y-6">
                    <img
                        src="https://adventor.wpengine.com/wp-content/uploads/2021/07/slider-decor.png"
                        alt="logo"
                    />
                    <p className="md:text-2xl">Discover the</p>
                    <h1 className="text-2xl md:text-5xl font-bold">
                        Adventure Travel
                    </h1>
                    <p>Your best Adventure Deals with nature.</p>
                    <button className="btn btn-secondary btn-sm">
                        View Adventure
                    </button>
                </div>
                <img src={banner3} className="w-full" />
                <div className="absolute right-10 bottom-10 flex space-x-6">
                    <a
                        href="#slide2"
                        className="btn btn-circle text-white bg-orange-600">
                        ❮--
                    </a>
                    <a
                        href="#slide4"
                        className="btn btn-circle text-white bg-orange-600">
                        --❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <div className="absolute bg-gradient-to-r from-[#1515153f] to-[#15151500] h-full w-full text-white p-5 md:p-20 space-y-2  md:space-y-6">
                    <img
                        src="https://adventor.wpengine.com/wp-content/uploads/2021/07/slider-decor.png"
                        alt="logo"
                    />
                    <p className="md:text-2xl">Discover the</p>
                    <h1 className="text-2xl md:text-5xl font-bold">
                        Adventure Travel
                    </h1>
                    <p>Your best Adventure Deals with nature.</p>
                    <button className="btn btn-secondary btn-sm">
                        View Adventure
                    </button>
                </div>
                <img src={banner4} className="w-full" />
                <div className="absolute right-10 bottom-10 flex space-x-6">
                    <a
                        href="#slide3"
                        className="btn btn-circle text-white bg-orange-600">
                        ❮--
                    </a>
                    <a
                        href="#slide1"
                        className="btn btn-circle text-white bg-orange-600">
                        --❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;

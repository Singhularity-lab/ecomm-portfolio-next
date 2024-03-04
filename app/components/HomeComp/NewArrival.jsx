import arrowRight from '../../../public/static/images/right-arrow.png';
import image1 from '../../../public/static/images/new-arrival-1.png';
import heartImg from '../../../public/static/images/heart.png';

const NewArrival = () => {
  return (
    <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] mt-8 ">
      <div className="flex justify-between mx-12">
        <div className="flex flex-col font-poppins text-[2.5rem]">
          <span className="leading-[44px]">New</span>
          <span>Arrivals</span>
        </div>
        <span className="flex gap-2 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
          More Products <img src={arrowRight.src} className="w-[1.25rem] h-[1.25rem]"></img>
        </span>
      </div>
      <div className="overflow-x-scroll w-screen relative mt-8 mb-10 flex gap-10">
        <div className="">
          <div className="w-[262px] absolute top-3 left-3 ">
            <div className="flex justify-between w-[243px]">
              <div className="flex flex-col gap-3">
                <span className="bg-white px-2 py-1 rounded font-bold font-inter flex items-center">NEW</span>
                <span className="bg-secondaryGreen text-white px-[0.87rem] py-[0.25rem] rounded font-bold font-inter flex items-center">-19%</span>
              </div>
              <img src={heartImg.src} className="w-[2rem] h-[2rem]"></img>
            </div>
          </div>
          <img className="w-[262px] " src={image1.src}></img>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

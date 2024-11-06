import React from 'react';

const Card = () => {
  return (
    <div className="font-montserrat">
      <section className="flex justify-center">
        <div className="w-[1046px] h-[292px] mx-auto gap-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="w-[328px] h-[292px] p-[35px_40px] bg-white shadow-[0px_13px_19px_#00000012] gap-20px">
              <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] pt-5 pr-5 pb-5 pl-5 gap-[10px]"></div>
              <h5 className="pt-[16px] pb-[16px] text-[16px] font-bold font-montserrat text-[#252B42] leading-6 tracking-[0.1px] text-left">
                Training Courses
              </h5>
              <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="w-[222px] h-[60px] pt-6 text-sm text-[#737373] font-medium font-montserrat leading-[20px] tracking-[0.2px] text-left">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            <div className="w-[328px] h-[292px] p-[35px] bg-[#FFFFFF] shadow-[0px_13px_19px_#00000012] flex flex-col gap-5">
              <div className="w-[70px] h-[76px] rounded-lg bg-[#B9EAA8] pt-5 pr-5 pb-5 pl-5 gap-2"></div>
              <h5 className="text-[16px] font-bold font-montserrat text-[#252B42] leading-6 tracking-[0.1px] text-left">
                2,769 online courses
              </h5>
              <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="w-[222px] h-[60px] text-[14px] text-[#737373] font-medium font-montserrat leading-5 tracking-[0.2px] text-left">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>

            <div className="w-[328px] h-[292px] p-[35px] bg-[#23A6F0] shadow-[0px_13px_19px_#00000012] text-white flex flex-col gap-5">
              <div className="w-[70px] h-[76px] rounded-lg bg-[#FFFFFF] pt-5 pr-5 pb-5 pl-5 gap-2"></div>
              <h5 className="text-[#FFFFFF] text-[16px] font-bold font-montserrat leading-6 tracking-[0.1px] text-left mb-2">
                Training Courses
              </h5>
              <div className="w-[50px] h-[2px] bg-[#FFFFFF]"></div>
              <p className="text-[#FFFFFF] text-[14px] font-medium font-montserrat leading-5 tracking-[0.2px] text-left">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
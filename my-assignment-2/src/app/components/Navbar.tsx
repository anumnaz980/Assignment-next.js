import React from 'react';



const Navbar = () => {
    return (
      <div className=" w-1440px h-1132px mt-590px mt-720px" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <header className="bg-[#252B42] p-4 w-1322px h-91px ml-59px">
          <div className=" container w-187px h-58px mt-17px ml-136px mx-auto flex justify-between items-center text-white">
            <h3 className="text-2xl font-bold w-152px h-32px mt-13px leading-2px tracking-normal hover:text-blue-400">BrandName</h3>
            
            <nav className="space-x-6 w-[275px] h-[24px] mt-[17px] gap-[21px]">
            <a href="#" className="hover:text-blue-400">Home</a>
            <a href="#" className="hover:text-blue-400">Product</a>
            <a href="#" className="hover:text-blue-400">Pricing</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
            </nav>

            <div className="space-x-4">
              <button className="w-41px h-22px font-bold hover:text-blue-400">Login</button>
              <button className="px-4 py-2 rounded w-110 h-52px rounded-5px pt-15px pr-25px pb-15px pl-25px gap- text-14px hover:bg-blue-600  bg-[#23A6F0]">JOIN US</button>
            </div>
          </div>
        </header>

        </div>
    )
  } 

  export default Navbar
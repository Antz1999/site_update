import React from 'react';

const Header = () => {
  return (
    <header className="mb-8 md:pl-6">
      <div className="flex items-center gap-4 flex-wrap">
        <h1 className="font-title text-sm font-[100] tracking-wider text-gray-300">
          glimpse.london
        </h1>
        <p className="font-title text-sm font-[100] tracking-wider text-[#6BB5F5]">
          radio show
        </p>
        <p className="font-title text-sm font-[100] tracking-wider text-[#6BB5F5]">
          house | techno
        </p>
        <p className="font-title text-sm font-[100] tracking-wider text-gray-300">
          live every 3rd sunday of the month
        </p>
        <p className="font-title text-sm font-[100] tracking-wider text-gray-300">
          15:00 - 17:00 GMT
        </p>
      </div>
    </header>
  );
}

export default Header;
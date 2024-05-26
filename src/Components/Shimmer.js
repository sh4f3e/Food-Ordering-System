const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-filter flex p-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ecf0f1"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>

        <p className="text-[#6f6d6d] text-[13px] mt-[13px] italic ml-[5px]">
          Filter
        </p>
      </div>
      <div className="shimmer-rated">
        <button className="shimmer-rated-btn text-[#ecf0f1] mt-[7px] ml-[30px] text-[20px] rounded-full p-[12px] bg-[#ecf0f1] border-none">
          Top Rated
        </button>
      </div>

      <div className="shimmer-container flex flex-wrap pl-[100px] pt-[20px]">
        <div className="Shimmer-card pt-[50px] ml-[50px] mt-[50px] w-[260px] h-[380px]  bg-[#ecf0f1] rounded-[15px]"></div>
        <div className="Shimmer-card pt-[50px] ml-[50px] mt-[50px] w-[260px] h-[380px]  bg-[#ecf0f1] rounded-[15px]"></div>
        <div className="Shimmer-card pt-[50px] ml-[50px] mt-[50px] w-[260px] h-[380px]  bg-[#ecf0f1] rounded-[15px]"></div>
        <div className="Shimmer-card pt-[50px] ml-[50px] mt-[50px] w-[260px] h-[380px]  bg-[#ecf0f1] rounded-[15px]"></div>
        <div className="Shimmer-card pt-[50px] ml-[50px] mt-[50px] w-[260px] h-[380px]  bg-[#ecf0f1] rounded-[15px]"></div>
        <div className="Shimmer-card pt-[50px] ml-[50px] mt-[50px] w-[260px] h-[380px]  bg-[#ecf0f1] rounded-[15px]"></div>
      </div>
    </div>
  );
};

export default Shimmer;

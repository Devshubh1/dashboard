import Onecard from "@/widgets/Cards/Onecard";
import React from "react";

const Header = () => {
  return (
    <div>
      <section>
        <div className="flex-grow p-2">
          <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex flex-col sm:flex-row md:w-1/2 sm:w-full gap-5">
              <div class="w-full sm:w-1/2  gap-5">
                <Onecard pendingtasks={20} completetasks={"80%"} />
                <div class="bg-white p-4 mt-5 h-48 rounded-md border border-gray-300">
                  Div 2
                </div>
              </div>
              <div class="w-full sm:w-1/2  gap-5">
                <div class="bg-white p-4 mb-5 sm:mb-0 h-48 rounded-md border border-gray-300">
                  Div 1
                </div>
                <div class="bg-white p-4 mt-5 h-48 rounded-md border border-gray-300">
                  Div 2
                </div>
              </div>
            </div>

            <div className="bg-white p-4  md:w-1/2 sm:w-full rounded-md border border-gray-300">
              Single Div
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex-grow p-2 ">
          <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-96">
            <div className="bg-white p-2  md:w-full sm:w-full rounded-md border border-gray-300">
              Single Div
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex-grow p-2">
          <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-96">
            <div className="bg-blue-950 p-4 rounded md:w-1/2 sm:w-full ">
              Single Div
            </div>
            <div className="bg-blue-950 p-4 rounded md:w-1/2 sm:w-full">
              Single Div
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex-grow p-2">
          <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-96">
            <div className="bg-blue-950 p-4 rounded md:w-2/3 sm:w-full">
              Single Div
            </div>
            <div className="bg-blue-950 p-4 rounded md:w-1/3 sm:w-full">
              Single Div
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

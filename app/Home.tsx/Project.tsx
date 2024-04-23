'use client'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import ProjCard from './ProjCard'
import Cardy from './demo'
import Card from './Card'
import Card2 from './Card2'

type Props = {}

const Project = (props: Props) => {
  return (
    <Tabs>
      <TabList textColor={'white'}>
        <Tab>All</Tab>
        <Tab>E-commerce</Tab>
        <Tab>Corporate</Tab>
        <Tab>Single-Page</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <div className=''>
            <Cardy />
            <Card2 />
            <Card />
          </div>
        </TabPanel>
        <TabPanel>
          <Cardy />
        </TabPanel>
        <TabPanel>
          <Card2 />
        </TabPanel>
        <TabPanel>
          <Card />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Project

// import React, { useState } from "react";
// import Link from "next/link";
// import Portfolio from "./Portfolio";
// import ProjectUno from "./Portfolio";
// import ProjectDos from "./Portfolio";
// import AllComp from "./Portfolio";

// type Props = {};

// const PortfolioList = (props: Props) => {
//   const [activeButton, setActiveButton] = useState("Animation");

//   const handleButtonClick = (buttonText: string) => {
//     setActiveButton(buttonText);
//   };

//   let contentToShow = null;

//   switch (activeButton) {
//     case "Animation":
//       contentToShow = <AllComp />;
//       break;
//     case "Web Design":
//       // Replace this with the component/content for Web Design
//       contentToShow = <ProjectUno />;
//       break;
//     case "App Design":
//       // Replace this with the component/content for App Design
//       contentToShow = <Portfolio />;
//       break;
//     case "Branding":
//       // Replace this with the component/content for Branding
//       contentToShow = <ProjectDos />;
//       break;
//     default:
//       contentToShow = null;
//   }

//   return (
//     <div>
//       <section className="bg-gray-800 lg:mt-4 m-4 lg:mx-16 rounded-3xl lg-h-[650px] md-h-[580px] sm-h-[700px] max-w-[85rem] px-4 sm:px-6 lg:px-8">
//         <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//           <div className="flex py-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
//             <button
//               className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
//                 activeButton === "Animation"
//                   ? "text-indigo-300 border-b-2 border-indigo-500"
//                   : "text-gray-200 border-b-2 border-gray-200"
//               } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
//               onClick={() => handleButtonClick("Animation")}
//             >
//               All
//             </button>

//             <button
//               className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
//                 activeButton === "Web Design"
//                   ? "text-indigo-300 border-b-2 border-indigo-500"
//                   : "text-gray-200 border-b-2 border-gray-200"
//               } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
//               onClick={() => handleButtonClick("Web Design")}
//             >
//               E-commerce Websites
//             </button>

//             <button
//               className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
//                 activeButton === "App Design"
//                   ? "text-indigo-300 border-b-2 border-indigo-500"
//                   : "text-gray-200 border-b-2 border-gray-200"
//               } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
//               onClick={() => handleButtonClick("App Design")}
//             >
//               Corporate Websites
//             </button>

//             <button
//               className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
//                 activeButton === "Branding"
//                   ? "text-indigo-300 border-b-2 border-indigo-500"
//                   : "text-gray-200 border-b-2 border-gray-200"
//               } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
//               onClick={() => handleButtonClick("Branding")}
//             >
//               Blog and Content Websites
//             </button>
//           </div>
//           {/* Display the dynamic content */}
//           <div className="mt-8">{contentToShow}</div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PortfolioList;

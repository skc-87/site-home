import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card"; // Ensure the correct import path

export function TopPackages() {
  const handleButtonClick = () => {
    window.open("https://ui.aceternity.com/components/3d-card-effect", "_blank");
  };

  const cardData = [
    { id: 1, title: "Make things float in air", description: "Hover over this card ", imgSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Explore new horizons", description: "Discover amazing places and experiences.", imgSrc: "https://images.unsplash.com/photo-1600130279735-1abf1a3e1b49?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, title: "Experience the adventure", description: "Adventure awaits in every corner.", imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, title: "Live your dreams", description: "Make your dreams a reality.", imgSrc: "https://images.unsplash.com/photo-1519645021746-4b4951b104e6?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, title: "Innovate your life", description: "Stay ahead with innovative ideas.", imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, title: "Create memories", description: "Cherish every moment of your journey.", imgSrc: "https://images.unsplash.com/photo-1557682223-9f8c64c6dc32?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="flex flex-wrap justify-center p-2 max-w-[1200px] mx-auto"> {/* Container with max width */}
      {cardData.map((card) => (
        <CardContainer key={card.id} className="inter-var mx-2 my-2 w-72"> {/* Adjust width as necessary */}
          <CardBody className="bg-gray-50 relative group hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-gray-200 h-auto rounded-xl p-4 border">
            <CardItem translateZ="50" className="text-lg font-bold text-gray-800 dark:text-white">
              {card.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-white text-xs max-w-sm mt-1 mb-1 dark:text-gray-300">
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mb-4">
              <img
                src={card.imgSrc}
                alt="thumbnail"
                className="h-48 w-full object-cover rounded-xl group-hover:shadow-xl"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-2">
              <CardItem
                translateZ={20}
                as="button"
                onClick={handleButtonClick}
                className="px-3 py-1 rounded-xl text-xs font-normal text-white bg-transparent hover:bg-emerald-500 hover:text-white transition duration-300 ease-in-out"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-1 rounded-xl bg-black text-white text-xs font-bold hover:bg-emerald-500 transition duration-300 ease-in-out"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default TopPackages;

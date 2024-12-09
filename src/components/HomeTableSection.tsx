import React from 'react'

interface HomeTableSectionProps {
    title: string
    description: string
    checkboxes?: string[] // Optional array for checkbox descriptions
  }
  
  const HomeTableSection: React.FC<HomeTableSectionProps> = ({ title, description, checkboxes = [] }) => {
    return (
      <div className="p-4 border border-gray-200 flex flex-col justify-start h-full">
        {/* Title */}
        <h2 className="text-sm font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
  
        {/* Timeline */}
        {checkboxes.length > 0 && (
          <div className="mt-4 flex flex-col items-start relative">
            {checkboxes.map((item, index) => (
              <div key={index} className="flex items-center mb-4 last:mb-0">
                {/* Line between checkboxes */}
                {index > 0 && (
                  <div className="absolute w-px h-full bg-gray-300 left-2 -top-0 z-0"></div>
                )}
  
                {/* Checkbox */}
                <div className="relative z-10">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-500 bg-white"></div>
                </div>
  
                {/* Description */}
                <p className="text-sm text-gray-600 ml-4">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
  
  export default HomeTableSection
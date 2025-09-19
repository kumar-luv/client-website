import React, { useState } from "react";

const NestedDropdown = ({ service }) => {
  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text?.split(urlRegex);

    return parts?.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-200"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const [openSubheading, setOpenSubheading] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setOpenSubheading(null);
    }
  };

  const toggleSubheading = (index) => {
    setOpenSubheading(openSubheading === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div
        className="bg-white rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:border-blue-300 hover:scale-[1.02] group"
        onClick={toggleDropdown}
      >
        <div className="p-5 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
              {service.title}
            </h3>
            {service?.description && (
              <p className="text-base text-blue-600 font-semibold">
                {service?.description}
              </p>
            )}
          </div>
          <div className="ml-4 p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
            <svg
              className={`w-5 h-5 text-blue-600 transition-all duration-300 ${
                isOpen ? "rotate-180 scale-110" : "scale-100"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="transition-all duration-500 ease-in-out opacity-100 transform translate-y-0">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-l-4 border-blue-500 rounded-b-xl shadow-xl backdrop-blur-sm">
            <div className="p-5">
              {service.mainContent && (
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-5 border border-white/50">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {renderTextWithLinks(service.mainContent)}
                  </p>
                </div>
              )}

              {service.normalPoints && service.normalPoints.length > 0 && (
                <div className="mb-5">
                  {service.normalPoints.map((point, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] mb-3"
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-semibold text-gray-800">
                             {point}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {service.subheadings && service.subheadings.length > 0 && (
                <div className="space-y-3">
                  {service.subheadings.map((subheading, index) => {
                    const normalPointsCount = service.normalPoints
                      ? service.normalPoints.length
                      : 0;
                    const subheadingNumber = normalPointsCount + index + 1;
                    return (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                      >
                        <div
                          className="p-4 cursor-pointer hover:bg-blue-50/50 transition-all duration-300 rounded-xl group"
                          onClick={() => toggleSubheading(index)}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                              {subheading.title}
                            </h4>
                            <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                              <svg
                                className={`w-4 h-4 text-blue-600 transition-all duration-300 ${
                                  openSubheading === index
                                    ? "rotate-180 scale-110"
                                    : "scale-100"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {openSubheading === index && (
                          <div className="transition-all duration-400 ease-in-out opacity-100 transform translate-y-0">
                            <div className="px-4 pb-4">
                              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 shadow-inner">
                                {subheading.points.map((point, pointIndex) => (
                                  <div
                                    key={pointIndex}
                                    className="flex items-start mb-3 last:mb-0 group"
                                  >
                                    <span className="text-blue-600 mr-3 mt-1 text-sm font-bold group-hover:scale-110 transition-transform duration-200">
                                      ✓
                                    </span>
                                    <span className="text-gray-700 text-sm font-medium group-hover:text-gray-800 transition-colors duration-200">
                                      {renderTextWithLinks(point)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;

import React from "react";

const steps = [
  "Ingrese el enlace",
  "Haga clic en 'Generar QR'",
  "Descargue el código QR",
];

const Step = () => {
  return (
    <div className="flex items-center justify-center pt-4 pb-4 bg-gray-200 dark:bg-black dark:text-white">
      <ul className="relative m-0 flex flex-col list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
        {steps.map((step, index) => (
          <li key={index} className="flex-auto mb-4">
            <div className="flex items-center">
              <span
                className={`mr-4 flex h-[1.938rem] w-[1.938rem] bg-blue-500 items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#fff] ${
                  index === 0  
                }`}
              >
                {index + 1}
              </span>
              <span className="font-medium text-neutral-500 dark:text-blue-400">
                {step}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step;

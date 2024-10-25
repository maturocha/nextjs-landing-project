import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Button from "@/components/elements/ui/Button";

import { FaTimes, FaCheck } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface PlansProps {
  plans: any;
}

const PricingCards = ({ plans }: PlansProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-8 md:max-w-screen-lg m-auto">
      {plans.map((plan: any, index: number) => (
        <article
          key={index}
          className={`flex flex-col items-center py-4 justify-between mx-auto min-w-[300px] h-max w-full ${plan.colors.background} shadow-lg rounded-md`}
        >
          <div className="flex flex-col items-center px-4 py-8 space-y-2">
            {plan.icon && (
              <figure className="w-20 h-20 relative">{plan.icon}</figure>
            )}

            <div className="flex relative">
              <h3
                data-tip={plan.description}
                className={`text-xl uppercase font-semibold text-center ${plan.colors.primary}`}
              >
                {plan.name}
              </h3>
              <FaInfoCircle
                className={`relative top-0 -right-1 ${plan.colors.primary}`}
                data-tip={plan.description}
              />
              <ReactTooltip />
            </div>

            <div>
              <div
                className={`text-2xl  font-semibold text-center ${plan.colors.secondary}`}
              >
                {plan.pricing.discount.active ? (
                  <>
                    <p className={`${plan.colors.secondary}`}>
                      {`UF ${plan.pricing.discount.value}/alumno `}
                    </p>

                    <p className={`d-block line-through text-gray-700 text-sm`}>
                      {`UF ${plan.pricing.value}/alumno`}
                    </p>
                  </>
                ) : (
                  `${plan.from ? "desde" : ""} UF ${plan.pricing.value}/alumno`
                )}
              </div>
              {plan.pricing.freeTrial && (
                <p className={`text-sm text-center ${plan.colors.primary}`}>
                  Sin costo
                </p>
              )}

              {!plan.pricing.freeTrial && !plan.pricing.discount.active && (
                <span className="h-5"></span>
              )}
            </div>

            <div>
              <h4
                className={`text-base text-center font-semibold py-2 cursor-pointer ${plan.colors.secondary}`}
              >
                ¿Qué incluye?
              </h4>

              <ul className="flex flex-col space-y-2">
                {plan.includes &&
                  plan.includes.map((imple: any, i: number) => (
                    <li
                      key={i}
                      className={`flex animate-fade-in-down-1 items-center justify-between space-x-1`}
                    >
                      <span className={`text-sm ${plan.colors.secondary}`}>
                        {imple}
                      </span>

                      <FaCheck
                        className={`h-3 w-3 flex-none ${plan.colors.primary}`}
                      />
                    </li>
                  ))}
                {plan.notIncludes &&
                  plan.notIncludes.map((imple: any, i: number) => (
                    <li
                      key={i}
                      className={`flex animate-fade-in-down-1 items-center justify-between space-x-1`}
                    >
                      <span className={`text-sm ${plan.colors.secondary}`}>
                        {imple}
                      </span>

                      <FaTimes
                        className={`h-3 w-3 flex-none ${plan.colors.primary}`}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PricingCards;

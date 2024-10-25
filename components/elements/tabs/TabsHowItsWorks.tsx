import { useState } from "react";

interface Props {
  className?: string;
  tabs: any [];
}

const TabsHowItsWorks = ({
  className = '',
  tabs
}: Props) => {

  const [openTab, setOpenTab] = useState(0);

  return  <>
            <nav className="my-8 mx-4">
              <ul  className="flex list-none space-x-4 md:justify-around pb-4 overflow-x-auto"
                    role="tablist">

                {tabs.length > 0 ? (
                  tabs.map((item:any, index:number) => (
                    <li
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(index);
                      }}
                      data-toggle="tab"
                      role="tablist" 
                      className={`whitespace-nowrap cursor-pointer font-semibold w-full rounded-md 
                                text-base text-center px-4 py-2 animate-fade-in
                              ${(openTab === index) ? 'bg-violet-water text-primary' : 'bg-gray-100 hover:bg-violet-water text-primary'}`}
                      key={index}>
                      
                      {item.title}
                    
                  </li>
                    ))
                ) : ''

                }
              </ul>
            </nav>

           

           {tabs[openTab].cols &&
          
                  tabs[openTab].cols
           }
          </>
          
};

export default TabsHowItsWorks;
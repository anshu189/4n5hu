import { useState } from "react";
import { AuroraBackgroundDemo } from "./aurora-bg";
import { BackgroundBeamsDemo } from "./beams-bg";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Switch } from "@nextui-org/react";

export default function App() {
  const [color, setColor] = useState("warning")
  const [toggleBG, setToggleBG] = useState(true)
  const [selectedKeys, setSelectedKeys] = useState("Supreme");
  const variants = {
    Flat: "default",
    Pro: "primary",
    Purple: "secondary",
    Emerland: "success",
    Supreme: "warning",
    Pinky: "danger"
  };

  const updateTheme=(key)=> {
    setColor(variants[key]);
  }

  return (
    <div className="dark relative">
      
      <div className="absolute top-6 md:top-10 right-6 md:right-10">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" color={color}>
              {selectedKeys}
            </Button>
          </DropdownTrigger>

          <DropdownMenu 
            onAction={(key) => updateTheme(key)}
            variant="flat"
            color={color}
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem className="px-3 py-2 text-white" key="Flat">Flat</DropdownItem>
            <DropdownItem className="px-3 py-2 text-white" key="Pro">Pro</DropdownItem>
            <DropdownItem className="px-3 py-2 text-white" key="Purple">Purple</DropdownItem>
            <DropdownItem className="px-3 py-2 text-white" key="Emerland">Emerland</DropdownItem>
            <DropdownItem className="px-3 py-2 text-white" key="Supreme">Supreme</DropdownItem>
            <DropdownItem className="px-3 py-2 text-white" key="Pinky">Pinky</DropdownItem>
          </DropdownMenu>
        
        </Dropdown>
      </div>
      <div className="absolute top-6 left-0 z-20">
        {/* <Button onClick={()=>setToggleBG(!toggleBG)} className="text-white text-sm md:text-md" color={"dafault"} variant="faded" radius="full">
          {toggleBG?"Aurora":"Beams"}
        </Button>   */}
        <Switch isSelected={toggleBG} onValueChange={setToggleBG} color="success" className="z-20">
          {toggleBG?"Aurora":"Beams"}
        </Switch>
      </div>
      {toggleBG===true?<AuroraBackgroundDemo color={color}/>:<BackgroundBeamsDemo color={color}/>}
    </div>
  );
}
import { useContext } from "react";
import { TabContext } from "../../context/TabContext";
import Tab1 from "../Tab1/Tab1";
import Tab2 from "../Tab2/Tab2";
import Tab3 from "../Tab3/Tab3";

export default function Body() {
  const {tabIndex} = useContext(TabContext)!;

  function getTab() {
    switch (tabIndex) {
      case 0:
        return <Tab1 />
      case 1:
        return <Tab2 />
      case 2:
        return <Tab3 />
      default:
        break;
    }
  }

  return (
    <div>
      {getTab()}
    </div>
  )
}
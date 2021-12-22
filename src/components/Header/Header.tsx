import { useContext } from "react";
import { TabContext } from "../../context/TabContext";

interface IHeaderProps {
  background: string;
  height: string;
}

interface ITabData {
  name: string;
  index: number;
}

const Header: React.FC<IHeaderProps> = ({background, height}) => {
  const { setTabIndex } = useContext(TabContext)!;

  const tabs: ITabData[] = [
    { name: "Thea", index: 0 },
    { name: "Kelly", index: 1 },
    { name: "fish", index:2 }
  ]

  return (
    <div style={{height, background, display: "flex"}}>
      {
        tabs.map((v) => (
          <div style={{margin: "0 0.5rem", color: "blue"}} onClick={() => setTabIndex(v.index)} key={v.index}>
            {v.name}
          </div>
        ))
      }
    </div>
  )
}

export default Header;

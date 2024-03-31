import Tabs from "./tabs";

export default function TabsApp() {
  function RandomComponent() {
    return <h1>Random Component</h1>;
  }

  const tabs = [
    {
      id: 1,
      label: "Tab 1",
      content: <div>Tab 1 Content</div>,
    },
    {
      id: 2,
      label: "Tab 2",
      content: <div>Tab 2 Content</div>,
    },
    {
      id: 3,
      label: "Tab 3",
      content: <div>Tab 3 Content</div>,
    },
    {
      id: 4,
      label: "Tab 4",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    //console.log(currentTabIndex);
  }

  return <Tabs content={tabs} onChange={handleChange} />;
}

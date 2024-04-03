import { useContext } from "react";
import { FeatureFlagsContext } from "./context";

import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import TabsApp from "../cutom-tabs/tabs-app";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },{
        key: "showTabs",
        component: <TabsApp />,
      },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map((componentItem) => {
          return (
            <div key={componentItem.key}>
              { checkEnabledFlags(componentItem.key) ? componentItem.component : null}
            </div>
          );
        })
      }
    </div>
  );
}

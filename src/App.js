import TabBar from "./components/TabBar.js";
import Content from "./components/Contents.js";

import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    currentTab: window.location.pathname.replace("/", "") || "all",
    photos: [],
  };

  //tab
  const tab = new TabBar({
    $app,
    initialState: "",
    onClick: async (name) => {
      history.pushState(null, `${name}사진`, name);
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name === "all" ? "" : name),
      });
    },
  });

  //content
  const content = new Content({ $app, initialState: [] });

  //state
  this.setState = (newState) => {
    this.state = newState;
    tab.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  window.addEventListener("popstate", async () => {
    const tabName = window.location.pathname.replace("/", "") || "all";
    const photos = await request(tabName === "all" ? " " : tabName);
    this.setState({
      ...this.state,
      currentTab: tabName,
      photos: photos,
    });
  });
  const init = async () => {};

  init();
}

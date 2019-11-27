import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import Header from "./components/Header";
import ImageMode from "./components/ImageMode";
import ProjectsSummary from "./components/ProjectsSummary";
import SettingsHelp from "./components/SettingsHelp";
import WebCamMode from "./components/WebCamMode";

import gateway from "./utils/gateway";

export default () => (
  <div className="App">
    <Header />
    <Container>
      <SettingsHelp show={!window.rekognitionSettings} />
      <Tabs
        defaultActiveKey={2}
        transition={false}
        id="noanim-tab-example"
        unmountOnExit={true}
        variant="pills"
      >
        <Tab eventKey={1} title="Welcome">
          <ProjectsSummary gateway={gateway} />
        </Tab>
        <Tab eventKey={2} title="Image Mode">
          <ImageMode gateway={gateway} />
        </Tab>
        <Tab eventKey={3} title="Webcam Mode">
          <WebCamMode gateway={gateway} />
        </Tab>
      </Tabs>
    </Container>
  </div>
);

import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone142 from "./components/IPhone142";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-2)">
          <IPhone142 {...iPhone142Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iPhone142Data = {
    ellipse15: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/ellipse-15@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-49@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-50@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-51@2x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-52@2x.png",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-47@2x.png",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-48@2x.png",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-53@2x.png",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-54@2x.png",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-55@2x.png",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-56@2x.png",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-57@2x.png",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-58@2x.png",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-59@2x.png",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-61@2x.png",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-62@2x.png",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-63@2x.png",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-64@2x.png",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-66@2x.png",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-67@2x.png",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-39@2x.png",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-40@2x.png",
    vector25: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-41@2x.png",
    vector26: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-42@2x.png",
    vector27: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-43@2x.png",
    vector28: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-44@2x.png",
    vector29: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-45@2x.png",
    vector30: "https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c7db3441a0b50c231ec9b/img/vector-46@2x.png",
    text8: "تسجيل الدخول",
    text3: "اكتب اسمك:",
    inputType: "text",
    inputPlaceholder: "اكتب هنا...",
};


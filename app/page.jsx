import AnimateTextSection from "./components/AnimateTextSection/AnimateTextSection";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Mountain from "./components/Mountain/Mountain";
import WhatWeDid from "./components/WhatWeDid/WhatWeDid";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <WhoWeAre />
      <Mountain />
      <WhatWeDo />
      <AnimateTextSection />
      <WhatWeDid />
      <Contact />
    </>
  );
}

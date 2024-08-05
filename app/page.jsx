import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import TheRealMVP from "./components/TheRealMVP/TheRealMVP";
import WhatWeDid from "./components/WhatWeDid/WhatWeDid";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <WhoWeAre />
      <WhatWeDo />
      <TheRealMVP />
      <WhatWeDid />
      <Contact />
    </>
  );
}

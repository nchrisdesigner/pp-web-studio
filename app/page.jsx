import Benefits from "./components/Benefits/Benefits"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"

import ScrollableText from "./components/ScrollableText/ScrollableText"
import WhatWeDid from "./components/WhatWeDid/WhatWeDid"
import WhatWeDo from "./components/WhatWeDo/WhatWeDo"
import WhoWeAre from "./components/WhoWeAre/WhoWeAre"
import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <ReactLenis root>
      <Header />
      <ScrollableText />

      <WhoWeAre />
      <WhatWeDo />
      <Benefits />
      <WhatWeDid />
      <Contact />
    </ReactLenis>
  );
}

import Main from "../components/Main";
import Brand from "../sections/Brand";
import Hero from "../sections/Hero";
import Recent from "../sections/Recent";
import Top from "../sections/Top";

export default function Index() {
  return (
    <Main>
      <Hero />
      <Top />
      <Brand />
      <Recent />
    </Main>
  )
}

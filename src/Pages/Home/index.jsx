import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import HomeHero from "../../Component/Heros/Home-hero";
import PopularCourse from "../../Component/Course/PopularCourse";
import Feature from "../../Component/Features/Feature";
import Cta from "../../Component/Cta/Cta";
import Video from "../../Component/Video/Video";
import Footer from "../../Component/Footer/Footer";
import GotoTop from "../../Component/GotoTop";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/logo.png" joinBtn={true} />
        <HomeHero />
        <PopularCourse course={true} heading={true} />
        <Feature />
        <Cta />
        <Video />
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home;

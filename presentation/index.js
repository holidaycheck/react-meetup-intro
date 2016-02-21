// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Slide,
    Spectacle
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    city: require("../assets/city.jpg"),
    logo: require("../assets/logo-hc.png"),
    testing: require("../assets/vader.jpg"),
    stack: require("../assets/tech-stack.jpg"),
    collaboration: require("../assets/collaboration.jpg"),
    tooling: require("../assets/tooling.jpg"),
    jenkins: require("../assets/jenkins-docker.png"),
    mesos: require("../assets/mesos.png"),
    release: require("../assets/release.png"),
    uncleSam: require("../assets/uncle-sam.png")
};

preloader(images);

const theme = createTheme({
    primary: "#0058A3",
    secondary: "#5497D0"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Image src={images.logo.replace("/", "")} margin="0px auto 40px" width="190px" height="auto"/>
                        <Link href="http://www.meetup.com/ReactJS-Meetup-Munich/events/228867061/">
                            <Heading size={1} fit caps textColor="tertiary">
                                ReactJS Munich Meetup
                            </Heading>
                        </Link>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={2} caps textColor="tertiary" textFont="primary">
                            About me
                        </Heading>
                        <List width="200px" margin="20px auto">
                            <ListItem textColor="tertiary">Sergej Leibenzon</ListItem>
                            <ListItem textColor="tertiary">Software Engineer at HolidayCheck</ListItem>
                            <ListItem textColor="tertiary">JavaScript enthusiast</ListItem>
                            <ListItem textColor="tertiary">@leib985</ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
                        <Appear fid="1">
                            <Heading size={1} caps fit textColor="secondary">
                                1 Mono Repository
                            </Heading>
                        </Appear>
                        <Appear fid="2">
                            <Heading size={1} caps fit textColor="tertiary">
                                3 International Locations
                            </Heading>
                        </Appear>
                        <Appear fid="3">
                            <Heading size={1} caps fit textColor="secondary">
                                45 Developers
                            </Heading>
                        </Appear>
                        <Appear fid="4">
                            <Heading size={1} caps fit textColor="tertiary">
                                1500 Merged pull-requests
                            </Heading>
                        </Appear>
                        <Appear fid="5">
                            <Heading size={1} caps fit textColor="secondary">
                                3000 Unit tests
                            </Heading>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.stack.replace("/", "")} bgDarken={0.75}>
                        <Heading size={1} caps fit textColor="tertiary">
                            Stack
                        </Heading>
                        <Appear>
                            <Heading size={1} caps textColor="tertiary">
                                ReactJS, Fluxible, Isomorphic, ES6
                            </Heading>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.testing.replace("/", "")} bgDarken={0.75}>
                        <Heading caps fit>Testing-Chain</Heading>
                        <Layout>
                            <Fill>
                                <Heading size={6} caps textColor="secondary" bgColor="white" margin={10}>
                                    Unit
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={6} caps textColor="secondary" bgColor="white" margin={10}>
                                    Functional
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={6} caps textColor="secondary" bgColor="white" margin={10}>
                                    E2E
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={6} caps textColor="secondary" bgColor="white" margin={10}>
                                    Visual
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={6} caps textColor="secondary" bgColor="white" margin={10}>
                                    Regression
                                </Heading>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.collaboration.replace("/", "")} bgDarken={0.75}>
                        <Heading size={2} caps fit textColor="tertiary">
                            Better collaboration
                        </Heading>
                        <Heading size={2} caps textColor="secondary">
                            through
                        </Heading>
                        <Heading size={2} caps fit textColor="tertiary">
                            Better quality
                        </Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.tooling.replace("/", "")} bgDarken={0.85}>
                        <Heading size={2} caps fit textColor="tertiary">
                            Automate the tooling
                        </Heading>
                        <Heading size={2} fit caps textColor="tertiary" margin="20px auto">
                            Continious Deployment to staging for every commit on each branch
                        </Heading>
                        <Image height="180px" width="auto" src={images.jenkins.replace("/", "")}/>
                        <Image height="180px" width="auto" src={images.mesos.replace("/", "")}/>
                    </Slide>

                    <Slide transition={["slide"]} bgImage={images.release.replace("/", "")} bgDarken={0.65}>
                        <Heading size={2} caps fit textColor="tertiary">
                            Release to production
                        </Heading>

                        <Heading size={2} fit caps textColor="secondary">
                            With one click
                        </Heading>

                        <Heading size={2} fit caps textColor="tertiary">
                            Multiple times a day
                        </Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Heading size={2} caps fit textColor="tertiary">
                            Do you want to know more?
                        </Heading>

                        <Image src={images.uncleSam.replace("/", "")} margin="30px auto 20px" width="375px"/>

                        <Heading size={5} caps textColor="tertiary" margin="20px auto">
                            <Link href="https://github.com/holidaycheck/jobs" textColor="secondary">
                                Join us!
                            </Link>
                        </Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}

import "./index.css"
import {Title} from "./Title";
import {Layout} from "./Layout";
import {Options} from "./Options"
import {Buttons} from "./Buttons";

export const Navbar = () => <Layout>
    <Title/>
    <Buttons.Collapse/>
    <Options.Container>
        <Options.Home/>
        <Options.Menu/>
        <Options.Pricing/>
        <Options.Cart/>
    </Options.Container>
    <Buttons.Container>
        <Buttons.Login/>
        <Buttons.Logout/>
    </Buttons.Container>
</Layout>

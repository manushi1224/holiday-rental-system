import React, { Fragment } from "react";
import Footer from "./Footer";
import IconNav from "./IconNav";
import Cards from "../components/Card";
import { Main } from "./Main";
import { Temp } from "./Temp";
import { tempVirti } from './tempVirti'
export default function Home() {
    return (
        <Fragment className="main">
            <IconNav />
            <Cards />
            <Main />
            <Temp />
            <tempVirti/>
            <Footer />
        </Fragment>
    )
}
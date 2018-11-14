import {cn} from "@bem-react/classname";
import {Registry, withRegistry} from "@bem-react/di";
import Header from "../Header/Header@mobile";
import App from "./App";
import "./App.scss";

const cnApp = cn("Page");

const registry = new Registry({id: cnApp()});
registry.set(cnApp('Header'), Header);

export const AppMobile = withRegistry(registry)(App);
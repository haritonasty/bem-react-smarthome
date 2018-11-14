import {cn} from "@bem-react/classname";
import {Registry, withRegistry} from "@bem-react/di";
import Header from "../Header/Header@desktop";
import App from "./App";
import "./App.scss";

const cnApp = cn("Page");

const registry = new Registry({id: cnApp()});
registry.set(cnApp('Header'), Header);

export const AppDesktop = withRegistry(registry)(App);
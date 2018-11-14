import { withBemMod } from "@bem-react/core";
import { INavItem } from "../index";

export const NavItemActive = withBemMod<INavItem>("Nav-Item", { active: true });

import { generatePath } from "react-router-dom";

interface  SwitchRoutes {
    root: string;
    detail: string;
}

export const SwitchRoutes: SwitchRoutes = {
    root: '/',
    detail: '/detail/:login',
}

interface Routes extends Omit<SwitchRoutes, "detail">{
    detail: (login: string) => string
}

export const routes: Routes = {
    ...SwitchRoutes,
    detail: (login: string) => generatePath(SwitchRoutes.detail, { login })
}
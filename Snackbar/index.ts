import RSnackbar, {
    ISnackbarProps as RSnackbarProps,
    ISnackbarState as RSnackbarState
} from "preact-material-components/esm/Snackbar";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export interface ISnackbarProps extends RSnackbarProps {
}

export interface ISnackbarState extends RSnackbarState {
}

export class Snackbar extends RSnackbar {
    public readonly styles = [
        {style, id: "snackbar"}
    ];

    public componentWillMount() {
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        super.componentWillUnmount();
        unload_styles(this.styles);
    }
}

// noinspection JSUnusedGlobalSymbols
export default Snackbar;

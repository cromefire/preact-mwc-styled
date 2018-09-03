import RIconButton, {
    IIconButtonProps as RIconButtonProps,
    IIconButtonState as RIconButtonState
} from "preact-material-components/esm/IconButton";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export interface IIconButtonProps extends RIconButtonProps {
}

export interface IIconButtonState extends RIconButtonState {
}

export class IconButton extends RIconButton {
    public readonly styles = [
        {style, id: "icon-button"}
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
export default IconButton;

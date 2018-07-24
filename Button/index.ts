import PButton from "preact-material-components/Button/Button";
import {load_styles, unload_styles} from "../util/style";
import button_style from "./button.scss";

export class Button extends PButton {
    public readonly styles = [
        {style: button_style, id: "button"}
    ];

    public componentWillMount() {
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        unload_styles(this.styles);
    }
}

// noinspection JSUnusedGlobalSymbols
export default Button;

import PButton from "preact-material-components/Button";
import {load_styles, unload_styles} from "../util/style";
import button_style from "./button.scss";

export class Button extends PButton {
    public componentWillMount() {
        load_styles(
            [
                {style: button_style, id: "button"}
            ]
        );
    }

    public componentWillUnmount() {
        unload_styles(
            [
                {style: button_style, id: "button"}
            ]
        );
    }
}

// noinspection JSUnusedGlobalSymbols
export default Button;

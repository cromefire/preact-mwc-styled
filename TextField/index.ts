import PTextField, {ITextFieldProps} from "preact-material-components/esm/TextField";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export class TextField extends PTextField {
    public readonly styles = [
        {style, id: "textfield"}
    ];

    public componentWillMount() {
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        unload_styles(this.styles);
    }

    public render(props: ITextFieldProps) {
        if (props.helperText) {
            if (props.className) {
                props.className += " preact-mwc-styled--text-with-helper";
            } else {
                props.className = "preact-mwc-styled--text-with-helper";
            }
        }
        return super.render(props);
    }
}

// noinspection JSUnusedGlobalSymbols
export default TextField;

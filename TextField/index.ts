import PTextField, {ITextFieldProps, ITextFieldState} from "preact-material-components/esm/TextField";
import {load_styles, unload_styles} from "../util/style";
import tf_style from "./textfield.scss";

export class TextField extends PTextField {
    public readonly styles = [
        {style: tf_style, id: "textfield"}
    ];

    public componentWillMount() {
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        unload_styles(this.styles);
    }

    // TODO: Remove 'JSX.HTMLAttributes' when preact-material-components@1.5.1-alpha2 is out
    public render(props: ITextFieldProps & JSX.HTMLAttributes, state: ITextFieldState) {
        if (props.helperText) {
            if (props.className) {
                props.className += " preact-mwc-styled--text-with-helper";
            } else {
                props.className = "preact-mwc-styled--text-with-helper";
            }
        }
        return super.render(props, state);
    }
}

// noinspection JSUnusedGlobalSymbols
export default TextField;

import PTextField from "preact-material-components/TextField/TextField";
import {load_styles, unload_styles} from "../util/style";
import tf_style from "./textfield.scss";

export class TextField extends PTextField {
    public readonly styles = [
        {style: tf_style, id: "textfield"}
    ];

    public componentWillMount() {
        super.componentWillMount();
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        super.componentWillUnmount();
        unload_styles(this.styles);
    }

    public materialDom(allprops) {
        if (allprops.helperText) {
            if (allprops.className) {
                allprops.className += " preact-mwc-styled--text-with-helper";
            } else {
                allprops.className = "preact-mwc-styled--text-with-helper";
            }
        }
        return super.materialDom(allprops);
    }
}

// noinspection JSUnusedGlobalSymbols
export default TextField;

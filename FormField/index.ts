import PFormField from "preact-material-components/esm/FormField";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export class FormField extends PFormField {
    public readonly styles = [
        {style, id: "form-field"}
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
export default FormField;

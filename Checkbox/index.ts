import PCheckbox from "preact-material-components/esm/Checkbox";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export class Checkbox extends PCheckbox {
    public readonly styles = [
        {style, id: "checkbox"}
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
export default Checkbox;

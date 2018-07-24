import PTextField from "preact-material-components/TextField/TextField";
import {load_styles} from "../util/style";
import tf_style from "./textfield.scss";

export class TextField extends PTextField {
    public componentWillMount() {
        load_styles(
            [
                {style: tf_style, id: "textfield"}
            ]
        );
    }

    public componentWillUnmount() {
        load_styles(
            [
                {style: tf_style, id: "textfield"}
            ]
        );
    }
}

// noinspection JSUnusedGlobalSymbols
export default TextField;

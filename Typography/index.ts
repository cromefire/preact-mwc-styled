import PTypography from "preact-material-components/esm/Typography";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export class Typography extends PTypography {
    public readonly styles = [
        {style, id: "typography"}
    ];

    public componentWillMount() {
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        unload_styles(this.styles);
    }
}

// noinspection JSUnusedGlobalSymbols
export default Typography;

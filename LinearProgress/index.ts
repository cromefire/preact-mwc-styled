import PLinearProgress from "preact-material-components/esm/LinearProgress";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export class LinearProgress extends PLinearProgress {
    public readonly styles = [
        {style, id: "progress"}
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
export default LinearProgress;

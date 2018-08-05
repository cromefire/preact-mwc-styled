import PLinearProgress from "preact-material-components/ts/LinearProgress";
import {load_styles, unload_styles} from "../util/style";
import progress_style from "./progress.scss";

export class LinearProgress extends PLinearProgress {
    public readonly styles = [
        {style: progress_style, id: "progress"}
    ];

    public componentWillMount() {
        super.componentWillMount();
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        super.componentWillUnmount();
        unload_styles(this.styles);
    }
}

// noinspection JSUnusedGlobalSymbols
export default LinearProgress;

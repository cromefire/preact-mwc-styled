import PLinearProgress from "preact-material-components/LinearProgress";
import {load_styles, unload_styles} from "../util/style";
import progress_style from "./progress.scss";

export class LinearProgress extends PLinearProgress {
    public componentWillMount() {
        load_styles(
            [
                {style: progress_style, id: "progress"}
            ]
        );
    }

    public componentWillUnmount() {
        unload_styles(
            [
                {style: progress_style, id: "progress"}
            ]
        );
    }
}

// noinspection JSUnusedGlobalSymbols
export default LinearProgress;

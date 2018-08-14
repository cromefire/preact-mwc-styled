import PCard from "preact-material-components/esm/Card";
import {load_styles, unload_styles} from "../util/style";
import style from "./card.scss";

export class Card extends PCard {
    public readonly styles = [
        {style, id: "card"}
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
export default Card;

import PCard from "preact-material-components/ts/Card";
import {load_styles, unload_styles} from "../util/style";
import card_style from "./card.scss";

export class Card extends PCard {
    public readonly styles = [
        {style: card_style, id: "card"}
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
export default Card;

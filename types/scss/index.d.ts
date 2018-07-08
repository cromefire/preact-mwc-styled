declare module "*.scss" {
    const style: string | { use?: () => void, unuse?: () => void };
    // noinspection JSUnusedGlobalSymbols
    export default style;
}

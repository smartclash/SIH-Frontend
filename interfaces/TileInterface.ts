interface Callout {
    text: string;
    link: string;
}

export default interface TileInterface {
    heading: string;
    primary: Callout;
    secondary?: Callout;
}

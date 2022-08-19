interface Callout {
    text: string
    link: string
}

export default interface ITile {
    heading: string
    primary: Callout
    secondary: Callout
}

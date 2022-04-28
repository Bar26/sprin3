export function ShortenTxt({ text }) {

    return <span className="body">{text.substring(0,100)}</span>
}
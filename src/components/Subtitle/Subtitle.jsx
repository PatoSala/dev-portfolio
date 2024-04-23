import './Subtitle.css'

export default function Subtitle({ children, style }) {
    return (
        <h2 className="subtitle" style={style}>{children}</h2>
    )
}
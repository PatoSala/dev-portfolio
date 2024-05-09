import './SquareButton.css'

export default function SquareButton({ text, onClick }) {
    return (
        <button className="square-button" onClick={onClick}>{text}</button>
    )
}
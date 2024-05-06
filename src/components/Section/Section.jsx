import './Section.css'

export default function Section({ children, bgColor, height, style }) {
    return (
        <section className="section" style={{ background: bgColor, height: height, ...style }}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
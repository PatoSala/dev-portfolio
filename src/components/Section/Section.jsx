import './Section.css'

export default function Section({ children, bgColor, height }) {
    return (
        <section className="section" style={{ background: bgColor, height: height }}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
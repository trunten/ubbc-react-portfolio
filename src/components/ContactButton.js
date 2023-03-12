export default function ContactButton(props) {
    return (
        <li className="contact-button">
            <a href={props.link} target="_blank" rel="noreferrer"> <i className={`fa fa-${props.icon || props.text}`} aria-hidden="true" text={props.text}></i> </a>
        </li>
    );
}
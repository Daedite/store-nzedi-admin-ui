export default function NavigatorTab(props) {
    return (
        <>
            {props.active ?
                <a className="active" href={props.url}><i> {props.icon}</i>{props.name}</a> :
                <a  href={props.url}><i> {props.icon}</i>{props.name}</a>
            }

        </>
    )
}
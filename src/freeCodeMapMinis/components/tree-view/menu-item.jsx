


export default function MenuItem({ item }) {

    return <li>
        <p>{item.label}</p>

        {
            item && item.children && item.children.length > 0 &&
            <ul>
                {item.children.map((child, index) => <MenuItem key={index} item={child} />)}
            </ul>
        }
    </li>
}

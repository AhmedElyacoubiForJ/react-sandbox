import MenuList from "./menu-list"


export default function MenuItem({ item }) {

    return <li>
        <p>{item.label}</p>

        {
            item && item.children && item.children.length > 0 &&
            <ul>
                {item.children.map((child, index) => <MenuList key={index} list={item.children} />)}
            </ul>
        }
    </li>
}

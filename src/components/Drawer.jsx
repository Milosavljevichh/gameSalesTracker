import '../styles/drawer.css'

export default function Drawer(){
    const items = [
        {
            name:'General',
            sectionItems: [
                {
                    label:'Theme'
                },
                {
                    label:'Toggle Sale'
                },
            ]
        },
        {
            name:'Filter By',
            sectionItems: [
                {
                    label:'Sale %'
                },
                {
                    label:'Price'
                },
                {
                    label:'Reviews'
                },
            ]
        }
    ]
    
    return(
        <aside id="drawer">
            {items.map(item=>(
                <ul>
                    <h4>{item.name}</h4>
                    {item.sectionItems.map(button=>(
                        <li>
                            <button>
                                {button.label}
                            </button>
                        </li>
                    ))}
                </ul>
            ))}
        </aside>
    )
}
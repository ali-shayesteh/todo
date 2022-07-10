import Item from "./Item"
const Container = ({classType, items}) => {
    return(
        <div className={`container ${classType}`}>
            <p>{classType}</p>
            <ul>
                {
                    items.map((item, index) => {
                        return(
                            <Item key={index} name={item.name} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Container
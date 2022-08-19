import Item from "./Item"
const Container = ({name, classType, items, handleDel, handleProperty}) => {
    return(
        <div className={`container ${classType}`}>
            <h4>{items.length > 0 && name}</h4>
            <div className="task-list">
                {
                    items.map((item, index) => {
                        return(
                            <Item
                             key={item.id}
                             task={item}
                             handleDel={handleDel}
                             handleProperty={handleProperty}
                             classType={classType}
                             />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Container
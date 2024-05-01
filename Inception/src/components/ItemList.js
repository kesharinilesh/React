const ItemList = ({items}) => {
    console.log(items);
    return <div className="text-left font-semibold">
            {items.map((item)=>(
            <div className="py-2 border-b-2" key={item.card.info.id}>
                <div className="m-2">
                    <span>{item.card.info.name}</span><br/>
                    <span>Rs. {item.card.info.price ? item.card.info.price / 100 : 349}</span>
                <p className="text-xs pt-2 ">{item.card.info.description}</p>
                </div>
            </div>))}
    </div>
}

export default ItemList;
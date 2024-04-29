const RestaurantCategory = ({data}) => {
    console.log(data.title)
    return <div className="my-4 p-2 mx-auto w-6/12 text-gray-800 shadow-md flex justify-between bg-slate-50 font-bold text-lg">
        <span className="px-6">{data.title} ({data.itemCards.length})</span>
        <span>🔻</span>
    </div>
}
export default RestaurantCategory;
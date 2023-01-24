import { useState } from "react"

function useShowItem(){
    const [showItem, setShowItem] = useState({})

    const handleShowItem = (e) => {
        let title = e.target.getAttribute("name")
        let status = showItem[title]
        setShowItem({
            ...showItem, [title]: !status
        })
    }

    return [showItem, handleShowItem]


}

export default useShowItem
import React from "react"
import Avatar from "./Avatar" // 다른 컴포넌트를 가져다 쓰는 것도 가능

export default function Profile({ image, name, title, isNew }) {
    return (
        <div className="profile">
            <Avatar image={image} isNew={isNew}/>
            <h2>{name}</h2>
            <p>{title}</p>
        </div>
    )
}

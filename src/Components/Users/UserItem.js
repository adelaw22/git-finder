import React from 'react'

const UserItem = (props) => {


    const { login, avatar_url, html_url } = props.user;

    return (
        <div className="card">
            <img src={avatar_url} alt="" className="round-img" />
            <h3 style={{ margin: "16px" }}>{login}</h3>

            <div>
                <a href={html_url} className="btn">more</a>
            </div>
        </div>
    )
}

export default UserItem;

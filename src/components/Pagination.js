import React from "react";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button className="btn-pagination" onClick={onLeftClick}><div className="seta-left">⬅</div></button>
            <div>{page} of {totalPages}</div>
            <button className="btn-pagination" onClick={onRightClick}><div className="seta-right">➡</div></button>
        </div>
    )
}

export default Pagination;

import React from 'react';

const List = (props) => {
    const { items, toggle, remove } = props;

    return (
        <ul>
            {items.map(item => {
                const { id, name, complete } = item;
                return (
                    <li key={id}>
                        <span onClick={() => toggle && toggle(id)} key={`span_${id}`} className={complete === true ? 'completed' : ''}>{name}</span>
                        <button onClick={() => remove(item)} key={`button_${id}`}>🗑</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List
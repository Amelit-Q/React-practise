import React, { useState } from 'react';

export const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (id) => {
    setActiveItem(id);
  };
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items && //проверка на null !
          items.map((t, id) => (
            <li
              className={activeItem === id ? 'active' : ''}
              onClick={() => onSelectItem(id)}
              key={id}>
              {t}
            </li>
          ))}
      </ul>
    </div>
  );
};

/* export class Categories extends React.Component {
  state = {
    activeItem: null,
  };

  onSelectItem = (id) => {
    return this.setState({
      activeItem: id,
    });
  };
  render() {
    const { onClick } = this.props;
    return (
      <div className="categories">
        <ul>
          <li className="active">Все</li>
          {this.props.items.map((t, id) => (
            <li
              className={this.state.activeItem === id ? 'active' : ''} //строка указывает на: если t(в методе map) активен, то применяется css стиль active
              key={id}
              onClick={() => this.onSelectItem(id)}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    );
  }
} */

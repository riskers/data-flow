import React from 'react'
import Loading from 'components/Loading'
import './style.css'

const List = props => {
  let {
    style,
    data: list,
    loading,
    error,
    onClickItem
  } = props

  let content

  if(loading) {
    content = <Loading />
  }else {
    content = list && list.map(e => {
      return <li key={e.id} styleName="item" onClick={() => {onClickItem(e)}}>
        <img src={e.avatar_url} styleName="pic"/>
        {e.login}
      </li>
    })
  }

  if(error) {
    content = <span>{error}</span>
  }

  return <div style={style}>
    <header styleName="header">
      <h3 styleName="title">{props.title}</h3>
      <div styleName="links">
        <a href="javascript:void(0)" styleName="link"> &lt; </a>
        <a href="javascript:void(0)" styleName="link"> &gt; </a>
      </div>
    </header>
    <ul styleName="list">
      {content}
    </ul>
  </div>
}

List.defaultProps = {
  onClickItem: () => {}
}

export default List
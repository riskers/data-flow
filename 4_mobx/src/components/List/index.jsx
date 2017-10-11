import React from 'react'
import Loading from 'components/Loading'
import './style.css'

class List extends React.Component{

  static defaultProps = {
    icon: '',
    onClickItem: () => {},
    onClickPrev: () => {},
    onClickNext: () => {}
  }

  constructor(props) {
    super(props)
  }

  render() {
    let {
      title,
      style,
      data: list,
      loading,
      error,
      onClickItem,
      onClickPrev,
      onClickNext
    } = this.props

    let content

    if(loading) {
      content = <Loading />
    }else {
      if(list.length == 0) {
        content = <span>None</span>
      }else{
        content = list.map(e => {
          return <li key={e.id} styleName="item" onClick={() => {onClickItem(e)}}>
            <img src={e.avatar_url} styleName="pic"/>
            {e.login}
            <span styleName="icon">{this.props.icon}</span>
          </li>
        })
      }
    }

    if(error) {
      content = <span>{error}</span>
    }

    return <div style={style}>
      <header styleName="header">
        <h3 styleName="title">{title}</h3>
        <div styleName="links">
          <a href="javascript:void(0)" styleName="link" onClick={onClickPrev}> &lt; </a>
          <a href="javascript:void(0)" styleName="link" onClick={onClickNext}> &gt; </a>
        </div>
      </header>
      <ul styleName="list">
        {content}
      </ul>
    </div>
  }
}

export default List
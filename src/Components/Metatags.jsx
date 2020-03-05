import React from 'react';
import MetaTags from 'react-meta-tags';

class Metatags extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="wrapper">
        <MetaTags>
          <title>{this.props.item.title}</title>
          <meta name="description" content="{this.props.item.description}" />
          <meta property="og:title" content="{this.props.item.title}" />
        </MetaTags>
      </div>
    )
  }
}

export default Metatags
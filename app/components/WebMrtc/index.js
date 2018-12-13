// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

type Props = {
  webMrtcObj: object
};

export default class WebMrtc extends React.PureComponent<Props> {
  constructor(...args) {
    super(...args);

    this.state = {
      name: 'huziheng'
    };
  }

  render() {
    const { webMrtcObj } = this.props;
    const { name } = this.state;
    console.log(this.props);
    return (
      <div>
        <div>
          <Link to={routes.HOME}>BACK</Link>
        </div>
        <div className="fh">name:{name}</div>
        <div>{JSON.stringify(webMrtcObj)}</div>
      </div>
    );
  }
}

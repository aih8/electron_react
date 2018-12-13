import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WebMrtc from '../components/WebMrtc';
import * as WebMrtcActions from '../actions/web_mrtc';

function mapStateToProps(state) {
  console.log('---->', state);
  return {
    webMrtcObj: state.web_mrtc
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(WebMrtcActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebMrtc);

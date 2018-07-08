import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

// components
import Spinner from "../../common/Spinner";
import Icon from "../../common/Icon";

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

class EventMap extends Component {
  state = {
    coords: this.props.coords
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.coords !== this.props.coords) {
      this.setState({ coords: nextProps.coords });
    }
  }
  render() {
    const zoom = 15;
    const { coords } = this.props;
    if (this.props.coords === undefined) {
      return <Spinner />;
    } else {
      return (
        <div className="eventMap">
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
            center={coords}
            defaultZoom={zoom}
          >
            <Icon name="location" lat={coords.lat} lng={coords.lng} />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

EventMap.propTypes = {
  coords: PropTypes.object
};

export default EventMap;

import React from 'react';

class EvictionMap extends React.Component {
  state = {
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
  };

  componentDidMount() {
    this.updateWindowDimensions.bind(this);
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.updateWindowDimensions.bind(this),
    );
  }

  updateWindowDimensions() {
    const w = `${window.innerWidth}px`;
    const h = `${window.innerHeight}px`;
    this.setState({ width: w, height: h });
  }

  render() {
    const { width, height } = this.state;
    return (
      <>
        <div
          className="eviction-map"
          style={{ top: '0', position: 'fixed', zIndex: -1 }}
        >
          <embed
            src="https://esta.bli.sh/viewmap/5d2fa039948dd24c23ea753d"
            width={width}
            height={height}
            style={{pointerEvents:'all'}}
          />
        </div>
      </>
    );
  }
}

export default EvictionMap;

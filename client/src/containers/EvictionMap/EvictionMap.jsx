import React from 'react';

class EvictionMap extends React.Component {
  state = {
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight - 30}px`,
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
    const h = `${window.innerHeight - 30}px`;
    this.setState({ width: w, height: h });
  }

  render() {
    const { width, height } = this.state;
    return (
      <>
        <div
          className="eviction-map"
          style={{ top: '20px', position: 'fixed', zIndex: -1 }}
        >
          <embed
            src="https://esta.bli.sh/viewmap/5d2fa039948dd24c23ea753d"
            width={width}
            height={height}
          />
        </div>
      </>
    );
  }
}

export default EvictionMap;

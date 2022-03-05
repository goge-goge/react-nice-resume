import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const starknetpic = "images/" + this.props.data.image;
    const nftflowpic = "images/" + this.props.data.logo;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={starknetpic}
                alt="StarkNet"
              />
              <img
                className="profile-pic"
                src={nftflowpic}
                alt="NFTflow"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About StarkNet</h2>

              <p>{bio}</p>
              <h2>About NFTflow</h2>
              <p>
                NFTflow's mission is to become the primary issuer of NFT vault tokens, allowing anyone to trade & invest in NFT markets without needing the underlying knowledge and expertise required when investing in individual assets. By doing so, NFTflow will function as a black hole for NFT assets.
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

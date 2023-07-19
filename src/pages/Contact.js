import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import bgImg from "../images/banner4.png";
import GoogleMapReact from "google-map-react";
import { IconContext } from "react-icons";
import { TiLocation } from "react-icons/ti";
import MAP_API_KEY from "../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 20px;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Col = styled.div`
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
  color: #333;
  margin: 12px 0;
`;

const MapMarker = styled.div`
  color: #333;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const bannerInfo = {
  title: "聯絡 FLORA",
  subTitle: "",
  img: bgImg,
};

const contactInfo = {
  text1: "台南市北區東豐路255號",
  text2:
    "1F., No. 255, Dongfeng Rd., North Dist., Tainan City 704 , Taiwan (R.O.C.)",
  text3: "營業時間 :",
  text4: "MON - SAT 11: 00 - 21:00 /  SUN 11:00 - 19:00",
  text5: "( 06 ) - 2370381",
};

function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const defaultProps = {
    center: {
      lat: 23.0031338,
      lng: 120.219318,
    },
    zoom: 16,
  };
  return (
    <>
      <Banner {...bannerInfo} />
      <Container>
        <Row>
          <Col>
            <div style={{ height: "50vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: MAP_API_KEY,
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <MapMarker lat={23.0031338} lng={120.219318}>
                  <IconContext.Provider value={{ color: "red", size: "20" }}>
                    <TiLocation />
                  </IconContext.Provider>
                  FLORA
                </MapMarker>
              </GoogleMapReact>
            </div>
          </Col>
          <Col>
            <TextWrapper>
              <Content>{contactInfo.text1}</Content>
              <Content>{contactInfo.text2}</Content>
              <Content>{contactInfo.text3}</Content>
              <Content>{contactInfo.text4}</Content>
              <Content>{contactInfo.text5}</Content>
            </TextWrapper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;

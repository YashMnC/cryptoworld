import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useGetCryptoExchangesQuery } from "../Services/cryptoExchangesApi";
import { Collapse, Row, Col, Typography, Avatar, Card } from "antd";
import millify from "millify";
import { useGetCryptoDetailsQuery } from "../Services/cryptoApi";
import { SelectOutlined, LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;
const { Panel } = Collapse;

const check = (data) => (data == null ? "Not available" : data);

const Exchanges = () => {
  const { data: cryptoExchanges, isFetching: isFetchingExchanges } =
    useGetCryptoExchangesQuery();
  const { data: cryptoData, isFetching: isFetchingData } =
    useGetCryptoDetailsQuery("Qwsogvtv82FCd");

  if (isFetchingExchanges || isFetchingData) return <Loader />;

  return (
    <>
      <Row>
        <Col sm={6} lg={6} xs={0}>
          Exchanges
        </Col>
        <Col sm={6} lg={6} xs={0}>
          24h Trade Volume
        </Col>
        <Col sm={6} lg={6} xs={0}>
          Headquarters
        </Col>
        <Col sm={6} lg={6} xs={0}>
          Year Established
        </Col>
      </Row>
      {cryptoExchanges.map((exchange) => (
        <Col span={24}>
          <Card>
            <Panel
              key={exchange.id}
              showArrow={false}
              header={
                <Row key={exchange.trust_score_rank}>
                  <Col xs={24} sm={6} lg={6}>
                    <Row>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>
                      </Text>

                      <Avatar className="exchange-image" src={exchange.image} />

                      <Col xs={6} sm={0} lg={0}>
                        Exchange :
                      </Col>
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                      <Text>
                        <a href={exchange.url} target="_blank">
                          <LinkOutlined />{" "}
                        </a>
                      </Text>
                    </Row>
                  </Col>

                  <Col xs={24} sm={0} lg={0}>
                    24h Trade Volume :
                  </Col>
                  <Col xs={24} sm={6} lg={6}>
                    $
                    {millify(
                      exchange.trade_volume_24h_btc *
                        cryptoData?.data?.coin?.price
                    )}
                  </Col>

                  <Col xs={24} sm={0} lg={0}>
                    Headquarters :
                  </Col>
                  <Col xs={24} sm={6} lg={6}>
                    {check(exchange.country)}
                  </Col>

                  <Col xs={24} sm={0} lg={0}>
                    Year Established :
                  </Col>
                  <Col xs={24} sm={6} lg={6}>
                    {check(exchange.year_established)}
                  </Col>
                </Row>
              }
            ></Panel>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Exchanges;

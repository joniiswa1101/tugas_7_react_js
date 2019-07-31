import React, { Component } from 'react';
import { Container, Row, Col, Media, Alert, Badge, Button, Breadcrumb, ButtonGroup, Card, CardGroup } from "react-bootstrap";

class App extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">Website React Bootstrap</Alert>
          </Col>
          <Col>
          </Col>
          <Col>
            <ButtonGroup className="mr-2" aria-label="First Group">
              <Button variant="primary">
                Notification <Badge variant="light">9</Badge>
              </Button>
              <Button variant="primary">
                Message <Badge variant="light">19</Badge>
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
          <Media>
            <img
              width={24}
              height={24}
              classname="mr-3"
              src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
              alt="Andreas"
            />
            <Media.Body>
              <h5>
                Andreas
              </h5>
            </Media.Body>
          </Media>
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs lg="4">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <CardGroup>
                <Card style={{width: "150px"}}>
                  <Card.Img
                    variant="top"
                    src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
                  />
                  <Card.Body>
                    <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
                    <Card.Text>
                      Godin sekarang menjadi pemaian Uruguay dengan caps terbanyak setelah membantu negaranya melibas Thailand di final Piala Tiongkok. Diego Goding boleh berbangga setelah resmi menjadi
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>

                <Card style={{width: "150px"}}>
                  <Card.Img
                    variant="top"
                    src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  />
                  <Card.Body>
                    <Card.Title>Neymar Bahas Kontrak Baru  di Paris Saint-Germain</Card.Title>
                    <Card.Text>
                      Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Perancis, demikian kata ayahnya.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>

                <Card style={{width: "150px"}}>
                  <Card.Img
                    variant="top"
                    src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  />
                  <Card.Body>
                    <Card.Title>Inggris Mau Jadi Tim Terbaik Dunia</Card.Title>
                    <Card.Text>
                      Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkeley merasa Inggris sudah di jalur yang benar untuk bisa menjadi tim terbaik di dunia degan banyaknya talenta yang muncul sekarang ini.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>

                <Card style={{width: "150px"}}>
                  <Card.Img
                    variant="top"
                    src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  />
                  <Card.Body>
                    <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timans Indonesia U-23 Tetap Bagus</Card.Title>
                    <Card.Text>
                      Gelandang tim nasional (Timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalama U-2. Kedua tim akan bentrok pada laga pamungkas Grup K.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>

            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;

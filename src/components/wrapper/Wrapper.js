import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './Wrapper.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/img_curtain/title_top.png';
// import img1 from '../../assets/img_curtain/ads1.jpg';
class Wrapper extends Component {


   render(){
        let img1 = 'https://theme.hstatic.net/1000395000/1000519184/14/ads-2-1.jpg?v=489';
       return (
            <Container className='container mt-5'>
                <Row>
                    <Col md = {12} style={{ textAlign: 'center' }}>
                        <img src={logo} alt="" />
                    </Col>
                    <Col  md = {12} style={{ textAlign: 'center' }}>
                        <h3 className="title">BỘ SƯU TẬP</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md = {6}>
                        <div className="effect-v5">
                        <a href="https://mancuon.vn/collections/man-cua-quan-coffee-ca-phe/products/man-cua-coffee-tra-sua"
                                        title="Màn Cửa Quán Cà Phê">
                            <img src={img1} alt="" />
                            <div class="actions">
                                <h3>MÀN CỬA VĂN PHÒNG</h3>
                                <span class="btn btn--primary">Mua ngay</span>
                            </div>
                            </a>
                        </div>
                    </Col>
                    <Col md = {6}>
                        <Row className="row mb-4">
                            <Col md = {6} className="man_cf">
                                <div class="grid__item">
                                    <a href="https://mancuon.vn/collections/man-cua-quan-coffee-ca-phe/products/man-cua-coffee-tra-sua"
                                        title="Màn Cửa Quán Cà Phê">
                                        <div class="effect-v5">
                                            <img src="//theme.hstatic.net/1000395000/1000519184/14/ads-2-2.jpg?v=489" alt=""/>
                                            <div class="actions">
                                                <h3>Màn Cửa Quán Cà Phê</h3>
                                                <span class="btn btn--primary">Mua ngay</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col md = {6} className="man_pt">
                                <div class="grid__item">
                                    <a href="//theme.hstatic.net/1000395000/1000519184/14/ads-2-3.jpg?v=489"
                                        title="Màn Cửa Phòng Tắm">
                                        <div class="effect-v5">
                                            <img src="//theme.hstatic.net/1000395000/1000519184/14/ads-2-3.jpg?v=489" alt="" />
                                            <div class="actions">
                                                <h3>Màn Cửa Phòng Tắm</h3>
                                                <span class="btn btn--primary">Mua ngay</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        </Row>
    
                        <Row >
                        <Col sm = {12}>
                                <div class="grid__item">
                                    <a href="https://mancuon.vn/collections/man-cua-quan-coffee-ca-phe/products/man-cua-coffee-tra-sua"
                                        title="Màn Cửa Nhà Hàng Quán Ăn">
                                        <div class="effect-v5">
                                            <img src="//theme.hstatic.net/1000395000/1000519184/14/ads-2-4.jpg?v=489" alt="" />
                                            <div class="actions">
                                                <h3>Màn Cửa Nhà Hàng Quán Ăn</h3>
                                                <span class="btn btn--primary">Mua ngay</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
            </Container>
           );
   }
}
export default Wrapper;
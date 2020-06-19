import React from 'react';
import {Row} from 'react-bootstrap';

const Adv = () => {
    return (
        <Row className="justify-content-center d-flex adv">
          <div className="contentBox text-right">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KwQvyYzcOJU" frameborder="0" title="advVideo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </div>
          <div className="contentBox">
            <h1>Таны реклам</h1>
            <p>Хүний тархийг булчин шөрмөстэй адилхан дасгалжуулах ёстой. Байнгын ном уншдаг хүмүүсийн тархины холбоосууд идэвхтэй, харин уншдаггүй бол тархины холбоосууд нь идэвхгүй унтаа байдалд ордог. Тархинаас ухаан, булчин шөрмөс, хоол боловсруулах зэрэг хүний биеийн бүх эрхтний системтэй холбоотой дохио санамжуудыг байнга түгээж байдаг бөгөөд энэ нь удаашраад эхлэхээр бие махбодын үйл ажиллагаа суларч, хөгширдөг. Хүн оюунаараа амьтнаас ялгаатай, үүнийхээ үр дүнгээр ч тэднээс илүү урт насалдаг аж. Мэдлэг боловсро</p>
            <button type="button" className="btn btn-primary" >SIGN UP FOR FREE</button>
          </div>
        </Row>
    )
}

export default Adv;
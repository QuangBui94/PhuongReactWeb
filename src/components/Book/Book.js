import React from 'react';

import BookPhoto from '../../assets/img/book.png';
import './Book.css';

const Book = () => (
    <div className="col-12 col-sm-6 col-md-3 mb-5">
        <div className="item-block">
            <div className="row">
                <img src={BookPhoto} className="col-12"/>
            </div>
            <div className="row">
                <p className="book-title col-12">GARY VEE by GARY VAYNER CHUCK</p>
            </div>
            <div className="row">
                <p className="col-12">by some one</p>
            </div>
        </div>
    </div>
)

export default Book;
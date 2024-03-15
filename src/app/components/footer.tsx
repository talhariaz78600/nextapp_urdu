import React from 'react';

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='pt-2 mt-3 ' style={{backgroundColor:"#004e98"}} >
            <div className="container footer" >
                <div className="row">
                    <div className="col-12 text-center " lang="ur">
                    <p  className='text-white  text-center footer-text-1'>   یہ پیج اور ویب سائٹ   حل تک.کام کے نام سے رجسٹرڈ ہے۔ ویب سائٹ اور پیج پر اپلوڈ ہونے والا مٹیرل رائٹر کی ذاتی آراء پر مبنی ہے ۔ اگر کسی مواد،  تصویر یا سرخی پر اعتراض ہوتو  ٹیم مینجمنٹ سے  رابطہ کر  سکتے ہیں </p>
                    </div>
                    <div className="col-12" lang="ur">
                    <p className='text-white text-center footer-text-2 mb-0'> &copy; {year}.All Rights Reserved  Design By Talha Riaz</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
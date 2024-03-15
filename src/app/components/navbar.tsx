"use client"
import Link from 'next/link';
import useBootstrap from './useBootstrap';
function Navbar() {
    useBootstrap();
    return (
        <div>
            <nav className="navbar navbar-expand-lg border" style={{ background: "#004e98" }} >
                <div className="container-fluid" style={{ background: "#004e98" }}>
                    <Link className="navbar-brand navbar-logo text-white urdu-text" style={{fontFamily:"Noto Nastaliq Urdu"}} href="/">
                        حل تک
                    </Link>
                    <span className="float-left navbar-toggler" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" aria-controls="navbarNav" data-bs-target="#navbarNav"><i className="fa-sharp fa-solid fa-bars mt-2 text-white" style={{ fontSize: "32px" }}></i></span>

                    <div className="collapse navbar-collapse m-0" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                            <li className="nav-item order-lg-last">
                                <Link className="nav-link active text-end text-white" href="/"> صفحہ اول</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-end text-white" href={`/education/${1}`}>تعلیم و تربیت</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-end text-white" href={`/ethics/1`}>اخلاقیات</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-end text-white" href={`/trade/1`}>تجارت</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-end text-white" href={`/food/1`}>خوراک</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-end text-white" href={`/department/1`}>معلومات پاکستانی شعبہ جات</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-end text-white" href={`/solutions/1`}>مسائل کاحل</Link>
                            </li>
                            <li className="nav-item order-lg-first">
                                <Link className="nav-link  text-end text-white" href={`/love/1`}>پیغام محبت سیریز</Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;

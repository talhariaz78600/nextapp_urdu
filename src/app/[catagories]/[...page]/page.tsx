import React from 'react';
import Image from 'next/image';
import { DataFetchFunction } from '@/app/components/types';
import Pagination from '@/app/components/pagination';
import Custom404 from '@/app/components/notfound';
import Link from 'next/link';
const datafetch: DataFetchFunction = async (i: string, l: string, n: string) => {
    if (n === "trade" || n === "education" || n === "ethics" || n === "department" || n === "solutions" || n === "food" || n === "love") {

        const response = await fetch(`https://usmanurdu.vercel.app/api/${n}/get${n}data?page=${i}&limit=${l}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'topic': n,
            },
        });

        const data = await response.json();
        return data;
    } else {

        return { finddata: [] }
    }

};

interface Department {
    _id: string;
    title: string;
    content: string;
    picture: string;
}

const Page = async (context: { params: { page?: string, catagories?: string } }) => {
    const { page, catagories } = context.params;
    const pageNumber = page || '1';
    const nameofpage: string = catagories || "education"
    const pageSize: number = 1;
    let titlepage:string=""
    if(nameofpage==="education"){
        titlepage="تعلیم و تربیت"
    }
    else if(nameofpage==="food"){
        titlepage="خوراک"
    }
    else if(nameofpage==="trade"){
        titlepage="تجارت"
    }else if(nameofpage==="department"){
        titlepage="معلومات پاکستانی شعبہ جات"
    }
    else if(nameofpage==="love"){
        titlepage="پیغام محبت سیریز"
    }else if(nameofpage==="solutions"){
        titlepage="مسائل کا حل"
    }else{
        titlepage="اخلاقیات"
    }
    const data: any = await datafetch(pageNumber, pageSize.toString(), nameofpage);
    let departments: Department[] = data.finddata;

    const maxContentLength: number = 205;
    return (
        <div>
            {departments.length > 0 ?
                <div>
                    <div className="container-fluid page">
                        <div className="row">
                            <div className="col-md-12 mt-4 border-top border-primary border-4 mb-3 bg-light">
                                <h2 className="heading">{titlepage}</h2>
                            </div>
                        </div>

                        <div className="row">
                            {departments.map((edudata) => (
                                <div key={edudata._id} className="col-md-12 textpart">
                                    <div className="textpart1 mt-2">
                                        <div className="row m-0">
                                            <div className="col-7 col-lg-8">
                                                <div className="content">
                                                    <Link href={`/${nameofpage}/Content/${edudata._id}`}>

                                                        <h4 className="text-primary subheading" style={{ cursor: 'pointer' }}>
                                                            {edudata.title}
                                                        </h4>
                                                    </Link>
                                                    <div className="paragraph" dangerouslySetInnerHTML={{ __html: edudata.content.length > maxContentLength ? `${edudata.content.substring(0, maxContentLength)}۔۔۔۔` : edudata.content }}></div>
                                                </div>
                                            </div>
                                            <div className="col-5 col-lg-4 picturepart">
                                                <Image
                                                    className='picture'
                                                    src={edudata.picture}
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="className">

                        <Pagination stoped={data.stop} pagelenght={pageSize} pageno={parseInt(pageNumber)} pagename={nameofpage} />
                    </div>
                </div> :
                <Custom404 />}
        </div>
    );
};

export default Page;

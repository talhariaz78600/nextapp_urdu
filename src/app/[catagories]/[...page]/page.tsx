import React from 'react';
import Image from 'next/image';
import { DataFetchFunction } from '@/app/components/types';
import Pagination from '@/app/components/pagination';
import Custom404 from '@/app/components/notfound';
import Head from 'next/head'
import Link from 'next/link';
// page.tsx (or any other file you are working on)
import { Metadata } from 'next';

export async function generateMetadata(context: { params: { page?: string, catagories?: string } }): Promise<Metadata> {
    const { page, catagories } = context.params;
    const nameofpage = catagories || 'education';
    let titlepage = '';
    let description = '';
  
    // Website name to append to each title
    const websiteName = ' | haltak';

    if (nameofpage === 'education') {
        titlepage = 'تعلیم و تربیت';
        description = 'تعلیم کے متعلق تازہ ترین مضامین اور معلومات۔ | Latest articles and information on education and upbringing.';
    } else if (nameofpage === 'food') {
        titlepage = 'خوراک';
        description = 'مزیدار کھانوں اور تراکیب کے بارے میں معلومات۔ | Information about delicious foods and recipes.';
    } else if (nameofpage === 'trade') {
        titlepage = 'تجارت';
        description = 'تجارتی مواقع اور تجاویز کے بارے میں جانیں۔ | Learn about trading opportunities and tips.';
    } else if (nameofpage === 'department') {
        titlepage = 'معلومات پاکستانی شعبہ جات';
        description = 'پاکستانی شعبہ جات کی معلومات اور تفصیلات۔ | Information and details about Pakistani departments.';
    } else if (nameofpage === 'love') {
        titlepage = 'پیغام محبت سیریز';
        description = 'محبت بھرے پیغامات اور کہانیاں۔ | Messages and stories full of love.';
    } else if (nameofpage === 'solutions') {
        titlepage = 'مسائل کا حل';
        description = 'مختلف مسائل کے عملی حل کے بارے میں جانیں۔ | Learn about practical solutions to various problems.';
    } else {
        titlepage = 'اخلاقیات';
        description = 'اخلاقی تعلیمات اور مضامین پر مبنی مواد۔ | Content based on ethical teachings and articles.';
    }

    // Append website name to the title
    titlepage += websiteName;

    return {
        title: titlepage,
        description: description,
    };
}

const datafetch: DataFetchFunction = async (i: string, l: string, n: string) => {
    if (n === "trade" || n === "education" || n === "ethics" || n === "department" || n === "solutions" || n === "food" || n === "love") {

        const response = await fetch(`https://usmanurdu.vercel.app/api/${n}/get${n}data?page=${i}&limit=${l}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'topic': n,
            },
            cache: "no-store"
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
    const pageSize: number = 3;
    let titlepage: string = ""
    if (nameofpage === "education") {
        titlepage = "تعلیم و تربیت"
    }
    else if (nameofpage === "food") {
        titlepage = "خوراک"
    }
    else if (nameofpage === "trade") {
        titlepage = "تجارت"
    } else if (nameofpage === "department") {
        titlepage = "معلومات پاکستانی شعبہ جات"
    }
    else if (nameofpage === "love") {
        titlepage = "پیغام محبت سیریز"
    } else if (nameofpage === "solutions") {
        titlepage = "مسائل کا حل"
    } else {
        titlepage = "اخلاقیات"
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

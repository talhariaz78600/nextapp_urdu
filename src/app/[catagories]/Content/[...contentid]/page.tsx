import React from 'react';
import Image from 'next/image';
import Custom404 from '@/app/components/notfound';
const singleeducationdata = async (id: string, ty: string) => {
    if (ty === "trade" || ty === "education" || ty === "ethics" || ty === "department" || ty === "solutions" || ty === "food" || ty === "love") {
        const response = await fetch(`https://usmanurdu.vercel.app/api/${ty}/single${ty}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store" 
        })
        const res = await response.json();
        return res.finddata;
    } else {
        return null
    }
}
async function Content(context: { params: { contentid?: string, catagories?: string } }) {
    const { contentid, catagories } = context.params;
    const idofid = contentid || '1234';
    const nameofpage: string = catagories || "education"
    const urduLocale = 'ur';
    const d = await singleeducationdata(idofid, nameofpage);
    const dateFromMongoDB = d?new Date(d.date):new Date();
    return (
        <div>
            {d && d._id? <div className="container-fluid">
                <div className="row">
                    <div className='col-md-1'>

                    </div>
                    <div className="col-md-11 mt-5">
                        <div className='mb-5' style={{ height: "300px", width: "100%" }}>
                            <Image className='photo' width={100} height={100} src={d.picture} alt="" />
                        </div>
                        <h2 className='mt-5 mb-2 text-primary'>{d.title}</h2>
                        <small>{new Intl.DateTimeFormat(urduLocale, {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        }).format(dateFromMongoDB)}</small>
                        <div className='mt-4 content' style={{lineHeight:"2.5"}} dangerouslySetInnerHTML={{ __html: d.content }}></div>
                    </div>
                </div>
            </div> : <Custom404/>}
        </div>
    )
}

export default Content;

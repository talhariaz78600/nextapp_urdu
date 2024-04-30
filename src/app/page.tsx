// import { GoogleTranslate } from "./components/googleTranslate/Translate";
import Image from "next/image";
import Link from "next/link";
const singleeducationdata = async () => {
  const response = await fetch(`https://usmanurdu.vercel.app/api/home/dataforhome`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store"
  })
  const res = await response.json();
  return res.data;
}
interface EducationData {
  datatype: string,
  finddata: {
    _id: string;
    title: string;
    content: string;
    picture: string;
    topic: string;
  }[]
}
export default async function Home() {
  const maxContentLength: number = 205;

  const trimContent = (content: string): string => {
    return content.length > maxContentLength ? `${content.substring(0, maxContentLength)}۔۔۔۔` : content;
  };
  const data: EducationData[] = await singleeducationdata();
  return (
    <main>
      
      {data.map((con, index) => (
        <div key={index}>
          {con.finddata.length > 0 ? <div className="col-md-12 mt-4 border-top border-primary border-4 mb-3 bg-light pb-1">
            <h2 className="heading px-2">{con.datatype}</h2>
          </div> : ""}
          <div>
            {con.finddata.map((d, index) => {
              const isFirstElement = index === 0;
              return (
                <div key={d._id} className={`textpart col-12`}>
                  <div className={`${isFirstElement ? 'homepart1 mb-3 mt-2' : 'textpart1 mt-2'}`}>
                    <div className="row m-0">
                      <div className={`${isFirstElement ? 'col-12 col-md-8 order-md-1 order-2' : 'col-7 col-lg-8'}`}>
                        <div className="content">
                          <Link href={`/${d.topic}/Content/${d._id}`}>
                            <h4 className="text-primary subheading" style={{ cursor: 'pointer' }}>
                              {d.title}
                            </h4>
                          </Link>
                          <div
                            className={`${isFirstElement ? 'homepara' : 'paragraph'}`}
                            style={{ lineHeight: "2.5" }}
                            dangerouslySetInnerHTML={{
                              __html: trimContent(d.content),
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className={`${isFirstElement ? 'col-12 col-md-4 order-md-2 order-1' : 'col-5 col-lg-4 picturepart'}`}>
                        {d.picture ? (
                          <Image
                            height={1000}
                            width={1000}
                            className={`img-fluid ${isFirstElement ? 'pic w-100' : 'picture'}`}
                            src={d.picture}
                            alt=""
                          />
                        ) : (
                          <div>Loading...</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </main>
  );
}

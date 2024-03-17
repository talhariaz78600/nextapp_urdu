"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
interface PaginationProps {

  stoped: number,
  pagelenght: number,
  pageno: number,
  pagename: string
}

const Pagination: React.FC<PaginationProps> = ({ stoped, pagelenght, pageno, pagename }) => {
  const [back, setBack] = useState<number | null>(null);
  const [stop, setStop] = useState<number | null>(stoped);
  const router = useRouter()

  let pageSize = pagelenght
  let num = pageno;
  useEffect(() => {
    let div: number = Math.floor(stoped / pageSize);
    let rem: number = stoped % pageSize;
    if (rem !== 0) {
      setBack(div + 1)
    }
    else {
      setBack(div);
    }
  }, [num]);
  const handleNextPage = async (i: number) => {
    console.log(i);
    router.push(`/${pagename}/${i}`, { scroll: false })
  };

  const renderArrayElements = () => {
    if (num <= 2) {

      const elements = [];
      for (let i = 1; i <= num + 1; i++) {
        elements.push(<button key={i} className={`px-2 mx-1 ${i === num ? 'bg-primary' : ""} ${back === 1 ? 'd-none' : ""} ${(i - 1) * pageSize >= stoped ? 'd-none' : ""}`} onClick={() => { handleNextPage(i) }}>{i}</button>);
      }
      const reversedArray = [...elements].reverse();
      return reversedArray;
    }
    else {
      const elements = [];
      elements.push(<button key={1} className={`px-2 mx-1`} onClick={() => { handleNextPage(1) }}>{1}</button>, <button key={num - 0.1} className={`px-2 mx-1`}>...</button>, <button key={num - 1} className={`px-2 mx-1`} onClick={() => {
        handleNextPage(num - 1)
      }}>{num - 1}</button>, <button key={num} className={`px-2 mx-1 bg-primary`} onClick={() => { handleNextPage(num) }}>{num}</button>, <button key={num + 1} className={`px-2 mx-1 ${(num) * pageSize >= stoped ? 'd-none' : ""}`} onClick={() => { handleNextPage(num + 1) }}>{num + 1}</button>)
      const reversedArray = [...elements].reverse();
      return reversedArray;
    }

  };

  return (
    <div>
      <button className={`bg-light text-black px-2 mx-1 ${pageno === back ? 'd-none' : ""} `} onClick={() => { handleNextPage(back||0) }}>{back}</button>
      <button className={`${pageno === back ? 'd-none' : ""} px-2 mx-1 `}>...</button>
      {renderArrayElements()}
    </div>
  );
};

export default Pagination;

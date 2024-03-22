import React, { useEffect, useState } from "react";
import DataFromLocal from "../Storage/DataFromLocal";
import ReactToPrint from 'react-to-print';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useRef } from "react";

export default function ShowSavedNotes() {
  const contentRef = useRef(null);
  let nav = useNavigate();
  const [q, setQ] = useSearchParams();
  let preaddedContent =
    localStorage.getItem(q.get("id")) !== null
      ? JSON.parse(localStorage.getItem(q.get("id"))).content
      : "";
  const [content, setContent] = useState(`${preaddedContent}`);
  useEffect(() => {
    preaddedContent =
      localStorage.getItem(q.get("id")) !== null
        ? JSON.parse(localStorage.getItem(q.get("id"))).content
        : "";
    setContent(`${preaddedContent}`);
  }, [q.get("id")]);
  let fileTitle = localStorage.getItem(q.get("id")) !== null
        ? JSON.parse(localStorage.getItem(q.get("id"))).Title:nav('/');
  return (
    <div>
      <div
        ref={contentRef}
        className="showContent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ReactToPrint
        trigger={() => <button className="Download_btn">Download</button>}
        content={() => contentRef.current}
        fileName={fileTitle}
      />
    </div>
  );
}

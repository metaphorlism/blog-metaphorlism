"use client"
import React from "react";
import Script from "next/script";

function Highlight() {
  return <>
    <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></Script>
    <Script id="code-highlight">hljs.highlightAll();</Script>
  </>;
}

export default Highlight;

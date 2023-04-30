"use client"
import React from "react";
import Script from "next/script";

function Highlight() {
  return <Script>hljs.highlightAll();</Script>;
}

export default Highlight;

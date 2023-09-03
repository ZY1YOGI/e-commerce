"use client";

export default function Loading() {
  return (
    <div className="loader" id="loader">
      <div className="loader-ring"></div>
      <span className="text-loader">Loading...</span>
    </div>
  )
}
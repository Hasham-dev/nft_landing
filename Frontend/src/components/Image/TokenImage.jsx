import React, { useState, useEffect, useRef } from "react";

const TokenMedia = ({ tokenId }) => {
  // const [mediaSrc, setMediaSrc] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [videoLoading, setVideoLoading] = useState(true); // State to manage video loading
  // const videoRef = useRef(null); // Reference for the video element

  // // Convert IPFS URL to HTTP URL using a gateway
  // const resolveIpfsUrl = (ipfsUrl) => {
  //   return ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
  // };

  // useEffect(() => {
  //   const fetchMedia = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(
  //         `https://app-vw72p6khfq-uc.a.run.app/token/${tokenId}/`
  //       );
  //       const data = await response.json();

  //       if (data && data.image) {
  //         setMediaSrc(data.image);
  //       } else {
  //         setError(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching media:", error);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMedia();
  // }, [tokenId]);

  // Event handler for when video is loaded
  // const handleVideoLoad = () => {
  //   setVideoLoading(false); // Set loading to false when video data is loaded
  // };

  // if (loading) {
  //   return <p>Loading media...</p>;
  // }

  // if (error) {
  //   return <p>Error loading media.</p>;
  // }

  // // Check if the media source is an MP4 video
  // const isVideo = mediaSrc.endsWith(".mp4");

  // if (isVideo) {
  //   return (
  //     <div>
  //       {videoLoading && <p>Loading video...</p>}{" "}
  //       {/* Loading indicator for video */}
  //       <video
  //         controls={false}
  //         ref={videoRef}
  //         onLoadedData={handleVideoLoad} // Event listener for when video is loaded
  //       >
  //         <source src={resolveIpfsUrl(mediaSrc)} type="video/mp4" />
  //         Your browser does not support the video tag.
  //       </video>
  //     </div>
  //   );
  // }

  return <img src={`/Images/${tokenId}.png`} alt={`Token ${tokenId}`} />;
};

export default TokenMedia;

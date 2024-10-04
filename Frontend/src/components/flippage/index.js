import React from "react";
import HTMLFlipBook from "react-pageflip";
import { ethers, BigNumber } from "ethers";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";
import img11 from "./images/11.png";
import img12 from "./images/12.png";
import img13 from "./images/13.png";
import img14 from "./images/14.png";
import img15 from "./images/15.png";
import img16 from "./images/16.png";
import img17 from "./images/17.png";
import img18 from "./images/18.png";
import img19 from "./images/19.png";
import img20 from "./images/20.png";
import img21 from "./images/21.png";
import img22 from "./images/22.png";
import img23 from "./images/23.png";
import img24 from "./images/24.png";
import img25 from "./images/25.png";
import img26 from "./images/26.png";
import img27 from "./images/27.png";
import img28 from "./images/28.png";
import img29 from "./images/29.png";
import img30 from "./images/30.png";
import img31 from "./images/31.png";
import img32 from "./images/32.png";
import img33 from "./images/33.png";
import img34 from "./images/34.png";
import img35 from "./images/35.png";
import img36 from "./images/36.png";
import img37 from "./images/37.png";
import img38 from "./images/38.png";
import img39 from "./images/39.png";
import img40 from "./images/40.png";
import img41 from "./images/41.png";
import img42 from "./images/42.png";
import img43 from "./images/43.png";
import img44 from "./images/44.png";
import img45 from "./images/45.png";
import img46 from "./images/46.png";
import img47 from "./images/47.png";
import img48 from "./images/48.png";
import img49 from "./images/49.png";
import img50 from "./images/50.png";
import img51 from "./images/51.png";
import img52 from "./images/52.png";
import img53 from "./images/53.png";
import img54 from "./images/54.png";
import img55 from "./images/55.png";
import img56 from "./images/56.png";
import img57 from "./images/57.png";
import img58 from "./images/58.png";
import img59 from "./images/59.png";
import img60 from "./images/60.png";
import img61 from "./images/61.png";
import img62 from "./images/62.png";
import img63 from "./images/63.png";
import img64 from "./images/64.png";
import img65 from "./images/65.png";
import img66 from "./images/66.png";
import img67 from "./images/67.png";
import img68 from "./images/68.png";
import img69 from "./images/69.png";
import img70 from "./images/70.png";
import img71 from "./images/71.png";
import img72 from "./images/72.png";
import img73 from "./images/73.png";
import img74 from "./images/74.png";
import img75 from "./images/75.png";
import img76 from "./images/76.png";
import img77 from "./images/77.png";
import img78 from "./images/78.png";
import img79 from "./images/79.png";
import img80 from "./images/80.png";
import img81 from "./images/81.png";
import img82 from "./images/82.png";
import img83 from "./images/83.png";
import img84 from "./images/84.png";
import img85 from "./images/85.png";
import img86 from "./images/86.png";
import img87 from "./images/87.png";
import img88 from "./images/88.png";
import img89 from "./images/89.png";
import img90 from "./images/90.png";
import img91 from "./images/91.png";
import img92 from "./images/92.png";
import img93 from "./images/93.png";
import img94 from "./images/94.png";
import img95 from "./images/95.png";
import img96 from "./images/96.png";
import img97 from "./images/97.png";
import img98 from "./images/98.png";
import img99 from "./images/99.png";
import img100 from "./images/100.png";

import "./index.css";
import { useState, useEffect } from "react";
import contractABI from "./abi.json";
import TokenImage from "../Image/TokenImage";
import TokenMedia from "../Image/TokenImage";

export default function FlipPage(props) {
 
  const [images, setImages] = useState({
    img1: { load: false, img1: img1 },
    img2: { load: false, img2: img2 },
    img3: { load: false, img3: img3 },
    img4: { load: false, img4: img4 },
    img5: { load: false, img5: img5 },
    img6: { load: false, img6: img6 },
    img7: { load: false, img7: img7 },
    img8: { load: false, img8: img8 },
    img9: { load: false, img9: img9 },
    img10: { load: false, img10: img10 },
    img11: { load: false, img11: img11 },
    img12: { load: false, img12: img12 },
    img13: { load: false, img13: img13 },
    img14: { load: false, img14: img14 },
    img15: { load: false, img15: img15 },
    img16: { load: false, img16: img16 },
    img17: { load: false, img17: img17 },
    img18: { load: false, img18: img18 },
    img19: { load: false, img19: img19 },
    img20: { load: false, img20: img20 },
    img21: { load: false, img21: img21 },
    img22: { load: false, img22: img22 },
    img23: { load: false, img23: img23 },
    img24: { load: false, img24: img24 },
    img25: { load: false, img25: img25 },
    img26: { load: false, img26: img26 },
    img27: { load: false, img27: img27 },
    img28: { load: false, img28: img28 },
    img29: { load: false, img29: img29 },
    img30: { load: false, img30: img30 },
    img31: { load: false, img31: img31 },
    img32: { load: false, img32: img32 },
    img33: { load: false, img33: img33 },
    img34: { load: false, img34: img34 },
    img35: { load: false, img35: img35 },
    img36: { load: false, img36: img36 },
    img37: { load: false, img37: img37 },
    img38: { load: false, img38: img38 },
    img39: { load: false, img39: img39 },
    img40: { load: false, img40: img40 },
    img41: { load: false, img41: img41 },
    img42: { load: false, img42: img42 },
    img43: { load: false, img43: img43 },
    img44: { load: false, img44: img44 },
    img45: { load: false, img45: img45 },
    img46: { load: false, img46: img46 },
    img47: { load: false, img47: img47 },
    img48: { load: false, img48: img48 },
    img49: { load: false, img49: img49 },
    img50: { load: false, img50: img50 },
    img51: { load: false, img51: img51 },
    img52: { load: false, img52: img52 },
    img53: { load: false, img53: img53 },
    img54: { load: false, img54: img54 },
    img55: { load: false, img55: img55 },
    img56: { load: false, img56: img56 },
    img57: { load: false, img57: img57 },
    img58: { load: false, img58: img58 },
    img59: { load: false, img59: img59 },
    img60: { load: false, img60: img60 },
    img61: { load: false, img61: img61 },
    img62: { load: false, img62: img62 },
    img63: { load: false, img63: img63 },
    img64: { load: false, img64: img64 },
    img65: { load: false, img65: img65 },
    img66: { load: false, img66: img66 },
    img67: { load: false, img67: img67 },
    img68: { load: false, img68: img68 },
    img69: { load: false, img69: img69 },
    img70: { load: false, img70: img70 },
    img71: { load: false, img71: img71 },
    img72: { load: false, img72: img72 },
    img73: { load: false, img73: img73 },
    img74: { load: false, img74: img74 },
    img75: { load: false, img75: img75 },
    img76: { load: false, img76: img76 },
    img77: { load: false, img77: img77 },
    img78: { load: false, img78: img78 },
    img79: { load: false, img79: img79 },
    img80: { load: false, img80: img80 },
    img81: { load: false, img81: img81 },
    img82: { load: false, img82: img82 },
    img83: { load: false, img83: img83 },
    img84: { load: false, img84: img84 },
    img85: { load: false, img85: img85 },
    img86: { load: false, img86: img86 },
    img87: { load: false, img87: img87 },
    img88: { load: false, img88: img88 },
    img89: { load: false, img89: img89 },
    img90: { load: false, img90: img90 },
    img91: { load: false, img91: img91 },
    img92: { load: false, img92: img92 },
    img93: { load: false, img93: img93 },
    img94: { load: false, img94: img94 },
    img95: { load: false, img95: img95 },
    img96: { load: false, img96: img96 },
    img97: { load: false, img97: img97 },
    img98: { load: false, img98: img98 },
    img99: { load: false, img99: img99 },
    img100: { load: false, img100: img100 },
  });

  const startURL = "https://viking.server2.cryptocanary.xyz/token/";
  const NiftiContract = "0x68Cf77b11B839b93Ae5C85DE27aa6C2e62b1Dd9A";

  const setIndex = (num) => {
    switch (num) {
      case 1:
        return 53;
      case 2:
        return 34;
      case 3:
        return 73;
      case 4:
        return 65;
      case 5:
        return 45;
      case 6:
        return 56;
      case 7:
        return 21;
      case 8:
        return 77;
      case 9:
        return 10;
      case 10:
        return 24;
      case 11:
        return 25;
      case 12:
        return 95;
      case 13:
        return 43;
      case 14:
        return 41;
      case 15:
        return 2;
      case 16:
        return 42;
      case 17:
        return 83;
      case 18:
        return 81;
      case 19:
        return 84;
      case 20:
        return 19;
      case 21:
        return 47;
      case 22:
        return 99;
      case 23:
        return 59;
      case 24:
        return 37;
      case 25:
        return 13;
      case 26:
        return 49;
      case 27:
        return 51;
      case 28:
        return 89;
      case 29:
        return 27;
      case 30:
        return 91;
      case 31:
        return 88;
      case 32:
        return 75;
      case 33:
        return 7;
      case 34:
        return 61;
      case 35:
        return 35;
      case 36:
        return 70;
      case 37:
        return 67;
      case 38:
        return 63;
      case 39:
        return 9;
      case 40:
        return 92;
      case 41:
        return 93;
      case 42:
        return 50;
      case 43:
        return 52;
      case 44:
        return 39;
      case 45:
        return 60;
      case 46:
        return 79;
      case 47:
        return 100;
      case 48:
        return 5;
      case 49:
        return 4;
      case 50:
        return 33;
      case 51:
        return 54;
      case 52:
        return 15;
      case 53:
        return 12;
      case 54:
        return 46;
      case 55:
        return 55;
      case 56:
        return 17;
      case 57:
        return 23;
      case 58:
        return 26;
      case 59:
        return 97;
      case 60:
        return 85;
      case 61:
        return 57;
      case 62:
        return 30;
      case 63:
        return 72;
      case 64:
        return 64;
      case 65:
        return 86;
      case 66:
        return 58;
      case 67:
        return 29;
      case 68:
        return 31;
      case 69:
        return 68;
      case 70:
        return 69;
      case 71:
        return 71;
      case 72:
        return 62;
      case 73:
        return 8;
      case 74:
        return 36;
      case 75:
        return 32;
      case 76:
        return 87;
      case 77:
        return 76;
      case 78:
        return 94;
      case 79:
        return 90;
      case 80:
        return 28;
      case 81:
        return 40;
      case 82:
        return 14;
      case 83:
        return 38;
      case 84:
        return 48;
      case 85:
        return 20;
      case 86:
        return 80;
      case 87:
        return 82;
      case 88:
        return 6;
      case 89:
        return 3;
      case 90:
        return 1;
      case 91:
        return 44;
      case 92:
        return 96;
      case 93:
        return 98;
      case 94:
        return 18;
      case 95:
        return 78;
      case 96:
        return 22;
      case 97:
        return 11;
      case 98:
        return 16;
      case 99:
        return 66;
      case 100:
        return 74;

      default:
        break;
    }
  };

const getWalletImage = async () => {
    // let address = "0x1Aac39fd0880fecf09bAa85556f2D1ACd7DB5CE6";

  let address = props.wallet;
  console.log("Fetching wallet details for:", address);
  if (!address) return;

  const apiKey = process.env.REACT_APP_BSCSCAN_API_KEY; // Your BscScan API Key
  const contractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS; // NFT Contract Address on BSC
  const bscScanApiUrl = `https://api.bscscan.com/api?module=account&action=tokennfttx&address=${address}&contractaddress=${contractAddress}&page=1&offset=100&sort=asc&apikey=${apiKey}`;

  try {
    // Fetch the transaction history for the NFT contract and wallet
    const response = await fetch(bscScanApiUrl);
    const data = await response.json();

    if (data.status === "1") {
      // Object to store the latest ownership state for each token
      const tokenOwnership = {};

      // Process each transaction
      data.result.forEach((transaction) => {
        const tokenId = transaction.tokenID;

        // If the `to` address matches the wallet, the wallet owns this token
        if (transaction.to.toLowerCase() === address.toLowerCase()) {
          tokenOwnership[tokenId] = true; // The wallet owns the token
        }

        // If the `from` address matches the wallet, it no longer owns this token
        if (transaction.from.toLowerCase() === address.toLowerCase()) {
          tokenOwnership[tokenId] = false; // The wallet transferred the token
        }
      });

      // Filter out the tokens that the wallet still owns
      const ownedTokens = Object.keys(tokenOwnership).filter(
        (tokenId) => tokenOwnership[tokenId]
      );

      console.log("Owned tokens:", ownedTokens);

      // Update the images for owned tokens
      ownedTokens.forEach((tokenId) => {
        let key = "img" + tokenId;

        setImages((prevImages) => ({
          ...prevImages,
          [key]: {
            ...prevImages[key],
            load: true, // Set load to true for owned token images
          },
        }));
      });
    } else {
      console.error("No tokens found or error fetching tokens:", data.message);
    }
  } catch (error) {
    console.error("Error fetching token ownership or updating images:", error);
  }
};

console.log({images});




  useEffect(() => {
    getWalletImage();
    
  }, [props.wallet, props.contract]);

  const renderPageImages = (imageKeys) => {
    
    return imageKeys.map((key) =>{
      
      return images[key].load ? (
        <TokenMedia key={key} tokenId={key.replace("img", "")} alt="" />
      ) : (
        <div></div>
      );
    }
    );
  };
  return (
    <div id="bookContainer">
      <HTMLFlipBook width={300} height={380} showCover={true}>
        <div className="demoPage1"></div>
        <div className="demoPage2"></div>
        <div className="demoPage3">
          {renderPageImages(["img1", "img2", "img3", "img4"])}
          
        </div>
        <div className="demoPage4">
          {renderPageImages(["img5", "img6", "img7", "img8"])}
        </div>
        <div className="demoPage5">
          {renderPageImages(["img9", "img10", "img11", "img12"])}
        </div>
        <div className="demoPage6">
          {renderPageImages(["img13", "img14", "img15", "img16"])}
        </div>  
        <div className="demoPage7">
          {renderPageImages(["img17", "img18", "img19", "img20"])}
        </div>
        <div className="demoPage8">
          {renderPageImages(["img21", "img22", "img23", "img24"])}
        </div>
        <div className="demoPage9">
          {renderPageImages(["img25", "img26", "img27", "img28"])}
        </div>
        <div className="demoPage10">
          {renderPageImages(["img29", "img30", "img31", "img32"])}
        </div>
        <div className="demoPage11">
          {renderPageImages(["img33", "img34", "img35", "img36"])}
        </div>
        <div className="demoPage12">
          {renderPageImages(["img37", "img38", "img39", "img40"])}
        </div>
        <div className="demoPage13">
          {renderPageImages(["img41", "img42", "img43", "img44"])}
        </div>
        <div className="demoPage14">
          {renderPageImages(["img45", "img46", "img47", "img48"])}
        </div>
        <div className="demoPage15">
          {renderPageImages(["img49", "img50", "img51", "img52"])}
        </div>
        <div className="demoPage16">
          {renderPageImages(["img53", "img54", "img55", "img56"])}
        </div>
        <div className="demoPage17">
          {renderPageImages(["img57", "img58", "img59", "img60"])}
        </div>
        <div className="demoPage18">
          {renderPageImages(["img61", "img62", "img63", "img64"])}
        </div>
        <div className="demoPage19">
          {renderPageImages(["img65", "img66", "img67", "img68"])}
        </div>
        <div className="demoPage20">
          {renderPageImages(["img69", "img70", "img71", "img72"])}
        </div>
        <div className="demoPage21">
          {renderPageImages(["img73", "img74", "img75", "img76"])}
        </div>
        <div className="demoPage22">
          {renderPageImages(["img77", "img78", "img79", "img80"])}
        </div>
        <div className="demoPage23">
          {renderPageImages(["img81", "img82", "img83", "img84"])}
        </div>
        <div className="demoPage24">
          {renderPageImages(["img85", "img86", "img87", "img88"])}
        </div>
        <div className="demoPage25">
          {renderPageImages(["img89", "img90", "img91", "img92"])}
        </div>
        <div className="demoPage26">
          {renderPageImages(["img93", "img94", "img95", "img96"])}
        </div>
        <div className="demoPage27">
          {renderPageImages(["img97", "img98", "img99", "img100"])}
        </div>
        <div className="demoPage28"></div>
      </HTMLFlipBook>
    </div>
  );
}

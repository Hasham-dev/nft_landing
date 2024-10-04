import React, { useState } from "react";
import "./button.css";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3modal from "web3modal";
import FlipPage from "../flippage";
import axios from "axios";

const WalletButtons = () => {
    const [account, setAccount] = useState(0);
    const [contract, setContract] = useState("");
    const [loading, setLoading] = useState(false); // Added loader state

    const contractABI = [
        "function symbol() view returns (string)",
        "function ownerOf(uint256 tokenId) view returns (address)",
        "function tokenURI(uint256 tokenId) public view returns (string memory)",
    ];

    const bscNetwork = {
        chainId: "0x38", // 56 in decimal
        chainName: "Binance Smart Chain",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        blockExplorerUrls: ["https://bscscan.com"],
    };

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: "https://bsc-dataseed1.binance.org",
                },
                chainId: 56,
            },
        },
    };

    const connectWallet = async () => {

        try {
            const web3modal = new Web3modal({
                cacheProvider: true,
                providerOptions,
            });
            const instance = await web3modal.connect();
            const web3modalProvider = new ethers.providers.Web3Provider(instance);
            const address = (await web3modalProvider.listAccounts())[0];
            const contractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS;
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                web3modalProvider
            );

            setContract(contract);

            const { chainId } = await web3modalProvider.getNetwork();
            if (chainId !== 56) {
                try {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: bscNetwork.chainId }],
                    });
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: "wallet_addEthereumChain",
                                params: [bscNetwork],
                            });
                        } catch (addError) {
                            console.error("Error adding BSC network:", addError);
                        }
                    } else {
                        console.error("Error switching to BSC network:", switchError);
                    }
                }
            }

            setAccount(address);
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    };

const handleClaim = async () => {
  if (loading) return; // Prevent double clicks
  setLoading(true); // Start loading
//   let account = "0x1Aac39fd0880fecf09bAa85556f2D1ACd7DB5CE6";


  const contractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS;
  const apiKey = process.env.REACT_APP_BSCSCAN_API_KEY; // Your BscScan API key
  const bscScanApiUrl = `https://api.bscscan.com/api?module=account&action=tokennfttx&address=${account}&contractaddress=${contractAddress}&page=1&offset=100&sort=asc&apikey=${apiKey}`;

  try {
    // Fetch NFTs owned by the account on Binance Smart Chain
    const response = await fetch(bscScanApiUrl);
    const data = await response.json();

    // if (data.status === "1") {
    // Object to store the latest ownership state for each token
    const tokenOwnership = {};

    // Process each transaction
    data.result.forEach((transaction) => {
      const tokenId = transaction.tokenID;

      // If the `to` address matches the wallet, the wallet owns this token
      if (transaction.to.toLowerCase() === account.toLowerCase()) {
        tokenOwnership[tokenId] = true; // The wallet owns the token
      }

      // If the `from` address matches the wallet, it no longer owns this token
      if (transaction.from.toLowerCase() === account.toLowerCase()) {
        tokenOwnership[tokenId] = false; // The wallet transferred the token
      }
    });

    // Filter out the tokens that the wallet still owns
    const ownedTokens = Object.keys(tokenOwnership).filter(
      (tokenId) => tokenOwnership[tokenId]
    );

    console.log("Owned tokens:", ownedTokens);

    console.log({ ownedTokens });

    if (ownedTokens.length === 100) {
      alert("Congratulations! You own all 100 tokens.");
      sendEmail();
    } else {
      const missingTokens = [];
      for (let i = 1; i <= 100; i++) {
        if (!ownedTokens.includes(i.toString())) {
          missingTokens.push(i);
        }
      }
      alert(
        `You are missing the following tokens: ${missingTokens.join(", ")}`
      );
    }
    // } else {
    //   console.log("Error fetching NFTs:", data.message);
    // }
  } catch (error) {
    console.log("Error fetching NFTs from BscScan:", error);
  }

  setLoading(false); // End loading
};



    const sendEmail = async () => {
        console.log("Sending email");
        const emailInfo = {
            to: process.env.REACT_APP_TO_EMAIL,
            subject: process.env.REACT_APP_EMAIL_SUBJECT,
            text: `Congratulations! The address ${account} now owns all 100 NFTs.`,
        };

        try {
            console.log("Email info:", emailInfo , process.env.REACT_APP_API_URL);
            const response = await axios.post(process.env.REACT_APP_API_URL, emailInfo, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
console.log("Response:", response);
            if (response.status === 200) {
                console.log("Email sent successfully:", response.data);
                alert("Email sent successfully!");
            } else {
                console.error("Failed to send email:", response.data);
                alert("Failed to send email.");
            }
        } catch (error) {
            console.log("Error sending email:", error);
            alert("Error sending email.", error);
        }
    };
    return (
        <div>
            <FlipPage wallet={account} contract={contract} />
            <div className="button_container" style={{ marginBottom: "10rem" }}>
                <a href="https://mintmemesv1.cr8rtoken.io/">
                    <button className="neon_button">Mint Cards</button>
                </a>
                <button className="neon_button" onClick={connectWallet}>
                    {account === 0 ? "Connect Wallet" : `${account?.slice(0, 8)}....`}
                </button>
                <button className="neon_button" onClick={handleClaim} disabled={loading}>
                    {loading ? "Processing..." : "Claim Button"}
                </button>
            </div>
        </div>
    );
};

export default WalletButtons;
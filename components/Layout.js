import { renderToString } from 'react-dom/server'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Moon, Sun, Home } from "react-feather"
var Layout = props => {
  if (process.browser) {
    if (document.getElementById("dark")) {
      document
        .getElementById("dark")
        .parentNode.removeChild(document.getElementById("dark"));
    }
    document.querySelector("#themeBut").onclick = () => {
      var check = localStorage.getItem("theme");
      if (check == "light") {
        localStorage.setItem("theme", "dark");
        document.getElementById("themeBut").innerHTML = renderToString(<Moon size="1.2em" />)
      } else {
        localStorage.setItem("theme", "light");
        document.getElementById("themeBut").innerHTML = renderToString(<Sun size="1.2em" />)
      }
      if (localStorage.getItem("theme") == "dark") {
        var style = document.createElement("style");
        style.setAttribute("id", "dark");
        style.innerHTML = `
                html,body {
                    background-color:#17171d !important;
                    color:white !important;
                }`;
        document.head.appendChild(style);
      } else {
        document
          .getElementById("dark")
          .parentNode.removeChild(document.getElementById("dark"));
      }
    };
    if (localStorage.getItem("theme") == "dark") {
      document.getElementById("themeBut").innerHTML = renderToString(<Moon size="1.2em" />)
      var style = document.createElement("style");
      style.setAttribute("id", "dark");
      style.innerHTML = `
            html,body {
                background-color:#17171d !important;
                color:white !important;
            }
            `;
      document.head.appendChild(style);
    }
  }

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ paddingBottom: "6rem" }}>
        <Header />
        <span
          style={{ position: "absolute", top: "18px", right: "20px" }}
          id="themeBut"
          className="item"
        >
          <Sun size="1.2em" />
        </span>
        <Link href="/">
          <a
            style={{ position: "absolute", top: "18px", left: "20px" }}
            className="item"
          >
            <Home size="1.2em" />
          </a></Link>
        <div style={{ padding: "5vw" }}>{props.children}</div>
      </div>
      <Footer />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap");
        body,
        html {
          margin: 0px;
          font-weight: 700;
          background-color: white;
          color: black;
          font-size: 1.15em;
          width: 100%;
          height: 100%;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-seri;
        }
        a {
          text-decoration-style: wavy;
          color: #2970f2;
        }
        .redlink {
          color: #ec3750;
        }
        p {
          text-indent: 2rem;
          font-weight: 400;
        }
        ul,
        ol {
          font-weight: 400;
        }
        blockquote {
          border-left: 4px solid #ec3750;
          margin: 1.5em 0em;
          padding: 0.5em 1em;
          font-style: italic;
        }
        .storyImage {
          height: auto;
          width: 30vw;
          border-radius: 30px;
        }
        @media screen and (max-width: 881px) {
          .storyImage {
            width: 256px;
          }
        }
        .code {
          background-color: #f3f3f3 !important;
          color: black;
        }
        .title {
          color: #ec3750;
        }
        .item:hover {
          color: #9cbfff;
          cursor: pointer;
        }
        @media screen and (max-width: 750px) {
          .cardContainer {
            width: 75vw !important;
            margin-bottom: 20px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .mobileCenter {
            display: flex;
          }
          .container {
            display: block !important;
          }
        }
        .cardContainer {
          -webkit-transition: -webkit-transform 0.2s ease-in-out;
          -ms-transition: -ms-transform 0.2s ease-in-out;
          transition: transform 0.2s ease-in-out;
          box-shadow: 5px 5px 5px 5px;
        }
        .cardContainer:hover {
          cursor: pointer;
          transform: rotate(5deg) scale(1.1);
          -ms-transform: rotate(5deg) scale(1.1);
          -webkit-transform: rotate(5deg) scale(1.1);
        }
        .footer {
          width: 100vw;
          display: flex;
          bottom: 0;
          position: absolute;
          height: 6rem;
          flex-direction: column;
        }
        .item {
          color: #2970f2;
        }
        .child {
          width: 50vw;
          margin: auto;
        }
        @media screen and (max-width: 674px) {
          .child {
            width: 100vw;
            margin: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;

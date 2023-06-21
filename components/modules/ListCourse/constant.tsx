import { TListCourse } from "@/interfaces";
import HtmlLogo from "@/assets/icons/html_logo.svg";
import CLogo from "@/assets/icons/c++_logo.svg";
import CSSLogo from "@/assets/icons/css_logo.svg";
import PythonLogo from "@/assets/icons/python_logo.svg";
import DASLogo from "@/assets/icons/dsa_logo.svg";
import JsLogo from "@/assets/icons/js_logo.svg";
import TsLogo from "@/assets/icons/ts_logo.svg";
import ReactLogo from "@/assets/icons/react_logo.svg";

export const listCourse: TListCourse = [
  {
    title: "C++",
    description: "Powerful Programming Language",
    logo: <CLogo className="c-logo" />,
  },
  {
    title: "HTML",
    description: "Powerful Programming Language",
    logo: <HtmlLogo className="html-logo" />,
  },
  {
    title: "CSS",
    description: "Powerful Programming Language",
    logo: <CSSLogo className="css-logo" />,
  },
  {
    title: "Python",
    description: "Powerful Programming Language",
    logo: <PythonLogo className="python-logo" />,
  },
  {
    title: "DSA",
    description: "Powerful Programming Language",
    logo: <DASLogo className="dsa-logo" />,
  },
  {
    title: "Javascript",
    description: "Powerful Programming Language",
    logo: <JsLogo className="js-logo" />,
  },
  {
    title: "Typescript",
    description: "Powerful Programming Language",
    logo: <TsLogo className="ts-logo" />,
  },
  {
    title: "React",
    description: "Powerful Programming Language",
    logo: <ReactLogo className="react-logo" />,
  },
];

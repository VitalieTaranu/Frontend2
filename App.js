import React from "react";
import "./App.css";

function SectionFooter({ text }) {
  return <h2>{text},my color is yellow</h2>;
}

function Section(props) {
  const { id, footerText } = props;
  return (
    <section id={id}>
      <p>Basic section on the page</p>
      <SectionFooter text={footerText} />
    </section>
  );
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleOnClick = () => {
    console.log("clicked");
    this.setState({ liked: true });
  };

  render() {
    if (this.state.liked) {
      return <div>{this.props.text}</div>;
    }

    return <button onClick={this.handleOnClick}>Like</button>;
  }
}

export default function App2() {
  const section1Id = "s1";
  const section2Id = "s2";
  const section1Footer = "I stay at the end of section 1";
  const section2Footer = "Here is section 2 end";
  const textForLikeButton =
    "You liked. This text comes from <App /> component!";

  return (
    <div>
      <h1>Learning react props</h1>
      <Section id={section1Id} footerText={section1Footer} />
      <Section id={section2Id} footerText={section2Footer} />
      <LikeButton text={textForLikeButton} />
    </div>
  );
}

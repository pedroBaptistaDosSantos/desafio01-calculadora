import Image from "next/image";
import Button from "./components/Button";
import Input from "./components/Input";
import Content from "./components/Content";
import Container from "./components/Container";

export default function Home() {
  return (
      <Container>
        <Content><Input/></Content>
      </Container>
  );
}

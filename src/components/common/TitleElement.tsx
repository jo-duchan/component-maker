import React from "react";
import styled from "styled-components";

// Type
import { ContentItem, Size, Aline } from "type/contentDataType";

interface Props {
  data: ContentItem;
  onUpdateHandler: (updateData: ContentItem) => void;
}

interface StyledProps {
  size?: string;
  margin?: Size;
  aline?: Aline;
}

function TitleElement({ data, onUpdateHandler }: Props) {
  const onChangeHandler = (e: React.FormEvent<HTMLParagraphElement>) => {
    const updateItme = data;
    updateItme.content.text = e.currentTarget.textContent;
    onUpdateHandler(updateItme);
  };

  return (
    <Container
      size={data.option.size}
      margin={data.option.margin}
      aline={data.option.aline}
    >
      <Content
        contentEditable
        suppressContentEditableWarning
        onInput={onChangeHandler}
      >
        {data.content.text}
      </Content>
    </Container>
  );
}

export default TitleElement;

const Container = styled.div<StyledProps>`
  display: flex;
  text-align: ${(props) => props.aline};
  width: 100%;
`;

const Content = styled.p<StyledProps>`
  display: block;
  width: 100%;
  font-size: ${(props) => {
    switch (props.size) {
      case "XS":
        return "14px";
      case "S":
        return "16px";
      case "M":
        return "18px";
      case "L":
        return "20px";
      case "XL":
        return "24px";
    }
  }};
  margin-inline: ${(props) => {
    switch (props.margin) {
      case "NONE":
        return "0";
      case "XS":
        return "84px";
      case "S":
        return "156px";
      case "M":
        return "228px";
      case "L":
        return "300px";
      case "XL":
        return "360px";
    }
  }};
  line-height: 20px;
  &:focus {
    outline: none;
  }
`;
import { styled } from "goober";
import { useState, useEffect } from "react";
import { useRemark } from "react-remark";
import { initial_text } from "./assets/markdown.js";

const Flex = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const TextArea = styled("textarea")`
    width: 100%;
    height: 100%;
    height: -webkit-fill-available;
    outline: none;
    border: none;
    padding: 1.4em;
    font-size: 1.2em;
    resize: none;
`;

const Divider = styled("div")`
    height: 100%;
    height: -webkit-fill-available;
    width: 6px;
    background-color: ${({ theme }) => theme.colors[300]};
    opacity: 0.4;
`;

const Display = styled("div")`
    width: 100%;
    height: 100%;
    height: -webkit-fill-available;
    padding: 1.4em;
    overflow-y: scroll;
`;

export default function (props) {
    const [reactContent, setMarkdownSource] = useRemark();

    useEffect(() => {
        setMarkdownSource(initial_text);
    }, []);

    return (
        <Flex>
            <TextArea
                placeholder="type markdown here..."
                onChange={(e) => setMarkdownSource(e.target.value)}
            />
            <Divider />
            <Display>{reactContent}</Display>
        </Flex>
    );
}
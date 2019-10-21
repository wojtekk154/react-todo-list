import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SpinnerContainer = styled.div`
    margin-top: 10vh
    text-align:center;
    color: blue;
`;

const Spinner: React.FC = () => (
    <SpinnerContainer>
        <FontAwesomeIcon icon={faSpinner} spin size={'4x'}/>
    </SpinnerContainer>
)

export { Spinner }

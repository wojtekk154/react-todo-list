import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../../theme/global-style";
import { mainTheme } from "../../../theme/mainTheme";
import { Header } from 'components/organisms/Header';
import { StyledContent } from "./style";

const MainTemplate: React.FC = ({ children }) => (
    <>
        <GlobalStyle/>
        <ThemeProvider theme={mainTheme}>
            <>
                <Header/>
                <StyledContent>
                    {children}
                </StyledContent>
            </>
        </ThemeProvider>
    </>
);

export { MainTemplate }

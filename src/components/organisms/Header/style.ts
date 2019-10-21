import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    right: 0;
    height: 65px;
    background: blue;
    color: white;
    line-height: 65px;
    vertical-align: middle;
    padding: 0 10px;
`;

const Logo = styled.div`
    font-size: 2em;
`;

const MenuList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
 
    li {
        font-size: 1.2em;
        
        
        a, a:active:hover:visited {
            color: white;
            text-decoration: none;
            margin-right: 1.5em;
        }
    }
`;

export { HeaderContainer, Logo, MenuList }

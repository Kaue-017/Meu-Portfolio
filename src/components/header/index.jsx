import styled from "styled-components";
import { theme } from "../theme";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const navTitles = ["Projetos", "Habilidades", "Contato"];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderContainer>
            <div>
                <Link to="/" className="me">
                    <strong>Desenvolvedor Front-End</strong>
                </Link>
            </div>
            <nav>
                <button className={`burger-menu ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}></button>
                <ul className={menuOpen ? "show" : ""}>
                    {navTitles.map((navTitle, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/${navTitle.toLowerCase().replace(/\s+/g, '-')}`}>{navTitle}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 90px;
    background-color: ${theme.headerBackGround};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    position: fixed;
    z-index: 10;
    color: ${theme.textColor};
    font-size: 40px;

.me {
    color: ${theme.textColor};
    transition: 0.3s;
}

.me:hover {
    color: ${theme.hover};
}

.burger-menu {
    border: none;
    background: none;
    border-top: 3px solid #fff;
    cursor: pointer;
    display: none;
}

.burger-menu::before,
.burger-menu::after {
    content: " ";
    display: block;
    width: 30px;
    height: 3px;
    margin-top: 5px;
    background-color: ${theme.textColor};
    position: relative;
    transition: 0.3s;
}

.burger-menu.active {
    position: fixed;
    border-top: transparent;
    
}

.burger-menu.active::before {
    transform: rotate(135deg);
}

.burger-menu.active::after {
    transform: rotate(-135deg);
    top: -7px;
}

ul {
    display: flex;
    gap: 20px;
    margin-right: 50px;
    transition: 0.3s ease-in-out;
    }

ul.show {
    opacity: 1;
    transform: scale(100%);
}

li {
    display: flex;
    align-items: center;
    }

ul a {
    color: ${theme.textColor};
    font-size: 28px;
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 7px;
    transition: color 0.3s ease, text-decoration-color 0.3s ease, 0.3s;
}

ul a:hover {
    text-decoration-color: ${theme.hover};
    color: ${theme.hover};
    transform: scale(105%);
  }

@media(max-width:1450px) {
    height: 70px;
    font-size: 30px;

    ul a {
        font-size: 23px;
    }
}
@media(max-width:1100px) {
    font-size: 25px;

    ul {
    margin-right: 10px;
    }

    ul a {
        font-size: 20px;
    }
}
@media(max-width: 800px) {
    nav {
        margin-top: 175px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    ul {
        flex-direction: column;
        background-color: #282828;
        padding: 20px;
        display: flex;
        margin-top: 27px;
        opacity: 0;
        transform: scale(0%);
    }

    .burger-menu {
        display: block;
        width: 30px;
    }
}

@media(max-width: 490px) {
    padding: 0px;

    .me {
        margin-left: 20px;
        display: flex;
        width: 130px;
        text-align: center;
        font-size: 18px;
    }
    
    nav {
        margin-right: 35px;
    }
}
`
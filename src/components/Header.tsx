import styled from "styled-components";
import { useState } from "react";

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  language: 'ru' | 'en';
  onToggleLanguage: () => void;
  dict: {
    searchPlaceholder: string;
    shortcut: string;
  };
}

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background:rgb(56, 159, 255);
  height: 60px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 8px rgba(44, 19, 80, 0.10);
  padding: 0 32px;
  @media (max-width: 900px) {
    padding: 0 8px;
    height: 54px;
  }
  @media (max-width: 600px) {
    padding: 0 4px;
    height: 48px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f3f3fa;
  border-radius: 8px;
  padding: 0 10px;
  flex: 1;
  min-width: 0;
  max-width: 420px;
  margin-right: 16px;
  transition: box-shadow 0.2s;
  box-shadow: 0 1px 4px rgba(44, 19, 80, 0.04);
  &:focus-within {
    box-shadow: 0 2px 8px rgba(44, 19, 80, 0.12);
  }
  @media (max-width: 900px) {
    max-width: 220px;
    margin-right: 6px;
    padding: 0 6px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    margin-right: 0;
    padding: 0 4px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  font-size: 1em;
  color: #333;
  &::placeholder {
    color: #999;
  }
  @media (max-width: 900px) {
    font-size: 0.9em;
  }
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5em;
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.15s;
  border-radius: 50%;
  padding: 6px;
  &:hover {
    background: rgba(255,255,255,0.10);
  }
  @media (max-width: 900px) {
    margin-left: 8px;
    padding: 4px;
  }
  @media (max-width: 600px) {
    margin-left: 4px;
    padding: 2px;
    font-size: 1.2em;
  }
`;

const IconImg = styled.img`
  width: 22px;
  height: 22px;
`;

const Shortcut = styled.span`
  background: #e5e0fa;
  color:rgb(0, 0, 0);
  border-radius: 6px;
  font-size: 0.9em;
  padding: 2px 8px;
  margin-left: 8px;
`;

const Header = ({ theme, onToggleTheme, language, onToggleLanguage, dict }: HeaderProps) => {
  const [search, setSearch] = useState("");
  return (
    <HeaderBar>
      <LogoBox>
        <LogoImg src="./react.svg" alt="logo" />
      </LogoBox>
      <SearchBox>
        <IconImg src="./search.svg" alt="search" />
        <SearchInput
          type="text"
          placeholder={dict.searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Shortcut>{dict.shortcut}</Shortcut>
      </SearchBox>
      <IconBtn title={language === 'ru' ? 'Switch to English' : 'Переключить на русский'} onClick={onToggleLanguage}>
        <IconImg src="./globe.svg" alt="lang" />
      </IconBtn>
      <IconBtn title="Сменить тему" onClick={onToggleTheme}>
        <IconImg src={theme === 'light' ? './sun.svg' : './moon.svg'} alt="theme" />
      </IconBtn>
    </HeaderBar>
  );
};

export default Header;
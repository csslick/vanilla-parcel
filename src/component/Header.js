// header
import logo from '../../public/images/logo.gif'
const Header = function () {
  const template = `
    <div class="header_wrap">
      <header id="main_header">
        <h1><img src="${logo}" alt="스카이투자자문"></h1>
        <nav id="gnb">
          <ul>
            <li><a href="#">회사소개</a></li>
            <li><a href="#">운용시스템</a></li>
            <li><a href="#">운용상품</a></li>
            <li><a href="#">공지사항</a></li>
            <li><a href="#">Contact US</a></li>
          </ul>
        </nav>
      </header>
    </div>
  `;

  return template;
}

export default Header;
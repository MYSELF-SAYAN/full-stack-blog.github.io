import  './Header.css';

export default function Header() {
  return (
    <div className='header'>
     <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
     </div>
     <img src="https://images.unsplash.com/photo-1676902683876-527e9816ae4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60" alt="" className="headerImg" />
    </div>
  );
}

import React from 'react';
import './Menu.css';
import Generate_li from "./Gererate_li";
import { NavLink } from "react-router-dom";


const Menu = (props) => {

	const newNavLinks = props.navLinks.map (el => <Generate_li key={el.id} title={el.title} to={`/${el.title}`}
															   discr={el.description} active='link_active'
															   classForTitle='menu__item-name'
															   classForDiscr='menu__item-label'
															   className='menu__item'/>);
	return (
		<div className='menu_wrap'>
			<div className='content'>
				<nav className="menu menu--mohe">
					<NavLink to='/SchoolWork/' className="menu__item">
						<span className="menu__item-name first_child">Menu</span>
					</NavLink>
					{newNavLinks}
				</nav>
			</div>
		</div>
	);
};

export default Menu;

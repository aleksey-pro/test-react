import React, { cloneElement } from "react";

export default function TabsHeader({ children, activeTab, onChangeTab }) {
	const tabs = Array.isArray(children) ? children : [children];
	return <ul>
		{ tabs.map((el, i) => (
			<li className={`tabsItem ${activeTab === el.props.id && "active"}`} key={i}>
				{cloneElement(el, { onClick: () => onChangeTab(el.props) })}
			</li>
		))}
	</ul>;
}

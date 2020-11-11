import React, { cloneElement, Fragment } from "react";

export default function TabContent({ children, activeTab }) {
	const tabs = Array.isArray(children) ? children : [children];
	return <Fragment>
		{ tabs.map((el, i) => (
			<Fragment key={i}>
				{ activeTab === el.props.id && cloneElement(el) }
			</Fragment>
		))}
	</Fragment>;
}

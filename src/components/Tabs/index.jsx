import * as React from 'react';
import {
	Fragment, cloneElement, useState,
} from "react";

const Tabs = ({
	children, activeTab = 0,
})  => {
	const tabs = React.Children.toArray(children);
	const [state, setState] = useState({
		activeTab: tabs ? tabs[activeTab].props.id : [],
		visible: false,
	});
	const onChangeTab = (evt, id) => {
		evt.preventDefault();
		setState({
			...state,
			activeTab: id,
		});
	};

	return <div className="services_available">
			<ul className="service_items">
				{tabs.map((el, i) => (
					<li
						className={`item ${state.activeTab === el.props.id && "active"}`}
						key={i}>
						<a href="/" onClick={(e) => onChangeTab(e, el.props.id)} className="item">{el.props.label}</a>
					</li>
				))}
			</ul>
			{tabs.map((el, i) => (
				<Fragment key={i}>
					{ state.activeTab === el.props.id
						&& <div className="service_items__discriptions">
							{cloneElement(el, { onChangeTab })}
						</div>
					}
				</Fragment>
			))}
	</div>;
}

export default Tabs;


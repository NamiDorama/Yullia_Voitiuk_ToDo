import React from 'react';
import { Aside } from '../Aside';
import { Content } from '../Content';
import './main.scss';

const List = ({ list, field, ordered }) => {
	const items = (list || []).map(el => <li key={el.id}>{ el[field || 'title'] }</li>);

	return ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
};

const users = [
	{id: 123, name: 'Patrik'},
	{id: 345, name: 'Aaron'},
	{id: 46, name: 'Teresa'},
	{id: 789, name: 'John'}
];

const Comps = {
	List() {
		return (
			<ul>
				<li>1</li>
				<li>2</li>
			</ul>
		);
	},
	Message(props) {
		return <mark>{props.text}</mark>;
	}
};

const Test = () => (<div>
	<Comps.List />
	<Comps.Message text="Test me" />
</div>);


export const Main = () => (
	<React.Fragment>
		<List
			list={users}
			field="name"
		/>
		<List
			list={users}
			field="name"
			ordered
		/>
		<Test />
	  <main id="main">
	    <Aside />
	    <Content />
	  </main>
	</React.Fragment>
);
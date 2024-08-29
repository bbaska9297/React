const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement(
		'div',
		{ id: 'child1' },

		[
			React.createElement('h1', {}, 'Hi I am h1 tag inside child1'),
			React.createElement('h2', {}, 'Hi I am h2 tag inside child2'),
		]
	),
	React.createElement(
		'div',
		{ id: 'child2' },

		[
			React.createElement('h1', {}, 'Hi I am h1 tag inside child1'),
			React.createElement('h2', {}, 'Hi I am h2 tag inside child2'),
		]
	),
]);
const heading = React.createElement(
	'h1',
	{ id: 'heading' },
	'Hello World from React'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

import './styles/index.scss'
import './index.html'

import $ from 'jquery' //Если она не нужна то закоммить
// =========================================================
const userStack = {
	language: 'JavaScript',
	framework: 'Angular',
}
const user = {
	name: 'Michael',
	age: '30',
	...userStack
}

console.log(user)
// =========================================================
$('.jquery').html('jquery work!')

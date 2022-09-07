//// Classes

////function Course(name, price) {
////	(this.name = name), (this.price = price);
////}
//class Course {
//	constructor(name, price) {
//		{
//			(this.name = name), (this.price = price);
//		}
//	}
//	getName() {
//		return this.name;
//	}
//	getPrice() {
//		return this.price;
//	}
//}

//let reactjsCourse = new Course('Reactjs', 5000);
//let vuejsCourse = new Course('Vuejs', 4000);

//console.log(reactjsCourse);
//console.log(vuejsCourse);

//// default parameter value

//function logger(param) {
//	console.log(param);
//}
//logger('hello các bạn mình tên là Chiju');

//// enhanced object literals

//let fullname = 'Thanh Duy';
//let age = 22;

//let person = {
//	fullname,
//	age,
//	getName() {
//		return fullname;
//	},
//};

//console.log(person);

//// Destructuring (phân rã) -  áp dụng cho Array và Object
//// Rest param: param lấy ra các phần tử còn lại sau khi phân rã
//let array = ['JS', 'Vuejs', 'Reactjs'];
//let [a, ...rest1] = array;

//console.log(a); // JS
//console.log(rest1); // ['Vuejs','Reactjs']

//let object1 = {
//	font: 'Time new roman',
//	size: 24,
//	style: 'italic',
//};
//let { font, ...rest2 } = object1;

//console.log(font); // Time new roman
//console.log(rest2); // {size: 24, style: 'italic'}

//// destructuring ngay trong phần nhận param
//function logger2({ course, price, ...restt }) {
//	console.log(course);
//	console.log(price);
//	console.log(restt);
//}
//logger2({
//	course: 'Javascript',
//	price: 1234,
//	description: 'Khóa học javascript',
//});

//// spread

//let arr1 = ['Vue', 'react', 'angular'];
//let arr2 = ['bootstrap', 'tailwind'];
//let arr3 = [...arr2, ...arr1];
//console.log('hehehe', arr3); //['bootstrap', 'tailwind', 'Vue', 'react', 'angular']

//let arrray = ['10', '20', '30', '40'];
//function vlNam(...restNam) {
//	console.log(...restNam);
//}
//vlNam(...arrray);
////console.log(rray);
const person1 = {
	name: 'Son',
	age: 21,
};

// Expected results
console.log(person2.name); // Output: 'Son'
console.log(person2.age); // Output: 21
console.log(person1 === person2); // Output: false
